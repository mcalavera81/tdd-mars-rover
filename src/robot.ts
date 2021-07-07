import { Terrain } from './terrain';
import { Position } from './position';
import { Command } from './command';

export class Robot {
  constructor(private readonly terrain: Terrain, public position: Position) {
    if (terrain.isOffLimits(position.coords)) {
      throw Error('Initial position not valid!');
    }
  }

  forward(): boolean {
    if (this.hasInvalidState()) return false;
    this.position = this.position.withForwardStep();
    return true;
  }

  backwards() {
    if (this.hasInvalidState()) return false;
    this.position = this.position.withBackwardsStep();
    return true;
  }

  left() {
    if (this.hasInvalidState()) return false;
    this.position = this.position.withLeftTurn();
    return true;
  }

  right() {
    if (this.hasInvalidState()) return false;
    this.position = this.position.withRightTurn();
    return true;
  }

  hasInvalidState() {
    return this.terrain.isOffLimits(this.position.coords);
  }

  handleInputCommands(commands: Command[]) {
    for (const command of commands) {
      command.apply(this);
    }
  }

  public toString(): string {
    return `(${this.position.coords.x}, ${this.position.coords.y}) ${this.position.heading.id}`;
  }
}
