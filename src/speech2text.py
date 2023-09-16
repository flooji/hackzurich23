api_key="e8158a5af2206088830149d46ce766bd"


from elevenlabs import clone, generate, play, set_api_key
from elevenlabs.api import History
from elevenlabs import Voice, VoiceSettings, generate

set_api_key(api_key)



audio = generate(
    text="Hello! My name is Bella.",
    voice=Voice(
        voice_id='EXAVITQu4vr4xnSDxMaL',
        settings=VoiceSettings(stability=0.71, similarity_boost=0.5, style=0.0, use_speaker_boost=True)
    )
)


play(audio)

history = History.from_api()
print(history)
