import { useState } from 'react'

import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import { Form } from './components/Form.jsx'
import Values from 'values.js'
import { ColorList } from './components/ColorList.jsx'
function App() {
  const [colors, setColors] = useState(new Values('#09255d').all(10))
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10)
      setColors(newColor)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App
