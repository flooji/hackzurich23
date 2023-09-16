import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"; // FUTURE TODO: polylabs would make recognition better and more reliable
import LiveConversation from "./LiveConversation";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [listeningPrompt, setListeningPrompt] = React.useState(false);
  const [lastWordTime, setLastWordTime] = React.useState(0);
  const [promptUser, setPromptUser] = React.useState("");

  const secondsSinceLastWordThreshold = 5; // seconds

  useEffect(() => {
    //console.log("New transcript :", transcript);
    let now = new Date().getTime();

    if (promptUser !== "") {
      setPromptUser("");
    }

    if (listeningPrompt) {
      // If user stopped talking for 5 seconds, send transcript to server
      if (now - lastWordTime > secondsSinceLastWordThreshold * 1000) {
        console.log("SENDING TRANSCRIPT TO SERVER:");
        console.log(transcript);
        setPromptUser(transcript);
        setListeningPrompt(false);
        resetTranscript();
      }
    }

    if (checkOkayChef(transcript)) {
      console.log("Okay Chef!");
      setListeningPrompt(true);
      resetTranscript();
    }
    setLastWordTime(now); // start timer
  }, [transcript]);

  const checkOkayChef = (transcript: string) => {
    const okayChef = "okay chef";
    transcript = transcript.toLowerCase();
    if (transcript.includes(okayChef)) {
      return true;
    }
    return false;
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <LiveConversation prompt={promptUser} />
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() =>
          SpeechRecognition.startListening({
            continuous: true,
            language: "en-US",
          })
        }
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{listeningPrompt ? transcript : 'Say "Okay Chef"'}</p>
    </div>
  );
};
export default Dictaphone;
