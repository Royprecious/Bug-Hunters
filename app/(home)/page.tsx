import { CircleIcon } from 'lucide-react'
// import { CalendarInterface } from "@/components/calendar-interface"
import { CommunityForm } from "@/components/community-form"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen ">

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        {/* Decorative Elements */}
        <div className="absolute left-10 top-20 animate-float">
          <div className=" rounded-2xl shadow-xl p-4 w-16 h-16 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-8 h-8 text-emerald-500"
              strokeWidth="2"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute right-10 bottom-20 animate-float-delayed">
          <div className=" rounded-2xl shadow-xl p-4 w-16 h-16 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-8 h-8 text-emerald-500"
              strokeWidth="2"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* New Badge */}
          <div className="inline-flex items-center gap-2  text-emerald-700 px-4 py-2 rounded-full mb-8">
            <CircleIcon className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">New! Community check out.</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Developers Community.
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            You can start by joining the whatsapp group where you can meet with other awesome developers like yourself.
          </p>
        </div>
        <div className="flex justify-center items-center" >
            <Image src='/whatsapp.jpeg' width={300}
              height={300} alt="whatsapp group" />
          </div>
        {/* Calendar Interface Mockup */}
        {/* <CalendarInterface /> */}

        {/* Community Form */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Join Our Community</h2>
          <CommunityForm />
        </div>
      </main>
    </div>
  )
}

