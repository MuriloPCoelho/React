import React from 'react'

export default function Step({label, status, children}) {
  /* default, actived, disabled, success, warining, error */ 

  let baseStyle = 'w-10 aspect-square flex justify-center items-center font-bold border rounded-full z-10 relative ';
  let labelStyle = 'absolute top-12 font-semibold '

  switch (status) {
    case 'actived':
      baseStyle += 'bg-blue-900 text-white border-white';
      labelStyle += 'text-blue-900';
      break;
    case 'disabled':
      baseStyle += 'bg-white text-blue-100 border-blue-100';
      break;
    default:
      baseStyle += 'bg-white text-blue-900 border-blue-900';
      labelStyle += 'text-blue-900';
      break;
  }

  return (
    <div className={baseStyle}>
      {children}
      {label && <div className={labelStyle}>{label}</div>}
    </div>
  )
}
