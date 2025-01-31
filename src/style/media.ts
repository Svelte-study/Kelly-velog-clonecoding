export enum EBreakPoint {
  M1 = 1919,
  M2 = 1440,
  M3 = 1056,
  M4 = 1024,
  M5 = 756,
}
const breakPoints = [
  EBreakPoint.M1,
  EBreakPoint.M2,
  EBreakPoint.M3,
  EBreakPoint.M4,
  EBreakPoint.M5,
];
const mq = breakPoints.map((bp) => `@media screen and (max-width: ${bp}px)`);

export const breakSize = {
  M1: mq[0],
  M2: mq[1],
  M3: mq[2],
  M4: mq[3],
  M5: mq[4],
};
