<script lang="ts">
  import Dog from "./Dog.svelte";
  let dog;
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
</svelte:head>

<main>
  <h1>Cute doggo</h1>
  <Dog bind:this={dog} />
  <button on:click={() => dog.changeDogImage()}>New cute doggo 🐕</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
