import React from 'react'
import {ShieldAlert} from "lucide-react";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="bg-white/70 backdrop-blur-xs p-10 rounded-2xl shadow-xl">
          <h3 className="font-bold text-lg mb-3">Login</h3>

          <form className="flex flex-col gap-4">
            <div className="relative bg-gradient-to-t from-30% to-primary h-10 w-sm rounded-xl p-1 hover:shadow-md transition-shadow">
              <input className="bg-white w-full h-full rounded-lg pl-5 " type="text" placeholder="email" />
            </div>

            <div className="relative bg-gradient-to-t from-30% to-primary h-10 w-sm rounded-xl p-1 hover:shadow-md transition-shadow">
              <input className="bg-white w-full h-full rounded-lg pl-5 " type="password" placeholder="mot de passe" />
            </div>

            <div className="flex gap-2 items-center bg-red-100 w-fit p-2 rounded-lg border-2 border-red-500 text-red-500">
              <ShieldAlert size={20}/>
              <span>Error message</span>
            </div>

            <button
              className="btn transition-all w-full"
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
