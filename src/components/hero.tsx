import React from 'react'
import BooksImg from 'public/books.jpeg';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={BooksImg}
          fill
          alt="Books Img"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
        <div className="flex items-center justify-center pt-64">
          <h1 className="font-bold text-6xl z-10">My Favourite Books</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroPage