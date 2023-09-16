import React from 'react';
import './App.css';
import {useReactMediaRecorder} from "react-media-recorder";

function VoiceRecorder() {
  const { status, startRecording, stopRecording } =
      useReactMediaRecorder({ video: false });

  return (
      <div>
        <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button>
      </div>
  );
}

export default VoiceRecorder;
