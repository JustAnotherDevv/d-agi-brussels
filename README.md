# Soundscape

### Overview

Soundscape is a groundbreaking mobile web app designed to empower people with deafness or hearing impairments by transforming their auditory environment into an accessible and informative experience.

## How it works

Soundscape is a mobile web app, ensuring accessibility across various devices. It utilizes cutting-edge technologies to empower users:

- AI Audio Analysis: Advanced AI algorithms dissect and understand surrounding audio, providing a clear visual representation.
- AI Speech Recognition: Conversations are deciphered from background noise, displayed with speaker identification for improved comprehension.
Interactive Visualization Engine: A visually intuitive engine translates audio data into meaningful and engaging visualizations.

## Technical details

Breaking Down Barriers:

- **Visualize Sounds:** We leverage AI to analyze surrounding audio and translate it into a dynamic visual representation.
- **Unveiling Conversations:** Soundscape utilizes AI speech recognition to extract conversations from background noise. Conversations are displayed as clear chat bubbles with speaker identification, allowing you to discreetly follow the dialogue without needing to actively listen.
- **Speaker Recognition:**  The recognition of multiple speakers at once performed based on the audio input alone.

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/JustAnotherDevv/d-agi-brussels/
cd d-agi-brussels
npm install
npm run dev
```

Then install backend dependencies and export your AI API key

```shell
cd backend
npm install
export SONIOX_API_KEY=<API_KEY>
node index.js
```

Open http://localhost:3000 with your favorite browser to see your project.

Your backend is available at http://localhost:3001 

Based on the [SaaS Boilerplate](https://react-saas.com).