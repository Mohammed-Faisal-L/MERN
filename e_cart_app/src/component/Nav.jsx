import React from 'react'
import { myUrl } from '../util/constants'

function Nav() {
  return (
    <>
       <section className='navBar'>
        <aside className='logo'>
           <img height="80px" width="80px" src={myUrl} alt="app logo" />
        </aside>
        <aside className='navList'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </aside>
       </section>
    </>
  )
}

export default Nav