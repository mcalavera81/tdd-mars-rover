import { Coords } from './position';
import { Terrain } from './terrain';

describe('Terrain Behaviour', () => {
  const terrain = new Terrain(10, 10);
  describe('can tell when coordinates are within/off limits', () => {
    it('coords=(0,0) are within limits', () => {
      expect(terrain.isOffLimits(new Coords(0, 0))).toBe(false);
    });
    it('coords=(10,10) are within limits', () => {
      expect(terrain.isOffLimits(new Coords(10, 10))).toBe(false);
    });
    it('coords=(10,-10) are within limits', () => {
      expect(terrain.isOffLimits(new Coords(10, -10))).toBe(false);
    });
    it('coords=(-10,10) are within limits', () => {
      expect(terrain.isOffLimits(new Coords(-10, 10))).toBe(false);
    });
    it('coords=(-10,-10) are within limits', () => {
      expect(terrain.isOffLimits(new Coords(-10, -10))).toBe(false);
    });
    it('coords=(11,10) are off limits', () => {
      expect(terrain.isOffLimits(new Coords(11, 10))).toBe(true);
    });
    it('coords=(10,11) are off limits', () => {
      expect(terrain.isOffLimits(new Coords(10, 11))).toBe(true);
    });
    it('coords=(-11,10) are off limits', () => {
      expect(terrain.isOffLimits(new Coords(-11, 10))).toBe(true);
    });
    it('coords=(10,-11) are off limits', () => {
      expect(terrain.isOffLimits(new Coords(10, -11))).toBe(true);
    });
    it('coords=(11,11) are off limits', () => {
      expect(terrain.isOffLimits(new Coords(11, 11))).toBe(true);
    });
    it('coords=(-11,-11) are off limits', () => {
      expect(terrain.isOffLimits(new Coords(-11, -11))).toBe(true);
    });
  });
});
