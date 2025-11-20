import React from 'react'
import { MdKeyboardVoice } from "react-icons/md";

const VoiceCommand = () => {
  return (
    <div className='absolute bottom-0 h-12 bg-gray-300 w-full flex justify-center items-center' >
      <p className='text-3xl cursor-pointer' ><MdKeyboardVoice/></p>
    </div>
  )
}

export default VoiceCommand
