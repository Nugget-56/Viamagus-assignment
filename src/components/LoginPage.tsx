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
        <div className="flex flex-col items-center space-y-4 px-24">
          <img
            src="/loginpage/tree.png"
            alt="Tree Illustration"
            className="mx-auto"
          />
          <form onSubmit={handleSubmit} className="space-y-4 text-mygreen">
            {error && (
                <div className="text-red-500 text-sm bg-red-100 p-2 rounded">
                    {error}
                </div>
            )}
            <div className="space-y-2">
              <div className="relative z-0 w-full mb-5 group">
                <input 
                  type="email" 
                  name="email" 
                  id="mail" 
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-mygreen peer" 
                  placeholder=" " 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                <label 
                  htmlFor="email" 
                  className="peer-focus:font-medium absolute text-mygreen duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mygreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-mygreen peer" 
                  placeholder=" " 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
                <label 
                  htmlFor="password" 
                  className="peer-focus:font-medium absolute text-mygreen duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mygreen peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              className="w-full h-[46px] bg-[#4285f4] text-white hover:bg-[#4285f4]/90"
            >
              CONTINUE WITH GOOGLE
            </button>
            <button
              type="button"
              className="w-full h-[46px] bg-[#1877F2] text-white hover:bg-[#1877f2]/90"
            >    
              CONTINUE WITH FACEBOOK
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}