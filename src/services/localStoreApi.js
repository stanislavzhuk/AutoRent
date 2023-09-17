export const writeToLS = (label, data) =>
  sessionStorage.setItem(label, JSON.stringify(data));

export const readFromLS = label => JSON.parse(sessionStorage.getItem(label));
