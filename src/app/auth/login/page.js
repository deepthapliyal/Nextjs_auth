    "use client";
    import Link from 'next/link';
    import { Router, useRouter } from 'next/navigation';
    import React, { useState } from 'react';
import toApi from '../../lib/api';
    const page = () => {
        const router = useRouter()
        const [data, setData] = useState({
            password: "",
            email : ""
    })



    const handleOnChange = (e)=>{
        const {name, value} = e.target;
        setData((preData)=>({...preData, [name]: value,}))    

    }
    const formsubmit = async(e)=>{
        e.preventDefault()

        const response = await toApi(data, "login");
        const result = await response.json()
        console.log(result)
        if(response.ok){
            localStorage.setItem("token",  result.token)
            router.push("/")

        } 
        else if(response.status===404){
            alert(result.message);
        }
        else if(response.status===401){
            alert(result.message)
        }
        else{
            alert("Something went wrong")
        }

    }
    return (
            <>
                <section class="bg-gradient-to-r from-pink-500 to-indigo-600 h-screen">
                    <div class="flex flex-col  items-center  justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div class="flex  items-center mb-6 text-3xl  font-semibold text-black dark:text-white">
                                AuthApp
                        </div>
                        <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#151B1A] dark:border-gray-900">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
                                    log in to your account
                                </h1>
                                <form onSubmit={formsubmit} class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label  for="email" class="block mb-2 text-sm font-medium text-black dark:text-white">Your Email</label>
                                        <input value={data.email} onChange={handleOnChange} type="email" name="email" id="email"    class="bg-transparent border border-[#2e6e91] text-black dark:text-white sm:text-sm rounded-full block w-full p-2.5  " placeholder="john" required={true}/>
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-black dark:text-white">Password</label>
                                        <input onChange={handleOnChange} value={data.password} type="password" name="password"  placeholder="••••••••" class="bg-transparent border border-[#2e6e91] text-black dark:text-white sm:text-sm rounded-full block w-full p-2.5  " required={true}/>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">

                                        </div>
                                        <Link href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                                    </div>
                                    <div className=' w-full text-sm px-5 py-2.5 text-center '>
                                        
                                    <button type="submit" class="border border-[#2e6e91]  font-medium text-xl  px-4 py-2 rounded-full">Log in</button>
                                    </div>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? 
                                        <Link href="/auth/signup/" class="font-medium text-primary-600  hover:underline dark:text-primary-500"> sign up</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }

    export default page
