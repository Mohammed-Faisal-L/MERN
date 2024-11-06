import React from 'react'
import { myUrl } from '../util/constants'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
       <section className='navBar'>
        <aside className='logo'>
           <img height="50px" width="50px" src={myUrl} alt="app logo" />
        </aside>
        <aside className='navList'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/aboutUs'>About Us</Link></li>
                <li><Link to='/contactUs'>Contact Us</Link></li>
            </ul>
        </aside>
       </section>
    </>
  )
}

export default Nav