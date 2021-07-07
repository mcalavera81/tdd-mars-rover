import { Robot } from './robot';
import { Terrain } from './terrain';
import { Coords, HeadingId, headings, Position } from './position';
import { CommandSequence } from './command';

if (process.argv.length < 4) {
  console.log('Wrong args');
  console.log(`<exec> <x>,<y>,<heading> <[FBLR]+>`);
  process.exit();
}

const initialPositionRegEx = RegExp(
  `^(-?\\d+),(-?\\d+),(NORTH|SOUTH|EAST|WEST)$`,
);
const commandSequenceRegEx = RegExp('^([FBLR]+)$');

function main() {
  const initialPosition = process.argv[2];
  const commandSequence = process.argv[3];

  const matchInitialPosition = initialPosition.match(initialPositionRegEx);
  const matchCommandSequence = commandSequence.match(commandSequenceRegEx);
  if (!matchInitialPosition) {
    console.log('Initial position: wrong format');
    process.exit();
  }
  if (!matchCommandSequence) {
    console.log('Command sequence: wrong format');
    process.exit();
  }

  const robot = new Robot(
    new Terrain(10, 10),
    new Position(
      new Coords(
        parseInt(matchInitialPosition[1], 10),
        parseInt(matchInitialPosition[2], 10),
      ),
      headings[matchInitialPosition[3] as unknown as HeadingId],
    ),
  );

  robot.handleInputCommands(CommandSequence.parse(matchCommandSequence[1]));

  if (robot.hasInvalidState())
    console.log('Robot has reached an invalid state!');
  else console.log(robot.toString());
}

main();
