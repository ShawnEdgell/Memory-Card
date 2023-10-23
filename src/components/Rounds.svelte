<!-- Rounds.svelte -->
<script lang="ts">
    export let moves: number;
    export let maxMoves: number;
  </script>
  
  <div class="rounds">
    <p class="round">Round: {moves} / {maxMoves}</p>
  </div>
  
  <style>
    /* Styles for the Rounds component */
    .rounds {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }
  
    .round {
      font-weight: bold;
      font-family: sans-serif;
    }
  </style>
  