<!-- Scores.svelte -->
<script lang="ts">
    export let currentScore: number;
    export let bestScore: number;
  </script>
  
  <div class="scores">
    <p class="score">Current Score: {currentScore}</p>
    <p class="score">Best Score: {bestScore}</p>
  </div>
  
  <style>
    /* Styles for the Scores component */
    .scores {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }
  
    .score {
      font-weight: bold;
      font-family: sans-serif;
    }
  </style>