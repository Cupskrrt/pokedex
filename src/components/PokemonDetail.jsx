import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';

const PokemonDetail = () => {
  const { pokemon } = useParams();
  const {
    data,
    loading,
    error,
    refetch,
  } = useApi(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)


// TODO BENERIN POKEMON DETAIL SAMA REFACTOR

  console.log(data);

  return (
    <>
      <div className="flex justify-around">
        <img
          src={pokemonDetail ? pokemonDetail.sprites.front_default : ''}
          alt={pokemon}
          className="w-[10rem]"
        />
        <img
          src={pokemonDetail ? pokemonDetail.sprites.back_default : ''}
          alt={pokemon}
          className="w-[10rem]"
        />
      </div>
      <h1>{pokemonDetail ? pokemonDetail.name.toUpperCase() : ''}</h1>
      <p>id: {pokemonDetail ? pokemonDetail.id : ''}</p>
      <div className="flex gap-3">
        {type
          ? type.map((item, i) => {
              return <h2 key={i}>{item.name}</h2>;
            })
          : ''}
      </div>
      {/* BIKIN CHARTNYA MASI BINGUNG */}
      <h2>Height: {pokemonDetail ? pokemonDetail.height : ''}</h2>
      <h2>Weight: {pokemonDetail ? pokemonDetail.weight : ''}</h2>
      <Link to="/"> BACK </Link>
    </>
  );
};

export default PokemonDetail;
