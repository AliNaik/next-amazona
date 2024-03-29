import Link from 'next/link'
import React from 'react'

function Header() {
  return <header>
      <nav>
      <div className="navbar justify-between bg-base-300">
      <Link href="/" className="btn btn-ghost text-lg">
            Ali Store
      </Link>
      <ul className='flex'>
        <li>
            <Link className='btn btn-ghost rounded-btn' href="/cart" > Cart</Link>
        </li>
        <li>
            <Link className='btn btn-ghost rounded-btn' href="/signin" > Sign in</Link>
        </li>
      </ul>
      </div>
      </nav>
  </header>
  
}

export default Header
