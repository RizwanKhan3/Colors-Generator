import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

export const SingleColor = ({ color: { hex, weight } }) => {
  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success(`Copy To Clipboard #${hex}`)
      } catch (error) {
        toast.error('Failed to Copy to Clipboard')
      }
    } else {
      toast.error('Clipboard Access not available')
    }
  }
  return (
    <article
      className='flex w-52 flex-wrap h-64 m-3 flex-col items-center justify-center shadow-lg rounded-xl'
      onClick={saveToClipBoard}
    >
      <div
        className='flex flex-1 w-40 flex-wrap h-45 m-3 rounded-md '
        style={{ background: `#${hex}` }}
      ></div>
      <h1>#{hex}</h1>
      <h1>{weight}</h1>
    </article>
  )
}
