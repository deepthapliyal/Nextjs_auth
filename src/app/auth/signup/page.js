"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toApi from '../../lib/api'
import Loading from '../../utils/Loading'
import { useAlertContext } from '../../utils/AlertContext'

const page = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
        email: ""
    })
    const [dataLoading, setDataLoading] = useState(false)
    const [passwordError, setPasswordError] = useState("");

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((preData) => ({ ...preData, [name]: value }));
    }


    const validatePassword = (password) => {
        // Define your regex pattern for strong password here
        const strongPasswordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;
        return strongPasswordPattern.test(password);
    }
    const router = useRouter()


    const formsubmit = async (e) => {
        e.preventDefault()
        setDataLoading(true)
        if (!validatePassword(data.password)) {
            setPasswordError("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.");
            return;
        }
        console.log(passwordError)
        try {
            const response = await toApi(data, "signup");
            const result = await response.json()

            if (response.ok) {
                router.push("/auth/login/")
                setDataLoading(false)
            }

            else if (response.status === 409) {
                alert(result.message)
            }
            else {
                alert(result.message)
            }

        } catch (error) {

            console.error("Error occured", error.message)
        }

    }


    return (
        <>
            {dataLoading ?
                <Loading />
                :


                <section class="bg-gradient-to-r from-pink-500 to-indigo-600 h-screen">
                    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

                            AuthApp
                        </div>
                        <div class="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-[#151B1A] ">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form onSubmit={formsubmit} class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                        <input value={data.username} onChange={handleOnChange} type="name" name="username" id="name" class="bg-transparent border border-[#2e6e91] text-black dark:text-white sm:text-sm rounded-full block w-full p-2.5  " placeholder="john" required={true} />
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input onChange={handleOnChange} value={data.email} type="email" name="email" id="email" class="bg-transparent border border-[#2e6e91] text-black dark:text-white sm:text-sm rounded-full block w-full p-2.5  " placeholder="name@company.com" required={true} />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Password
                                        </label>
                                        <input
                                            onChange={handleOnChange}
                                            value={data.password}
                                            type="password"
                                            name="password"
                                            placeholder="••••••••"
                                            className={`bg-gray-50 border ${passwordError ? "border-red-500" : "border-gray-300"
                                                } bg-transparent border border-[#2e6e91] text-black dark:text-white sm:text-sm rounded-full block w-full p-2.5  `}
                                            required={true}
                                        />
                                        {passwordError && (
                                            <p className="text-red-500 mt-2 text-sm">{passwordError}</p>
                                        )}
                                    </div>


                                    <div className=' w-full text-sm px-5 py-2.5 text-center '>

                                        <button type="submit" class=" border text-white border-[#2e6e91] font-medium text-xl  px-4 py-2 rounded-full">Sign in</button>
                                    </div>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <Link href="/auth/login/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">log in</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default page
