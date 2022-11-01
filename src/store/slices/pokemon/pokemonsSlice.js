import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
      page: 0,
      pokemons: [],
      isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  }
});

export const { startLoadingPokemons, setPokemons } = pokemonsSlice.actions;