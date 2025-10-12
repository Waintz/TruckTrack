export default function removeSpaceEncoding(text: string) {
  return text.replace(/%20/g, " ");
}
