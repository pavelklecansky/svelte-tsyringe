import { singleton } from "tsyringe";

@singleton()
export class DogService {
  async getRandomDog() {
    return fetch("https://dog.ceo/api/breeds/image/random").then((response) => response.json());
  }
}
