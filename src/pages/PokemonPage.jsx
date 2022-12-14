import React, { useState } from 'react';
import PokemonList from '../components/PokemonList';

const PokemonPage = () => {
  const [offset, setOffset] = useState(0);

  const getDataNext = (amount) => {
    setOffset(amount + offset);
  };

  const getDataPrev = (amount) => {
    if (offset >= 20) {
      ('border-2 w-[5rem] h-[2rem] rounded-md bg-red-500 text-white');
      setOffset(amount + offset);
    }
  };

  return (
    <>
      {/* POKEMON LIST */}
      <div className='flex justify-center'>
        <PokemonList offset={offset} />
      </div>
      {/* BUTTON */}
      <div className="flex justify-between p-10">
        <button
          onClick={() => getDataPrev(-20)}
          className="border-2 w-[5rem] h-[2rem] rounded-md bg-red text-white">
          {' '}
          Prev{' '}
        </button>
        <button
          onClick={() => getDataNext(20)}
          className="border-2 w-[5rem] h-[2rem] rounded-md bg-red text-white">
          {' '}
          Next{' '}
        </button>
      </div>
    </>
  );
};
export default PokemonPage;
