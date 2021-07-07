import { Robot } from './robot';
import { Terrain } from './terrain';
import { Coords, headings, Position } from './position';
import {
  stepBackwardsCommand,
  stepForwardCommand,
  turnLeftCommand,
  turnRightCommand,
} from './command';

describe('Robot initialization', () => {
  it('should throw error when initial position is off limits (11,10)', () => {
    expect(
      () =>
        new Robot(
          new Terrain(10, 10),
          new Position(new Coords(11, 10), headings.NORTH),
        ),
    ).toThrow(Error);
  });

  it('should throw error when initial position is off limits (10,11)', () => {
    expect(
      () =>
        new Robot(
          new Terrain(10, 10),
          new Position(new Coords(10, 11), headings.NORTH),
        ),
    ).toThrow(Error);
  });
});

describe('Robot behaviour', () => {
  const terrain = new Terrain(10, 10);
  let robot: Robot;
  describe('When command sequence is valid', () => {
    beforeEach(() => {
      robot = new Robot(terrain, new Position(new Coords(4, 2), headings.EAST));
    });
    it('should handle commands successfully. Scenario 1', () => {
      robot.handleInputCommands([
        turnLeftCommand,
        stepForwardCommand,
        stepForwardCommand,
        stepForwardCommand,
        turnRightCommand,
        stepBackwardsCommand,
        stepBackwardsCommand,
        turnLeftCommand,
        stepForwardCommand,
      ]);

      expect(robot.hasInvalidState()).toBe(false);
      expect(robot.position.coords).toStrictEqual(new Coords(2, 6));
      expect(robot.position.heading).toBe(headings.NORTH);
    });

    it('should handle commands successfully. Scenario 2', () => {
      robot.handleInputCommands([
        stepBackwardsCommand,
        stepBackwardsCommand,
        stepBackwardsCommand,
        stepBackwardsCommand,
        turnRightCommand,
        stepForwardCommand,
        stepForwardCommand,
      ]);

      expect(robot.hasInvalidState()).toBe(false);
      expect(robot.position.coords).toStrictEqual(new Coords(0, 0));
      expect(robot.position.heading).toBe(headings.SOUTH);
    });
  });
  describe('When command sequence is not valid', () => {
    beforeEach(() => {
      robot = new Robot(terrain, new Position(new Coords(9, 9), headings.EAST));
    });
    it('should end up with the robot in an invalid state', () => {
      robot.handleInputCommands([
        stepForwardCommand,
        stepForwardCommand,
        stepForwardCommand,
      ]);

      expect(robot.hasInvalidState()).toBe(true);
    });
  });
});
