import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('#06d6a0')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setcolor('red')} style={{backgroundColor:'red'}} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
            Red
          </button>
          <button onClick={()=>setcolor('orange')} style={{backgroundColor:'orange'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
            Orange
          </button>
          <button onClick={()=>setcolor('green')} style={{backgroundColor:'green'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
            Green
          </button>
          <button onClick={()=>setcolor('blue')} style={{backgroundColor:'blue'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
            Blue
          </button>
          <button onClick={()=>setcolor('yellow')} style={{backgroundColor:'yellow'}}className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>
            Yellow
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
