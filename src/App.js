import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './Main'


const App = () => {
  return (
    <>
      <div className='header'>
        <h1 className='text-center mt-5'>Weather Search</h1>
      </div>
      <Main />
    </>
  )
}
export default App