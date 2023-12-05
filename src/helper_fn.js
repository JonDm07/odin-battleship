export function convertPosition(position) {
  if (position > 99) {
    return;
  }

  const row = Math.floor(position / 10);
  const column = position - row * 10;

  return [row, column];
}
