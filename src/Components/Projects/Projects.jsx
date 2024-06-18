import React from 'react'
import netflix from '../../assets/assets/netflix.png'
import ecomerce from '../../assets/assets/ecomerce.png'
import password from '../../assets/assets/password.png'

function Projects() {
  return (
    <div className='  flex flex-col justify-center items-center w-full my-10'>
      <h1 className=" text-6xl underline sm:text-[60px] font-bold uppercase my-10 text-pink-600">Projects</h1>
      <div className=' flex flex-wrap gap-4 justify-center items-center'>
        <div className='w-2/3 border-2 px-5 py-3 rounded-lg border-red-600'>
          <a href="https://github.com/Honeykalra22/netflix/tree/main/Netflix" target='_blank'>
            <p className=' uppercase text-lg text-pink-600 mb-2 hover:scale-105'>netflix UI page</p>
          </a>
          <img className=' h-[25vh]' src={netflix} alt="" />
          <p className=''>This webpage is made with HTML/CSS. This is a UI clone of NETFLIX</p>
        </div>

        <div className='w-2/3 border-2 px-5 py-3 rounded-lg border-red-600 justify-center items-center'>
          <a href="https://github.com/Honeykalra22/password-generator" target='_blank'>
            <p className=' uppercase text-lg text-pink-600 mb-2 hover:scale-105'>password generator</p>
          </a>
          <img className=' h-[25vh]' src={password} alt="" />
          <p>This project is a password generator made using custom hooks in react Js.</p>
          <p>The project suggest user a strong password including alphabets,number & sybolic characters as per choice of user</p>
          <p>This webpage can suggest user password from length of 8 to 100 characters.</p>
        </div>

        <div className='w-2/3 border-2 px-5 py-3 rounded-lg border-red-600 justify-center items-center'>
          <a href="https://myclothes-hitesh-kalras-projects.vercel.app/" target='_blank'>
            <p className=' uppercase text-lg text-pink-600 mb-2 hover:scale-105'>e-commerce webpage </p>
          </a>
          <img className=' h-[25vh]' src={ecomerce} alt="" />
          <p>This project is a password generator made using custom hooks in react Js.</p>
          <p>The project suggest user a strong password including alphabets,number & sybolic characters as per choice of user</p>
          <p>This webpage can suggest user password from length of 8 to 100 characters.</p>
        </div>

      </div>
    </div>
  )
}

export default Projects