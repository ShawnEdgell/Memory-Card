<!-- Scores.svelte -->
<script lang="ts">
    export let currentScore: number;
    export let bestScore: number;
    export let moves: number;
    export let maxMoves: number;
  </script>
  
  <div class="scores">
    <p>Current Score: {currentScore}</p>
    <p>Best Score: {bestScore}</p>
    <p>Move: {moves} / {maxMoves}</p>
  </div>
  
  <style>
    /* Your styles for the Scores component */
    .scores {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }
  </style>
  