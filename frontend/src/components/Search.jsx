import React from 'react';

const Search = () => {
  return (
    <div>
        <form className='search' >
            <input 
            type="search"
            className='search-input'
            placeholder='Ornek: Bosanmak istiyorum...' />
            <button className='button text-white' type='submit'>Avukat Ara</button>
        </form>
    </div>
  )
}

export default Search