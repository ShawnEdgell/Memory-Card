<!-- App.svelte -->

<script lang="ts">
  import { onMount } from 'svelte';
  import Controls from './components/Controls.svelte';
  import Scores from './components/Scores.svelte';
  import Card from './components/Card.svelte';
  import easyPokemonData from './data/pokemon-name-easy.json';
  import mediumPokemonData from './data/pokemon-name-medium.json';
  import hardPokemonData from './data/pokemon-name-hard.json';
  import InfoModal from './components/InfoModal.svelte'; // Import the InfoModal component

  type PokemonType = {
    id: number; // Add an 'id' property
    name: string;
    // Define other properties of a Pokemon
  };

  type Difficulty = "easy" | "medium" | "hard";

  const DIFFICULTIES: Record<Difficulty, number> = {
    easy: 3,
    medium: 4,
    hard: 5
  };

  let difficulty: Difficulty = "easy"; // default
  let pokemons: PokemonType[] = generatePokemons(easyPokemonData, DIFFICULTIES[difficulty], []);
  let gamesWon = 0; // Initialize the games won count
  let clickedPokemons: string[] = [];
  let currentScore = 0;
  let bestScore = 0;
  let moves = 0;

  function generatePokemons(
    data: PokemonType[],
    count: number,
    clickedPokemons: string[]
  ): PokemonType[] {
    // Filter out the already clicked Pokémon
    const unclickedPokemons = data.filter(
      (pokemon) => !clickedPokemons.includes(pokemon.name)
    );

    // Shuffle the remaining Pokémon data
    const shuffledData = [...unclickedPokemons].sort(
      () => Math.random() - 0.5
    );

    // Ensure that at least one unclicked Pokémon is shown
    const selectedPokemon =
      unclickedPokemons.length > 0
        ? [shuffledData.pop()!] // Pop the last item to ensure uniqueness
        : [];

    const additionalPokemons = shuffledData.slice(
      0,
      Math.max(count - 1, 0)
    ); // Ensure at least one unclicked

    return [...selectedPokemon, ...additionalPokemons];
  }

  function getMaxMovesByDifficulty(difficulty: Difficulty): number {
    switch (difficulty) {
      case "easy":
        return 5;
      case "medium":
        return 7;
      case "hard":
        return 10;
      default:
        return 0;
    }
  }

  function handleCardClick(pokemonId: number): void {
    // Find the clicked Pokemon by its id
    const clickedPokemon = pokemons.find(pokemon => pokemon.id === pokemonId);

    if (!clickedPokemon) return;

    const pokemonName = clickedPokemon.name;

    if (clickedPokemons.includes(pokemonName)) {
      bestScore = Math.max(bestScore, currentScore);
      currentScore = 0;
      clickedPokemons = [];
      moves = 0; // Reset moves when losing
      alert("You lost. Try again!");
    } else {
      clickedPokemons.push(pokemonName);
      currentScore += 1;
      moves += 1;

      // Check for win condition
      if (currentScore === getMaxMovesByDifficulty(difficulty)) {
        setTimeout(() => {
          alert("Congratulations! You won!");
          resetGame();
        }, 0);
      }

      // Reshuffle all three cards
      pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty], []);
    }
  }

  function handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    if (!target) return;

    const newDifficulty = target.value as Difficulty;
    handleDifficultyChange(newDifficulty);
  }

  function getPokemonDataByDifficulty(difficulty: Difficulty): PokemonType[] {
    switch (difficulty) {
      case "easy":
        return easyPokemonData;
      case "medium":
        return mediumPokemonData;
      case "hard":
        return hardPokemonData;
      default:
        return [];
    }
  }

  function handleDifficultyChange(newDifficulty: Difficulty) {
    difficulty = newDifficulty;
    pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty], []);
    clickedPokemons = [];
    currentScore = 0;
    moves = 0; // Reset moves when changing difficulty
  }

  function resetGame() {
    bestScore = Math.max(bestScore, currentScore);
    currentScore = 0;
    clickedPokemons = [];
    moves = 0; // Reset moves to 0
    pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty], []);
  }

  onMount(() => {
    pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty], []);
  });
</script>

<main>
  <div class="controls-container">
    <Controls {difficulty} {handleChange} />
  </div>

  <div class="scores">
    <Scores
      currentScore={currentScore}
      bestScore={bestScore}
      moves={moves}
      maxMoves={getMaxMovesByDifficulty(difficulty)}
    />
  </div>

  <div class="cards">
    {#each pokemons as pokemon (pokemon.id)}
      <Card {pokemon} on:click={() => handleCardClick(pokemon.id)} />
    {/each}
  </div>
  
  <InfoModal />

</main>

<style>
  /* Your general App styling here */
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .controls-container {
    margin-bottom: 20px;
  }

  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

</style>
