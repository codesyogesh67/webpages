'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image'
import {Input } from "@/components/ui/Input"


const Search = () => {
  
  const params = useSearchParams();


 

  return ( 
    <div className="flex min-h-[54px] border w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
      <Image src="/search.svg" alt="search" width={24} height={24} />
      <Input 
        type="text"
        placeholder="Search"
        // onChange={(e) => setQuery(e.target.value)}
        className="text-sm border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}
 
export default Search;