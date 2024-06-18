import React from 'react'
import c_plus from '../../assets/assets/c_plus.png'
import js from '../../assets/assets/js.svg'
import css from '../../assets/assets/css.svg'
import html from '../../assets/assets/html.svg'
import tcss from '../../assets/assets/tcss.svg'
import react from '../../assets/assets/react.svg'
import vs from '../../assets/assets/vs.svg'
import git from '../../assets/assets/git.svg'
import github from '../../assets/assets/github.svg'


function Skills() {
    return (
        <div className=' h-screen flex flex-col justify-center items-center w-full'>
            <h1 className=' text-6xl text-pink-600 underline uppercase font-semibold mb-10'>technical skills</h1>
            <div className=' flex flex-col justify-center items-center gap-16'>
                <div className=' uppercase flex flex-col justify-center items-center'>
                    <h1 className=' text-3xl mb-5 font-semibold underline'>language</h1>
                    <div className=' flex gap-16'>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <img className=' w-16 h-16' src={c_plus} alt="" />
                            <p>C++</p>
                        </div>
                        <div  className=' flex flex-col justify-center items-center text-center'>
                            <img className=' w-16 h-16' src={js} alt="" />
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className=' uppercase flex flex-col justify-center items-center'>
                    <h1 className=' text-3xl mb-5 font-semibold underline'>front-end</h1>
                    <div className=' flex gap-16'>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <img className=' w-16 h-16' src={html} alt="" />
                            <p>html</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <img className=' w-16 h-16' src={css} alt="" />
                            <p>css</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <img className=' w-16 h-16' src={tcss} alt="" />
                            <p>tailwind css</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <img className=' w-16 h-16' src={react} alt="" />
                            <p>react js</p>
                        </div>
                    </div>
                </div>
                <div className=' uppercase flex flex-col justify-center items-center'>
                    <h1 className=' text-3xl mb-5 font-semibold underline'>Tools</h1>
                    <div className=' flex gap-16'>
                        <div className=' flex flex-col justify-center items-center'>
                            <img className=' w-16 h-16' src={vs} alt="" />
                            <p>vs code</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <img className=' w-16 h-16' src={git} alt="" />
                            <p>git</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <img className=' w-16 h-16' src={github} alt="" />
                            <p>github</p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <img className=' w-16 h-16' src='https://www.mysql.com/common/logos/logo-mysql-170x115.png' alt=''/>
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills