export const sortArr = ['ascending', 'descending'];
export const orderArr = ['title', 'score', 'air_start', 'air_end'];

export function orderMenuItems() {
  return orderArr.map((r) => getNames(r));
}

export function sortMenuItems() {
  return sortArr.map((r) => getNames(r));
}

function getNames(name: string) {
  switch (name) {
    case 'air_start':
      return 'Start date';
    case 'air_end':
      return 'End date';
    default:
      return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
