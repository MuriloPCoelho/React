import React from 'react'

export default function Button({variant, children}) {

  let baseStyle = 'px-4 py-2 cursor-pointer rounded-full active:bg-blue-950 active:text-white ';

  switch (variant) {
    case 'primary':
      baseStyle += 'bg-blue-700 text-white transition-colors hover:bg-blue-900';
      break;
    case 'secundary':
      baseStyle += 'text-blue-700 bg-white border border-blue-700 transition-colors hover:bg-blue-50';
      break;
    case 'tertiary':
      baseStyle += 'text-blue-700 transition-colors hover:bg-gray-100';
      break;
    default:
      break;
  }

  return (
    <div className={baseStyle}>{children}</div>
  )
}
