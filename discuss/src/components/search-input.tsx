"use client"

import React from 'react'
import { Input } from './ui/input';
import { useSearchParams } from 'next/navigation';
import { search } from '@/actions/search';

const SearchInput = () => {
    const searchParams = useSearchParams();

  return (
    <div>
      <form action={search}>
        <Input defaultValue={searchParams.get("term") || ""} name="term" type="text" placeholder="Search Post..." />
      </form>
    </div>
  );
}

export default SearchInput