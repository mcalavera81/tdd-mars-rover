import { Robot } from './robot';
import { Position } from './position';

export class Command {
  constructor(private command: (robot: Robot) => void) {}
  apply(robot: Robot) {
    this.command(robot);
  }
}

export const stepForwardCommand = new Command((robot) => robot.forward());
export const stepBackwardsCommand = new Command((robot) => robot.backwards());
export const turnRightCommand = new Command((robot) => robot.right());
export const turnLeftCommand = new Command((robot) => robot.left());

export class CommandSequence {
  constructor(public commands: Command[]) {}

  static parse(commandsStr: string): Command[] {
    const commands: Command[] = [];
    for (const command of commandsStr) {
      switch (command) {
        case 'F':
          commands.push(stepForwardCommand);
          break;
        case 'B':
          commands.push(stepBackwardsCommand);
          break;
        case 'L':
          commands.push(turnLeftCommand);
          break;
        case 'R':
          commands.push(turnRightCommand);
          break;
        default:
          throw Error('Unrecognized Command');
      }
    }
    return commands;
  }
}
