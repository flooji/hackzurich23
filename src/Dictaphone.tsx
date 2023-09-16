import React, {useEffect, useState} from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition"; // FUTURE TODO: polylabs would make recognition better and more reliable

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();
    const [loadAudio, setLoadAudio] = useState(false);
    const [audioSrc, setAudioSrc] = useState<string | null>(null);


    useEffect(() => {
        if (!loadAudio) return;

        async function fetchAudio() {
            const url = "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL"
            const data = {
                "text": "Hi! My name is Bella, nice to meet you!",
                "model_id": "eleven_monolingual_v1",
                "voice_settings": {
                    "stability": 0.5,
                    "similarity_boost": 0.5
                }
            }
            const requestOptions = {
                method: 'POST',
                headers:{
                    "Accept": "audio/mpeg",
                    "Content-Type": "application/json",
                    "xi-api-key": "e8158a5af2206088830149d46ce766bd"
                },
                body: JSON.stringify(data) // Convert data to string format
            };

            const response = await fetch(url, requestOptions);

            if (response.ok) {
                const audioData = await response.blob();
                const audioUrl = URL.createObjectURL(audioData);
                setAudioSrc(audioUrl);
            } else {
                console.error('Failed to fetch audio');
            }
        }

        fetchAudio();

        return () => {
            if (audioSrc) {
                // Revoke the Object URL to free up resources
                URL.revokeObjectURL(audioSrc);
            }
        };
    }, [loadAudio]);

    const [listeningPrompt, setListeningPrompt] = React.useState(false);
    const [lastWordTime, setLastWordTime] = React.useState(0);

    const secondsSinceLastWordThreshold = 4; // seconds
    useEffect(() => {
        SpeechRecognition.startListening({
            continuous: true,
            language: "en-US",
        })
    }, []);

    useEffect(() => {
        console.log("New transcript :", transcript);
        let now = new Date().getTime();

        if (listeningPrompt) {
            console.log(
                "listeningPrompt is True. Time since last word: ",
                (now - lastWordTime) / 1000,
                "s"
            );

            // If user stopped talking for 5 seconds, send transcript to server
            if (now - lastWordTime > secondsSinceLastWordThreshold * 1000) {
                console.log("SENDING TRANSCRIPT TO SERVER:");
                console.log(transcript);
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

    const recordIndication = <div className="absolute right-10 top-24">
                <span className="relative flex h-8 w-8">
              <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full w-8 h-8 bg-red-700"></span>
            </span>
    </div>

    return (
        <div className="bg-white text-black">
            {/*{*/}
            {/*    listening && recordIndication*/}
            {/*}*/}
            <p>Microphone: {listening ? "on" : "off"}</p>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{listeningPrompt ? transcript : 'Say "Okay Chef"'}</p>
            <button onClick={() => setLoadAudio(true)}>Load and Play Audio</button>
            {audioSrc && (
                <audio autoPlay>
                    <source src={audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
};
export default Dictaphone;
