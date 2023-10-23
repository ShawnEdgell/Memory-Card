<!-- Card.svelte -->

<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { PokemonType } from '../vite-env.d.ts';
  
    const dispatch = createEventDispatcher();
  
    export let pokemon: PokemonType = { id: 1, name: 'bulbasaur' }; // default value for demonstration
  
    function triggerAnimation() {
      dispatch('click', pokemon.name);
    }
  </script>
  
  <button
    class="card"
    on:click={triggerAnimation}
  >
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
    <p>{pokemon.name}</p>
  </button>
  
  <style>
    /* Styles for the Card component go here */
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #f0f0f0;
      padding: 16px;
      margin: 8px;
      border: 1px solid #ccc;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
    }
  
    .card:hover {
      transform: scale(1.05);
    }
  
    .card img {
      max-width: 100%;
      height: auto;
    }
  
    .card p {
      margin-top: 8px;
      font-family: sans-serif;
    }
  </style>
  