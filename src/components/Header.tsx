"use client"

import Link from "next/link"

export default function Header() {
    return (
        <main className="">
            <div className="flex bg-black w-full h-16 items-center justify-between">
                <div className="flex bg-black justify-start ">
                    <Link  href="/">

                    <h1 className=" ml-3.5 text-white text-2xl font-bold cursor-pointer">HeadlineAI</h1>
                    </Link>
                </div>
                <div className="flex justify-end mr-3.5">
                    <Link href="/login">
                    <button className="text-white">Login</button>
                    </Link>
                    <Link href="/signup">
                    <p className="text-white"> / </p>
                    </Link>
                    <Link href="/signup">
                    <button className="text-white">Signup</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
