<!-- App.svelte -->

<script lang="ts">
  import { onMount } from 'svelte';
  import Controls from './components/Controls.svelte';
  import Scores from './components/Scores.svelte';
  import Card from './components/Card.svelte';
  import easyPokemonData from './data/pokemon-name-easy.json';
  import mediumPokemonData from './data/pokemon-name-medium.json';
  import hardPokemonData from './data/pokemon-name-hard.json';
  import InfoModal from './components/InfoModal.svelte';
  import Rounds from './components/Rounds.svelte';

  type PokemonType = {
    id: number;
    name: string;
  };

  type Difficulty = "easy" | "medium" | "hard";

  const DIFFICULTIES: Record<Difficulty, number> = {
    easy: 3,
    medium: 4,
    hard: 5
  };

  let difficulty: Difficulty = "easy";
  let pokemons: PokemonType[] = generatePokemons(easyPokemonData, DIFFICULTIES[difficulty], []);
  let clickedPokemons: string[] = [];
  let currentScore = 0;
  let bestScore = 0;
  let moves = 0;
  let maxMoves = getMaxMovesByDifficulty(difficulty); // Initialize maxMoves

  function generatePokemons(
    data: PokemonType[],
    count: number,
    clickedPokemons: string[]
  ): PokemonType[] {
    const unclickedPokemons = data.filter((pokemon) => {
      const pokemonName = pokemon.name;
      return !clickedPokemons.includes(pokemonName);
    });

    // Calculate the number of unclicked Pokémon needed
    const unclickedNeeded = count - unclickedPokemons.length;

    // Add unclicked Pokémon randomly to the array
    const shuffledData = [...unclickedPokemons].sort(
      () => Math.random() - 0.5
    );

    for (let i = 0; i < unclickedNeeded; i++) {
      shuffledData.push(unclickedPokemons.pop()!);
    }

    // Shuffle the entire array randomly
    const shuffledAndClickedData: PokemonType[] = [
      ...shuffledData,
      ...clickedPokemons.map((name) => ({ id: -1, name })), // Convert clicked names to PokemonType
    ].sort(() => Math.random() - 0.5);

    return shuffledAndClickedData;
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
    const clickedPokemon = pokemons.find(pokemon => pokemon.id === pokemonId);

    if (!clickedPokemon) return;

    const pokemonName = clickedPokemon.name;

    if (clickedPokemons.includes(pokemonName)) {
      bestScore = Math.max(bestScore, currentScore);
      currentScore = 0;
      clickedPokemons = [];
      moves = 0;
      alert("You lost. Try again!");
    } else {
      clickedPokemons.push(pokemonName);
      currentScore += 1;
      moves += 1;

      if (currentScore === maxMoves) { // Check against maxMoves
        setTimeout(() => {
          alert("Congratulations! You won!");
          moves += 1;
          resetGame();
        }, 0);
      }

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
    moves = 0;
    maxMoves = getMaxMovesByDifficulty(newDifficulty); // Update maxMoves
  }

  function resetGame() {
    bestScore = Math.max(bestScore, currentScore);
    currentScore = 0;
    clickedPokemons = [];
    moves = 0;
    pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty], []);
  }

  onMount(() => {
    pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty], []);
  });

  // Additional variables for displaying alerts
  let isAlertOpen = false;
  let winMessage = '';
  let loseMessage = '';

  function closeAlert() {
    isAlertOpen = false;
    winMessage = '';
    loseMessage = '';
  }
</script>

<main>

  <div class="nav">
    <InfoModal />
    
    <div class="controls-container">
      <Scores {currentScore} {bestScore} />
      <Controls {difficulty} {handleChange} />
    </div>
  </div>
  
  <img id="pokemon-logo" src="/public/header.png" alt="pokemon logo" />

  <!-- Render the Rounds component -->
  <Rounds {moves} {maxMoves} />

  <div class="cards">
    {#each pokemons as pokemon (pokemon.id)}
      <Card {pokemon} on:click={() => handleCardClick(pokemon.id)} />
    {/each}
  </div>

</main>

<style>
  /* Your general App styling here */
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
    width: 97%;
  }

  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  #pokemon-logo {
    width: 200px;
  }
  
  .controls-container {
    display: flex;
    flex-direction: column;
  }
</style>
