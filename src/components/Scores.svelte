<!-- Scores.svelte -->
<script lang="ts">
    export let currentScore: number;
    export let bestScore: number;
    export let moves: number;
    export let maxMoves: number;
</script>

<div class="scores">
    <p class="score">Current Score: {currentScore}</p>
    <p class="score">Best Score: {bestScore}</p>
    <p class="score">Move: {moves} / {maxMoves}</p>
</div>

<style>
    /* Styles for the Scores component */
    .scores {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        font-family: 'Your Desired Font', sans-serif; /* Specify your desired font */
    }

    .score {
        font-weight: bold;
    }
</style>
