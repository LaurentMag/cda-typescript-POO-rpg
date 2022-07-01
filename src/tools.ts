export class Tools {
  static randomArrayIndex(array: string[]) {
    return Math.floor(Math.random() * array.length);
  }

  static randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
