import { Coords } from './position';

export class Terrain {
  constructor(private maxX: number, private maxY: number) {}

  isOffLimits(coords: Coords): boolean {
    return Math.abs(coords.x) > this.maxX || Math.abs(coords.y) > this.maxY;
  }
}
