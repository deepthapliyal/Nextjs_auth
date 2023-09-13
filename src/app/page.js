"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertProvider } from './utils/AlertContext'
import {ShowAlert} from './utils/ShowAlert'

export default function Home({ Component, pageProps }) {

  const [isUser, setIsUser] = useState(false)
  const [access, SetAccess] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsUser(true)
      SetAccess(true)
    }
    else {
      setIsUser(false)
      SetAccess(true)
    }

  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsUser(false)

  }





  return (

    <>

      <AlertProvider >
       {/* <Component {...pageProps}/> */}
       {/* <ShowAlert/>  */}
        <div className='h-screen flex flex-col text-center justify-center items-center text-4xl font-bold'>

          {access ?
            <>

              {isUser ?
                <>
                  <h1 className='text-green-500'>Authenticated</h1>
                  <button onClick={handleLogout} className='px-3 py-2 text-base mx-2 mt-3  bg-white text-black rounded-md'>Logout</button>
                </>
                :
                <div>

                  <h1 className=' text-red-500 mt-3'>Not Authenticated: </h1>
                  <p className='text-gray-300 text-2xl'>please Sign up or log in</p>
                  <Link href={'/auth/login/'}>
                    <button className='px-3 py-2 text-base mx-2 mt-3 bg-white text-black rounded-md'>Login</button>
                  </Link>

                  <Link href={'/auth/signup/'}>
                    <button className='px-3 py-2 text-base mx-2 bg-white text-black rounded-md'>Signup</button>
                  </Link>

                </div>
              }
            </>
            : <div>Checking Access...</div>}
        </div>

      </AlertProvider>
    </>
  )
}
