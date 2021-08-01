<script lang="ts">
  import "reflect-metadata";
  import { container } from "tsyringe";
  import { DogService } from "./service/DogService";
  import { onMount } from "svelte";

  let dogService = container.resolve(DogService);

  // Don't onMount isn't enough but ok
  let promise = loadDogImage();

  onMount(async () => {
    promise = loadDogImage();
  });

  async function loadDogImage() {
    return dogService.getRandomDog();
  }

  export function changeDogImage() {
    promise = loadDogImage();
  }
</script>

{#await promise}
  <p>...waiting</p>
{:then image}
  <img src={image.message} alt="Cute dog" />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  img {
    width: 100%;
    z-index: 0;
  }
</style>
