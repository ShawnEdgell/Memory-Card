<!-- Controls.svelte -->

<script lang="ts">
  export let difficulty: string;
  export let handleChange: (e: Event) => void;
</script>

<div class="controls">
  <select class="select" bind:value={difficulty} on:change={handleChange}>
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
  </select>
</div>

<style>
  /* Styles for the Controls component go here */
  .controls {
    display: flex;
    justify-content: right;
    margin-top: 10px;
  }

  .select {
    padding: 8px 16px;
    font-family: sans-serif;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  .select:hover {
    transform: scale(1.05);
  }
</style>
