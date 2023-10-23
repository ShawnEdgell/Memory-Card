<!-- Controls.svelte -->

<script lang="ts">
    export let difficulty: string;
    export let handleChange: (e: Event) => void;
  </script>
  
  <div class="controls">
    <select bind:value={difficulty} on:change={handleChange}>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
  
  <style>
    /* Styles for the Controls component go here */
    .controls {
      margin-bottom: 20px;
    }
  </style>
  