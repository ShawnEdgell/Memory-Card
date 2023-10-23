<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { PokemonType } from '../vite-env.d.ts'; // Import as a type

    const dispatch = createEventDispatcher();

    export let pokemon: PokemonType = { id: 1, name: 'bulbasaur' }; // default value for demonstration
</script>


<button on:click={() => dispatch('click', pokemon.name)}>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
    <p>{pokemon.name}</p>
</button>

<style>
    /* Your Card styling here */
</style>
