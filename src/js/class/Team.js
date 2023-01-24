import Character from './Character';

export default class Team {
  constructor(characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    let i = 0;
    const chars = this.characters;

    return {
      next() {
        if (i < chars.length) {
          const n = i++;
          return {
            done: false,
            value: new Character(
              chars[n].name,
              chars[n].type,
              chars[n].health,
              chars[n].level,
              chars[n].attack,
              chars[n].defence,
            ),
          };
        }

        return { done: true };
      },
    };
  }
}
