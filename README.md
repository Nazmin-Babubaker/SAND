# CODERECET

## Project Repository
*Commit and save your changes here*

### Team Name : SAND
### Team Members : AADARSH AJITH, NAZMIN BABU, DHANANJAY R, SABARI VIJAYAN
### Project Description
Pause2Learn is a Chrome extension designed to transform passive video watching into active learning. This intelligent tool automatically fetches the transcript of any YouTube video you're watching and, at regular time intervals set by the user, it generates thought-provoking questions based on the video content covered up to that point.

The extension pauses the video playback, displays a question in a popup modal, and prompts the user to answer before resuming the video. The questions are generated using Google's Gemini API, leveraging advanced language models to ensure high-quality, context-relevant quiz content.

This enhances comprehension, retention, and engagement, making YouTube an interactive learning experience.
.
.
.

## Technical Details
Transcript Fetching:

Utilizes the YouTube Transcript API to fetch real-time video transcripts.

Question Generation:

Uses the Gemini API (via REST calls from a Node.js backend) to generate questions based on the transcript up to the paused timestamp.

Custom Pause Intervals:

Users can define the time interval (e.g., every 30s, 1min) after which the extension pauses the video and shows a quiz popup.

Frontend Integration:

The Chrome extension uses JavaScript to inject a content script that interacts with the YouTube video DOM, manages pausing, and displays the question modal.

Backend Infrastructure:

Node.js + Express.js server handles:

Transcript fetching

Prompt formatting and Gemini API calls

Logging interactions

Database and Logging:

Supabase is used to store:

User-defined settings

Question logs and responses

Metadata for analytics or review



### Technologies/Components Used
JavaScript: Core language used for the Chrome extension's frontend logic and user interactions.

Node.js: Backend runtime environment for handling API requests and server-side logic.

Express.js: Web framework used to build the backend server and handle routes (e.g., transcript processing and Gemini API calls).

Gemini API: Used for generating AI-powered questions based on the YouTube video transcript content.

YouTube Transcript API: Fetches transcript text for the current YouTube video without requiring captions to be turned on.

Supabase: Backend-as-a-Service used for storing user settings, quiz logs, and managing real-time data.

Chrome Extension APIs: Enables interaction with YouTube’s video player, DOM manipulation, and background-content script communication.

## For Software:

[Languages used]
Javascript

[Frameworks used]
Node.js
Express.js

[Tools used]
Youtube-transcript-API
Gemini API
Supabase

## Implementation
Video Interaction via Content Script

A content script runs on YouTube pages, detects and controls the video player.

At user-defined time intervals (e.g., every 30s), the script automatically pauses the video.

It then sends a message to the background script to trigger transcript fetching and question generation.

Transcript Fetching

The backend receives the video ID and current timestamp from the frontend.

It uses the YouTube Transcript API to fetch the transcript up to that timestamp.

AI-Powered Question Generation

The transcript data is formatted into a prompt.

The backend (Node.js + Express) sends this prompt to the Gemini API, which returns a multiple-choice or short-answer question based on the video content.

Displaying the Quiz

The question is sent back to the content script.

A popup modal appears on the video, presenting the user with the question and answer options.

The user must answer the question before the video resumes.

Data Storage & Logging

User settings (like interval time) and quiz performance are stored using Supabase.

This allows potential future features like progress tracking, analytics, or review mode.

Chrome Extension Architecture

The extension uses standard Chrome Extension APIs for messaging between content.js, background.js, and the backend.

Popup UI (if any) can be used for initial settings and user configuration.

## For Software:

### Installation
[commands]

Run npm install to install dependencies.

### Run
[commands]

Start the backend server with npm start.

In Chrome, go to chrome://extensions/, enable Developer Mode, click Load Unpacked, and select the extension folder.

Click the extension icon and manually set your preferred time interval.

Play a YouTube video — the extension will pause at intervals and show AI-generated questions.


### Project Documentation

### Screenshots (Add at least 3)

### Diagrams
Workflow(Add your workflow/architecture diagram here) Add caption explaining your workflow

### Video
https://drive.google.com/drive/folders/1HOTeqti5XVMlzlT5YeqZMYzLg65gByuH?usp=sharing

## Team Contributions
Dhananjay R: Developed the Node.js server, implemented YouTube transcript API integration using JavaScript.

Nazmin Babu: Built backend functionalities, handled API calls, and tested POST requests.

Aadarsh Ajith: Integrated AI (Gemini API) and designed effective prompt structures.

Sabari Vijayan: Worked on backend logic, Supabase integration, and connected backend with the frontend.
