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

    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Press+Start+2P&family=Shrikhand&display=swap');

    .scores {
      text-align: right;
      position: fixed;
      right: 20px;
      line-height: 5px;
    }
  
    .score {
      font-weight: bold;
      font-family: 'JetBrains Mono', sans-serif;
    }
  </style>