import { AudioTranscript } from "@/types/audioTranscript"
import { Avatar } from "@/types/avatar"
import { useState, useCallback } from "react"


export function useWebRTC() {
  const [isConnected, setIsConnected] = useState(false)
  const [audioTranscripts, setAudioTranscripts] = useState<AudioTranscript[]>([])
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null)
  const [dataChannel, setDataChannel] = useState<RTCDataChannel | null>(null)

  const connect = useCallback(async (avatar: Avatar, currentScenario: string) => {
    try {
      const tokenResponse = await fetch("/api/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: avatar.language,
          voice: avatar.voice,
          scenario: currentScenario,
        }),
      })
      const data = await tokenResponse.json()
      const EPHEMERAL_KEY = data.client_secret.value

      const pc = new RTCPeerConnection()
      setPeerConnection(pc)

      const audioEl = new Audio()
      audioEl.autoplay = true
      pc.ontrack = (e) => {
        audioEl.srcObject = e.streams[0]
      }

      const ms = await navigator.mediaDevices.getUserMedia({ audio: true })
      pc.addTrack(ms.getTracks()[0])

      const dc = pc.createDataChannel("oai-events")
      setDataChannel(dc)

      dc.addEventListener("message", (e) => {
        const realtimeEvent = JSON.parse(e.data)
        switch (realtimeEvent.type) {
          case "response.audio_transcript.done":  // AI側のtranscript
            console.log(realtimeEvent.type)
            setAudioTranscripts((prev) => [...prev, { id: realtimeEvent.item_id, role: 'assistant', transcript : realtimeEvent.transcript}])
            break
          case "conversation.item.input_audio_transcription.completed":  // ユーザー側のtranscript
            console.log(realtimeEvent.type)
            setAudioTranscripts((prev) => [...prev, { id: realtimeEvent.item_id, role: 'user', transcript : realtimeEvent.transcript}])
            break
          default:
            console.log("Unhandled event type:", realtimeEvent.type)
        }
      })

      const offer = await pc.createOffer()
      await pc.setLocalDescription(offer)

      const baseUrl = "https://api.openai.com/v1/realtime"
      const model = "gpt-4o-mini-realtime-preview-2024-12-17"
      const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
        method: "POST",
        body: offer.sdp,
        headers: {
          Authorization: `Bearer ${EPHEMERAL_KEY}`,
          "Content-Type": "application/sdp",
        },
      })

      const answer = {
        type: "answer",
        sdp: await sdpResponse.text(),
      }
      await pc.setRemoteDescription(answer as RTCSessionDescriptionInit)

      setIsConnected(true)
    } catch (error) {
      console.error("Error connecting:", error)
    }
  }, [])

  const disconnect = useCallback(() => {
    if (peerConnection) {
      peerConnection.close()
    }
    if (dataChannel) {
      dataChannel.close()
    }
    setIsConnected(false)
    setPeerConnection(null)
    setDataChannel(null)

    // setAudioTranscripts([])

  }, [peerConnection, dataChannel])


  return {
    isConnected,
    connect,
    disconnect,
    audioTranscripts,
  }
}
