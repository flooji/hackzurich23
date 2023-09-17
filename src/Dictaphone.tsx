import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"; // FUTURE TODO: polylabs would make recognition better and more reliable
import LiveConversation from "./LiveConversation";
import {Link} from "react-router-dom";

const Dictaphone = () => {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [listeningPrompt, setListeningPrompt] = React.useState(false);
  const [lastWordTime, setLastWordTime] = React.useState(0);
  const [promptUser, setPromptUser] = React.useState("");

  const secondsSinceLastWordThreshold = 5; // seconds

  function startListening() {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    }).then(r => console.log("Started listening"));
  }

  useEffect(() => {
    startListening();
  }, []);

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
    return <div className="p-4 text-white">Browser doesn't support speech recognition.</div>;
  }

  return (
    <div className="px-6 flex flex-col md:flex-row">
      <div className="flex flex-row md:flex-col">
        <Link to={'/'}>
          <div
              className="mt-6 bg-orange-600 hover:bg-orange-400 flex items-center justify-center rounded-lg mb-2 mr-2 w-12 h-12 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fill-rule="evenodd"
                    d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                    clip-rule="evenodd"/>
            </svg>
          </div>
        </Link>
        <button onClick={resetTranscript} className="mt-6 text-sm mb-2 md:mt-2 mr-2 bg-orange-600 hover:bg-orange-400 flex items-center justify-center rounded-lg h-12 w-12 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
          </svg>
        </button>
        <button onClick={SpeechRecognition.stopListening} className="mt-6 text-sm mb-2 md:mt-2 mr-2 bg-orange-600 hover:bg-orange-400 flex items-center justify-center rounded-lg h-12 w-12 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
          </svg>
        </button>
        <button onClick={startListening} className="mt-6 text-sm mb-2 md:mt-2 mr-2 bg-orange-600 hover:bg-orange-400 flex items-center justify-center rounded-lg h-12 w-12 px-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col flex-grow justify-center items-center">
        <LiveConversation prompt={promptUser} />
        <p className="w-full md:w-3/4 h-full text-center text-gray-500">
          { listeningPrompt && transcript }
        </p>
        <div className="relative bottom-0 w-84 flex justify-center object-contain">
          <img className="w-96"
               src={ listeningPrompt ? "/images/SoundWave.gif" : "/images/Silence.png"}
          />
        </div>
      </div>
    </div>
  );
};
export default Dictaphone;
