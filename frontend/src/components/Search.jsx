import { useState } from 'react';

function Search() {
  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Perform search for:', value);
  };

  return (
      <form onSubmit={handleSearch} className='first-line:'>
        <input
          type='text'
          value={value}
          placeholder='Search Jobs....'
          className='w-80 h-12 px-1 border-none'
          onChange={(e) => setValue(e.target.value)}
        />
        <button className='bg-blue-600 text-white py-1 px-3 w-20 h-12 border-none' type='submit'>
          Search
        </button>
      </form>
  );
}

export default Search;
