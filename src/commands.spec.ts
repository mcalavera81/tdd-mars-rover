import {
  CommandSequence,
  stepBackwardsCommand,
  stepForwardCommand,
  turnLeftCommand,
  turnRightCommand,
} from './command';

describe('Command Parsing Behaviour', () => {
  it('should be able to parse valid commands', () => {
    const commands = CommandSequence.parse('FLFFFRFLB');
    expect(commands).toStrictEqual([
      stepForwardCommand,
      turnLeftCommand,
      stepForwardCommand,
      stepForwardCommand,
      stepForwardCommand,
      turnRightCommand,
      stepForwardCommand,
      turnLeftCommand,
      stepBackwardsCommand,
    ]);
  });

  it('should throw exceptions when entering not valid commands', () => {
    expect(() => CommandSequence.parse('FLV')).toThrow(Error);
  });
});
