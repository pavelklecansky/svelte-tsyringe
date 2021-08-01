<script lang="ts">
  import "reflect-metadata";
  import { container } from "tsyringe";
  import { DogService } from "./service/DogService";
  let dogService = container.resolve(DogService);
  let promise = dogService.getRandomDog();
</script>

{#await promise}
  <p>...waiting</p>
{:then image}
  <img src={image.message} alt="Cute dog" />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
