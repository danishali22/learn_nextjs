import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='container absolute z-10 flex justify-between h-14 mx-auto my-2'>
      <Link href="/" className='font-bold text-2xl'>Home</Link>
      <div className='flex gap-3'>
        <Link href="/performance">Performance</Link>
        <Link href="/scalibility">Scalibility</Link>
      </div>
    </nav>
  );
}

export default Header