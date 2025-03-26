import PostList from '@/components/posts/post-list';
import { fetchPostsBySearch } from '@/lib/query/post';
import React from 'react'

type SearchPageProps = {
    searchParams: Promise<{term: string}>
}

const SearchPage : React.FC<SearchPageProps> = async({searchParams}) => {
    const term = (await searchParams).term;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className='col-span-3 space-y-2'>
        <h1 className="text-blue-600 font-medium italic">
          Search result for {term}
        </h1>
        <PostList fetchData={() => fetchPostsBySearch(term)} />
      </div>
    </div>
  );
}

export default SearchPage