import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function StepIndicator() {
  return (
    <div className='absolute bg-green-600 aspect-square w-5 left-6 text-xs bottom-6 flex justify-center items-center rounded-full text-white'>
        <FontAwesomeIcon  icon={faCheck}/>
    </div>
  )
}
