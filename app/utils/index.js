export const idify = (list = []) =>
  list.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
