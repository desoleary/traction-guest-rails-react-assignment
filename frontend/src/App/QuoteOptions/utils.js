export const listToMatrix = (list) =>
  list.reduce(
    (rows, key, index) =>
      (index % 4 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows,
    []
  );
