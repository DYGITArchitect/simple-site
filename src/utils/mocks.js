export const timeOut = (secs) =>
  new Promise((res) => setTimeout(res, secs * 1000));
