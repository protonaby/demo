import {Validator} from "./validator.js";

export function sortTriangles(triangles) {
  if (!Validator.isNumberInRange(triangles.length, 1, 1000000))
    return {
      status: 'failed',
      reason: 'number of triangles should be between 1 and 1000000'
    };
  for (let i = 0; i < triangles.length; i += 1) {
    const t = triangles[i];
    if (!t.vertices || t.vertices.length !== 3)
      return {
        status: 'failed',
        reason: `triangle name should be specified and represent a string of three letters`
      };
    if (!Validator.isValidTriangleObject(t))
      return {
        status: 'failed',
        reason: `triangle ${t.vertices} not a valid triangle object`
      };
    if (!Validator.isValidTriangle(t))
      return {
        status: 'failed',
        reason: `triangle ${t.vertices} is not a valid triangle`
      };
  }

  let areas = [];
  for (let i = 0; i < triangles.length; i += 1) {
    const t = triangles[i];
    const verticesNames = t.vertices.toLowerCase().split('');
    const a = t[verticesNames[0]];
    const b = t[verticesNames[1]];
    const c = t[verticesNames[2]];

    const p = (a + b + c) / 2;
    areas.push([i, Math.sqrt(p * (p - a) * (p - b) * (p - c))]);
  }
  areas.sort((a, b) => {
    return b[1] - a[1];
  });
  let result = [];
  for (let i = 0; i < areas.length; i += 1) {
    result.push(triangles[areas[i][0]].vertices);
  }
  return result;
}


