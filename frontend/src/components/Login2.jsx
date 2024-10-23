import React from 'react'
import './Login2.css'

const Login2 = () => {
  return (
    <div className='main'>
      <div className= "flex items-center justify-center h-screen">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={() => {}}>
            <h4 className="text-2xl mb-7 text-black">Login</h4>

            <input style={{color: 'black'}} type="text" placeholder="Email" className="input-box" />

            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login2
