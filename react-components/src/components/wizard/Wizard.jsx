import React from 'react'
import Step from './Step'
import Button from '../Button'

export default function Wizard({ children }) {
  return (
    <div className='bg-red-500 flex flex-col w-full min-w-[1000px]'>
      <div className='bg-gray-50 border-b border-gray-300 px-14 pt-10 pb-16'>
        <div className='flex justify-between relative'>
          <Step status='actived' label="Item">1</Step>
          <Step status='disabled' label="Item">2</Step>
          <Step status='disabled' label="Item">3</Step>
          <div className='h-px w-full absolute bg-blue-900 top-1/2 z-0'></div>
        </div>
      </div>
      <div className='text-black bg-white p-14'>
        {children}
      </div>
      <div className='bg-gray-50 flex justify-between px-14 py-8 border-t border-gray-300'>
        <Button variant="tertiary">Cancelar</Button>
        <div className='flex gap-6'>
          <Button variant="secundary">Voltar</Button>
          <Button type='submit' variant="primary">Avançar</Button>
        </div>
      </div>
    </div>
  )
}
