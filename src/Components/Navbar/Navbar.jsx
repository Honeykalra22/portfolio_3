import React, { useContext, useState } from 'react'
import main from '../../assets/main.png'
import { Port_context } from '../../Context/Port_Context'
import { Link } from "react-router-dom";
import Line from '../line/Line';

function Navbar() {
    var {themeChanger} = useContext(Port_context)
    const [menu, setMenu] = useState('Home')
    return (
        <div className=' h-screen flex flex-col items-center justify-center mx-10 gap-2 lg:w-1/2 static'>
            <div className=' flex flex-col items-center justify-center'>
                <img className=' w-[15vw] h-[30vh] bg-pink-600 rounded-full flex justify-center items-center' src={main} alt="" />
                <h1 className=' uppercase font-bold text-5xl text-blue-800'>hitesh kalra</h1>
                <button onClick={()=>themeChanger()} className=' capitalize mt-5 bg-pink-600 text-white px-5 py-2 rounded-full'>theme</button>
            </div>
            <div className=' my-10'>
                <ul className=' gap-7 flex flex-col items-center'>
                    <li onClick={()=>{setMenu('Home')
                        window.scrollTo(1,1)
                    }} className=' border-2 text-pink-600 shadow-lg border-red-600 rounded-full px-32 text-xl uppercase font-semibold hover:bg-pink-600 hover:text-white cursor-pointer py-2'><Link to='/'>Home</Link></li>
                    <li onClick={()=>setMenu('MyStory')} className=' border-2 text-pink-600 shadow-lg border-red-600 rounded-full px-28 text-xl uppercase font-semibold hover:bg-pink-600 hover:text-white cursor-pointer py-2'><Link to='/story'>My Story</Link></li>
                    {/* <li onClick={()=>setMenu('Experience')} className=' border-2 text-pink-600 shadow-lg border-red-600 rounded-full px-24 text-xl uppercase font-semibold hover:bg-pink-600 hover:text-white cursor-pointer py-2'><Link to='experience'>Experience</Link></li> */}
                    <li onClick={()=>setMenu('Skills')} className=' border-2 text-pink-600 shadow-lg border-red-600 rounded-full px-32 text-xl uppercase font-semibold hover:bg-pink-600 hover:text-white cursor-pointer py-2'><Link to='skills'>Skills</Link></li>
                    <li onClick={()=>setMenu('Projects')} className=' border-2 text-pink-600 shadow-lg border-red-600 rounded-full px-28 text-xl uppercase font-semibold hover:bg-pink-600 hover:text-white cursor-pointer py-2'><Link to='projects'>Projects</Link></li>
                </ul>
            </div>
            {/* <Line/> */}
        </div>
    )
}

export default Navbar