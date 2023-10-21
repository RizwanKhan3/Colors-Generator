import React from 'react'
import { SingleColor } from './SingleColor.jsx'

export const ColorList = ({ colors }) => {
  return (
    <div className='flex flex-wrap justify-between p-2 items-center flex-row'>
      {colors.map((color, index) => {
        return <SingleColor key={index} color={color} />
      })}
    </div>
  )
}
