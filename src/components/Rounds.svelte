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

    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Press+Start+2P&family=Shrikhand&display=swap');
   
    .rounds {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  
    .round {
      font-weight: bold;
      font-family: 'JetBrains Mono', sans-serif;
    }
  </style>
  