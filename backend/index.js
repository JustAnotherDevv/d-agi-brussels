const fs = require('fs');
const { SpeechClient } = require('@soniox/soniox-node');

const express = require('express');

const app = express();
const port = 3001;

const speechClient = new SpeechClient();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/transcribe', (req, res) => {
  (async function () {
    const result = await speechClient.transcribeFileShort(
      './test_audio_sd.flac',
      {
        model: 'en_v2',
        enable_global_speaker_diarization: true,
        min_num_speakers: 1,
        max_num_speakers: 6,
      },
    );

    // Print results with each speaker segment on its own line.

    let speaker = 0;
    let line = '';

    for (const word of result.words) {
      if (word.speaker !== speaker) {
        if (line.length > 0) {
          console.log(line);
        }

        speaker = word.speaker;
        line = `Speaker ${speaker}: `;

        if (word.text == ' ') {
          // Avoid printing leading space at speaker change.
          continue;
        }
      }

      line += word.text;
    }

    console.log(line);
    res.send(line.toString());
  })();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
