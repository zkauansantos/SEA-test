export default function cpfValidator(cpf: string) {
  const regex = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
  return regex.test(cpf);
}
