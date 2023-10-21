import React, { useState } from 'react'

export const Form = ({ addColor }) => {
  const [color, setColor] = useState('#09255d')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <div className='flex my-20 px-28 flex-col items-start flex-wrap w-full'>
      <h1 className='text-4xl mb-4'>Color Generator</h1>
      <form
        action=''
        className='flex justify-center flex-wrap'
        onSubmit={handleSubmit}
      >
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          className='px-6 py-4 text-2xl bg-slate-300 rounded-l'
          value={color}
          placeholder='#fefef5 ....'
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          type='submit'
          className='px-3 py-3 rounded-r'
          style={{ background: color, color: 'white' }}
        >
          Generate
        </button>
      </form>
    </div>
  )
}
