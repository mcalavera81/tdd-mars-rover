import { Coords, headings, Position } from './position';

describe('Position behaviour', () => {
  describe('North Heading', () => {
    const position = new Position(new Coords(-1, 2), headings.NORTH);
    describe('After a forward step', () => {
      it('should keep the heading, and increment the y coordinate', () => {
        const newPosition = position.withForwardStep();
        expect(newPosition.coords).toStrictEqual(new Coords(-1, 3));
        expect(newPosition.heading).toStrictEqual(headings.NORTH);
      });
    });
    describe('After a backwards step', () => {
      it('should keep the heading, and decrement the y coordinate', () => {
        const newPosition = position.withBackwardsStep();
        expect(newPosition.coords).toStrictEqual(new Coords(-1, 1));
        expect(newPosition.heading).toStrictEqual(headings.NORTH);
      });
    });
    describe('After a right turn', () => {
      it('should update the heading to EAST, and keep the coordinates', () => {
        const newPosition = position.withRightTurn();
        expect(newPosition.coords).toStrictEqual(position.coords);
        expect(newPosition.heading).toStrictEqual(headings.EAST);
      });
    });
    describe('After a left turn', () => {
      it('should update the heading to WEST, and keep the coordinates', () => {
        const newPosition = position.withLeftTurn();
        expect(newPosition.coords).toStrictEqual(position.coords);
        expect(newPosition.heading).toStrictEqual(headings.WEST);
      });
    });
  });

  describe('South Heading', () => {
    const position = new Position(new Coords(-1, -3), headings.SOUTH);
    describe('After a forward step', () => {
      it('should keep the heading, and decrement the y coordinate', () => {
        const newPosition = position.withForwardStep();
        expect(newPosition.coords).toStrictEqual(new Coords(-1, -4));
        expect(newPosition.heading).toStrictEqual(headings.SOUTH);
      });
    });
    describe('After a backwards step', () => {
      it('should keep the heading, and increment the y coordinate', () => {
        const newPosition = position.withBackwardsStep();
        expect(newPosition.coords).toStrictEqual(new Coords(-1, -2));
        expect(newPosition.heading).toStrictEqual(headings.SOUTH);
      });
    });
    describe('After a right turn', () => {
      it('should update the heading to WEST, and keep the coordinates', () => {
        const newPosition = position.withRightTurn();
        expect(newPosition.coords).toStrictEqual(position.coords);
        expect(newPosition.heading).toStrictEqual(headings.WEST);
      });
    });
    describe('After a left turn', () => {
      it('should update the heading to EAST, and keep the coordinates', () => {
        const newPosition = position.withLeftTurn();
        expect(newPosition.coords).toStrictEqual(position.coords);
        expect(newPosition.heading).toStrictEqual(headings.EAST);
      });
    });
  });

  describe('East Heading', () => {
    const position = new Position(new Coords(1, 2), headings.EAST);
    describe('After a forward step', () => {
      it('should keep the heading, and increment the x coordinate', () => {
        const newPosition = position.withForwardStep();
        expect(newPosition.coords).toStrictEqual(new Coords(2, 2));
        expect(newPosition.heading).toStrictEqual(headings.EAST);
      });
    });
    describe('After a backwards step', () => {
      it('should keep the heading, and decrement the x coordinate', () => {
        const newPosition = position.withBackwardsStep();
        expect(newPosition.coords).toStrictEqual(new Coords(0, 2));
        expect(newPosition.heading).toStrictEqual(headings.EAST);
      });
    });
    describe('After a right turn', () => {
      it('should update the heading to SOUTH, and keep the coordinates', () => {
        const newPosition = position.withRightTurn();
        expect(newPosition.coords).toStrictEqual(position.coords);
        expect(newPosition.heading).toStrictEqual(headings.SOUTH);
      });
    });
    describe('After a left turn', () => {
      it('should update the heading to NORTH, and keep the coordinates', () => {
        const newPosition = position.withLeftTurn();
        expect(newPosition.coords).toStrictEqual(position.coords);
        expect(newPosition.heading).toStrictEqual(headings.NORTH);
      });
    });
  });

  describe('West Heading', () => {
    const position = new Position(new Coords(1, -2), headings.WEST);
    describe('After a forward step', () => {
      it('should keep the heading, and decrement the x coordinate', () => {
        const newPosition = position.withForwardStep();
        expect(newPosition.coords).toStrictEqual(new Coords(0, -2));
        expect(newPosition.heading).toStrictEqual(headings.WEST);
      });
    });
    describe('After a backwards step', () => {
      it('should keep the heading, and increment the x coordinate', () => {
        const newPosition = position.withBackwardsStep();
        expect(newPosition.coords).toStrictEqual(new Coords(2, -2));
        expect(newPosition.heading).toStrictEqual(headings.WEST);
      });
    });
    describe('After a right turn', () => {
      it('should update the heading to NORTH, and keep the coordinates', () => {
        const newPosition = position.withRightTurn();
        expect(newPosition.coords).toStrictEqual(position.coords);
        expect(newPosition.heading).toStrictEqual(headings.NORTH);
      });
    });
    describe('After a left turn', () => {
      it('should update the heading to SOUTH, and keep the coordinates', () => {
        const newPosition = position.withLeftTurn();
        expect(newPosition.coords).toStrictEqual(position.coords);
        expect(newPosition.heading).toStrictEqual(headings.SOUTH);
      });
    });
  });
});
