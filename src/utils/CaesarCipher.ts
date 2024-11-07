const alphabet: string[] = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('')
const alphabetLength: number = alphabet.length

export const caesarCipher = (msg: string, shift: number): string => {
  return msg
    .split('')
    .map(char => {
      const isLetter: boolean = alphabet.includes(char)

      if (!isLetter) return char

      const currentIndex: number = alphabet.indexOf(char)
      let newIndex: number = (currentIndex + shift) % alphabetLength

      if (newIndex < 0) newIndex += alphabetLength

      return alphabet[newIndex]
    })
    .join('')
}

export const bruteForceCaesar = (msg: string): string => {
  let possibleMessages: string = ''

  for (let shift = 1; shift <= 33; shift++) {
    const decryptedMessage = caesarCipher(msg, -shift)
    possibleMessages += `Ключ ${shift}: ${decryptedMessage}\n`
  }

  return possibleMessages
}
