export function validateInput(...inputs) {
  for (const input of inputs) {
    if (input === "" || Number(input) < 0) return false;
  }
  return true;
}
