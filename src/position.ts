export class Position {
  constructor(public coords: Coords, public heading: Heading) {}

  withForwardStep(): Position {
    const step = this.heading.forwardStep;
    return new Position(this.coords.withDelta(step), this.heading);
  }

  withBackwardsStep(): Position {
    const step = this.heading.backwardsStep;
    return new Position(this.coords.withDelta(step), this.heading);
  }

  withRightTurn(): Position {
    const newHeading = headings[this.heading.rightTurn];
    return new Position(this.coords, newHeading);
  }

  withLeftTurn(): Position {
    const newHeading = headings[this.heading.leftTurn];
    return new Position(this.coords, newHeading);
  }
}

export class Coords {
  constructor(public x: number, public y: number) {}
  withDelta(delta: Coords): Coords {
    return new Coords(this.x + delta.x, this.y + delta.y);
  }
}

export type HeadingId = 'NORTH' | 'SOUTH' | 'WEST' | 'EAST';
export class Heading {
  constructor(
    public id: HeadingId,
    public rightTurn: HeadingId,
    public leftTurn: HeadingId,
    public forwardStep: Coords,
    public backwardsStep: Coords,
  ) {}
}

const northHeadingDefinition = new Heading(
  'NORTH',
  'EAST',
  'WEST',
  new Coords(0, +1),
  new Coords(0, -1),
);

const southHeadingDefinition = new Heading(
  'SOUTH',
  'WEST',
  'EAST',
  new Coords(0, -1),
  new Coords(0, +1),
);

const eastHeadingDefinition = new Heading(
  'EAST',
  'SOUTH',
  'NORTH',
  new Coords(+1, 0),
  new Coords(-1, 0),
);

const westHeadingDefinition = new Heading(
  'WEST',
  'NORTH',
  'SOUTH',
  new Coords(-1, 0),
  new Coords(+1, 0),
);

export const headings: { [k in HeadingId]: Heading } = {
  NORTH: northHeadingDefinition,
  SOUTH: southHeadingDefinition,
  EAST: eastHeadingDefinition,
  WEST: westHeadingDefinition,
};
