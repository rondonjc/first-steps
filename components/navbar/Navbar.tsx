import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink';

const navItens = [
  { path:'/about', label:'About'},
  { path:'/pricing', label:'Pricing'},
  { path:'/contact', label:'Contact'},

]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>    
        <Link href={'/'} className='flex items-center'>
          <HomeIcon size={14} />
          <span className='mr-2 ml-1' >Home</span>
        </Link>
        <div className='flex flex-1'></div>
        {
        navItens.map(({path,label}) =>(
          <ActiveLink key={path} path={path} label={label}/>
        ))        
        }
    </nav>
  )
}
