import React from 'react'
import { MdKeyboardVoice } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { setAlarmByVoice } from '../../../../utils/setAlarmByVoice';
const VoiceCommand = ({setAlarms}) => {

  const token = import.meta.env.VITE_WIT_AI_API_KEY

  const captureVoice = () =>{
    const recognition = new window.webkitSpeechRecognition();

    recognition.lang = "en-us"
    recognition.interimResult = false
    recognition.maxAlternative = 1

    let transcript = ""

    recognition.onstart = () =>{
      // toast.success('voice is capturing', theme)
      toast.success('Voice is capturing' , {theme : 'dark'})
    }

    recognition.onresult = (event) =>{
      transcript = event.results[0][0].transcript
      toast.success('Voice is captured' , {theme : 'dark'})
    }

    recognition.onend = () =>{
      setAlarmByVoice(transcript, token, setAlarms)
    }

    recognition.start()
   }

  return (
    <div className='absolute bottom-0 h-12 bg-gray-300 w-full flex justify-center items-center' >
      <p onClick={captureVoice} className='text-3xl cursor-pointer' ><MdKeyboardVoice/></p>

      <ToastContainer/>
    </div>
  )
}

export default VoiceCommand
