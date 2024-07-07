"use client"
import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';
import React, { useState, useEffect } from 'react';
import { ReactMic, ReactMicStopEvent } from 'react-mic';

const Features = () => {
  const t = useTranslations('Features');

  const [isListening, setIsListening] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [record, setRecord] = useState<boolean>(false);

  const startListening = () => {
    setIsListening(true);
    setRecord(true);
    setTimerInterval(setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000));
  };

  const stopListening = () => {
    setIsListening(false);
    setRecord(false);
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    setElapsedSeconds(0);
  };

  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [timerInterval]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  const onData = (recordedBlob: Blob) => {
    console.log('Chunk of real-time data:', recordedBlob);
    // Process the recorded audio data chunk here
  };

  const onStop = (recordedBlob: ReactMicStopEvent) => {
    console.log('Recorded Blob:', recordedBlob);
    // Process the recorded audio data blob here
  };

  /*
    chat Bubble
  */
    const [messages, setMessages] = useState([
      { text: "Hello! How can I help you today?", sender: 'bot' },
      { text: "Hi there! I'm looking for some information.", sender: 'user B' },
      { text: "Sure! What do you need help with?", sender: 'user A' },
      { text: "Sure! What do you need help with?", sender: 'bot' },
      // Add more messages as needed
    ]);

  return (
    <>
    <div className="background">
      <section>
        <div className="controls">
          <button onClick={isListening ? stopListening : startListening}>
            {isListening ? 'Stop Listening' : 'Start Listening'}
          </button>
          <div id="microphoneIcon" className={isListening ? 'listening' : ''}>
            &#x1F3A4;
          </div>
        </div>
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
          strokeColor="#FF4081" /* Customize wave color */
          backgroundColor="#FFFFFF" /* Customize background color */
          visualSetting="sinewave" /* Adjust wave animation style */
        />
        <div className="timer">
          <p>Time Elapsed: <span id="timer">{formatTime(elapsedSeconds)}</span></p>
        </div>
      </section>
    </div>

    <div className="background">
      <div className="conversation-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message-container ${message.sender}`}>
              <div className="sender-box">
                <span className="sender">{message.sender}</span>
              </div>
              <div className={`message ${message.sender}`}>
                <span className="text">{message.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export { Features };


/*


*/