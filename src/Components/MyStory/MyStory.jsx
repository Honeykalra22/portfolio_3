import React from 'react'

function MyStory() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className=" text-6xl underline sm:text-[60px] font-bold uppercase my-10 text-pink-600">My story</div>
            <div className="mx-3 mb-16 w-2/3 text-lg text-center mt-10">I am a <span className=" font-semibold">third-year</span> student in <span className=" font-semibold">Dr. BR Ambedkar National Institute of Technology, Jalandhar.</span> pursuing an undergraduate degree. I am majoring in <span className=" font-semibold">Electronics and Communication Engineering.</span> Also I'm a competive programmer with keen interest in field of Software development. I have made several front-End projects.</div>
        </div>
    )
}

export default MyStory