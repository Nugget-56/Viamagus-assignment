import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('The email field is required')
      return
    }
  }

  return (
    <div className="flex min-h-screen items-end">
      <div className="absolute top-0 z-0 w-full h-[300px] bg-[url('/loginpage/forest.png')] bg-cover"></div>
      <div className="w-full max-w-[577px] min-h-[calc(100vh-100px)] mx-auto rounded-[6px] bg-white shadow-lg z-10">
        <div className="text-center shadow-lg p-2 pt-5">
          <img
            src="/loginpage/amazon.png"
            alt="Amazon Logo"
            width={85}
            className="mx-auto"
          />
        </div>
        <h1 className="m-6 text-center text-3xl font-normal text-mygreen">
          Login
        </h1>
        <div className="flex flex-col items-center space-y-4 max-w-[400px] px-4 mx-auto">
          <img
            src="/loginpage/tree.png"
            alt="Tree Illustration"
          />
          <form onSubmit={handleSubmit} className="space-y-4 text-mygreen max-w-[400px] w-full">
            <div className="space-y-2">
              <div className="relative w-full mb-5 group">
                <input 
                  type="email" 
                  name="email" 
                  id="mail" 
                  className="pl-1 block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-mygreen peer" 
                  placeholder=" " 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}              
                />
                <label 
                  htmlFor="email" 
                  className="ml-1 peer-focus:font-medium absolute text-mygreen duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mygreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
                {error && (
                  <div className="flex items-center gap-1 text-red-500 text-sm tracking-tighter p-2 rounded">
                    <img src="/loginpage/error.svg" alt="error" width={15}/>
                    {error}
                  </div>
                )}
              </div>
              <div className="relative w-full mb-5 group">
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  className="pl-1 mb-2 block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-mygreen peer" 
                  placeholder=" " 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
                <label 
                  htmlFor="password" 
                  className="ml-1 peer-focus:font-medium absolute text-mygreen duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mygreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full h-[50px] bg-mygreen text-white text-lg hover:bg-green-600 rounded-[40px]">
              Sign In
            </button>
            <div className="flex items-center justify-between text-sm">
              <a href="/" className="text-black hover:underline"> Forgot Password? </a>
              <a href="/" className="text-[#D9185F] hover:underline"> New User? Sign Up </a>
            </div>
            <div className="flex justify-center text-black">
              or
            </div>
            <button
              type="button"
              className="relative flex items-center w-full h-[46px] bg-[#4285f4] text-white text-sm hover:bg-[#4285f4]/90"
            >
              <img 
                src="/loginpage/google.png" 
                alt="google logo"
                width={36}
                className="absolute left-0 ml-1"
              />
              <div className='min-[370px]:ml-28 ml-16'>
                CONTINUE WITH GOOGLE
              </div>
            </button>
            <button
              type="button"
              className="relative flex items-center w-full h-[46px] bg-[#4285f4] text-white text-sm hover:bg-[#4285f4]/90"
            >  
              <img 
                src="/loginpage/fb.png" 
                alt="facebook logo"
                width={36}
                className="absolute left-0 ml-1"
              />
              <div className='min-[370px]:ml-28 ml-16'>
                CONTINUE WITH FACEBOOK
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}