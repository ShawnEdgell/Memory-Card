<script lang="ts">
    import Card from './components/Card.svelte';
    import { onMount } from 'svelte';
    import easyPokemonData from './data/pokemon-name-easy.json';
    import mediumPokemonData from './data/pokemon-name-medium.json';
    import hardPokemonData from './data/pokemon-name-hard.json';

    type Difficulty = "easy" | "medium" | "hard";

    const DIFFICULTIES: Record<Difficulty, number> = {
        easy: 3,
        medium: 4,
        hard: 5
    };

    let difficulty: Difficulty = "easy"; // default
    let pokemons = generatePokemons(easyPokemonData, DIFFICULTIES[difficulty]);

    let clickedPokemons: string[] = [];
    let currentScore = 0;
    let bestScore = 0;
    let moves = 0;

    function generatePokemons(data: any[], count: number) {
        const shuffledData = [...data].sort(() => Math.random() - 0.5);
        return shuffledData.slice(0, count);
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

    const handleCardClick = (pokemonName: string): void => {
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
                moves = 0; // Reset moves when winning
            }, 0);
        }
    }
    pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty]);
};

    function handleChange(e: Event) {
        const target = e.target as HTMLSelectElement;
        if (!target) return;

        const newDifficulty = target.value as Difficulty;
        handleDifficultyChange(newDifficulty);
    }

    function getPokemonDataByDifficulty(difficulty: Difficulty): any[] {
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

    const handleDifficultyChange = (newDifficulty: Difficulty) => {
        difficulty = newDifficulty;
        pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty]);
        clickedPokemons = [];
        currentScore = 0;
        moves = 0; // Reset moves when changing difficulty
    };

    const resetGame = () => {
        bestScore = Math.max(bestScore, currentScore);
        currentScore = 0;
        clickedPokemons = [];
        pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty]);
    };

    onMount(() => {
        pokemons = generatePokemons(getPokemonDataByDifficulty(difficulty), DIFFICULTIES[difficulty]);
    });
</script>

<main>
    <div class="controls">
        <select bind:value={difficulty} on:change={handleChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
    </div>

    <div class="scores">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
        <p>Move: {moves} / {getMaxMovesByDifficulty(difficulty)}</p>
    </div>

    <div class="cards">
        {#each pokemons as pokemon}
            <Card pokemon={pokemon} on:click={() => handleCardClick(pokemon.name)} />
        {/each}
    </div>
</main>

<style>
    /* Your general App styling here */
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .controls {
        margin-bottom: 20px;
    }
    .scores {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
    }
    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>
