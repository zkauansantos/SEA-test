export function rgValidator(rg: string) {
  const regex = /^(\d{1,2}\.\d{3}\.\d{3}(-\d{1}|\d{2})?|\d{7})$/;
  return regex.test(rg);
}
