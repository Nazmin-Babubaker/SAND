// getTranscript.js
import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

/**
 * Get captions for a given YouTube video and language (default: English).
 * @param {string} videoId - YouTube video ID
 * @param {string} language - Language code, e.g., "en", "hi"
 * @returns {Promise<Array<{ caption: string, startTime: number, endTime: number }>>}
 */
export default async function getYoutubeTranscript(videoId, language = "en") {
	console.log("Transcript fetched for:", videoId);
	const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
	const html = await fetch(videoUrl).then((res) => res.text());

	const apiKeyMatch = html.match(/"INNERTUBE_API_KEY":"([^"]+)"/);
	if (!apiKeyMatch) throw new Error("INNERTUBE_API_KEY not found.");
	const apiKey = apiKeyMatch[1];

	const playerData = await fetch(
		`https://www.youtube.com/youtubei/v1/player?key=${apiKey}`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				context: {
					client: {
						clientName: "ANDROID",
						clientVersion: "20.10.38",
					},
				},
				videoId,
			}),
		}
	).then((res) => res.json());

	const tracks =
		playerData?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
	if (!tracks) throw new Error("No captions found.");
	const track = tracks.find((t) => t.languageCode === language);
	if (!track) throw new Error(`No captions for language: ${language}`);
	const baseUrl = track.baseUrl.replace(/&fmt=\w+$/, "");

	const xml = await fetch(baseUrl).then((res) => res.text());
	const parsed = await parseStringPromise(xml);

	return parsed.transcript.text.map((entry) => ({
		caption: entry._,
		startTime: parseFloat(entry.$.start),
		endTime: parseFloat(entry.$.start) + parseFloat(entry.$.dur),
	}));
}
