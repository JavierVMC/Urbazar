export function toNumberString(num) {
  if (Number.isInteger(num)) {
    return num + '.00'
  } else {
    return num.toString()
  }
}
