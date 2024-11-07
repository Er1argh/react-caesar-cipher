import React, { useState } from 'react'

import Input from './components/Input'
import ResultDisplay from './components/ResultDisplay'
import Button from './components/Button'

import { caesarCipher, bruteForceCaesar } from './utils/CaesarCipher'

const MIN_KEY = 1
const MAX_KEY = 33

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  const [key, setKey] = useState<number>(1)
  const [result, setResult] = useState<string>('')

  const encryptMessage = (): void => {
    if (key < MIN_KEY || key > MAX_KEY) {
      alert('Введите корректный ключ (1-33)')
      return
    }
    const encryptedMessage = caesarCipher(message, key)
    setResult(`Зашифрованное сообщение: ${encryptedMessage}`)
  }

  const decryptMessage = (): void => {
    if (key < MIN_KEY || key > MAX_KEY) {
      alert('Введите корректный ключ (1-33)')
      return
    }
    const decryptedMessage = caesarCipher(message, -key)
    setResult(`Расшифрованное сообщение: ${decryptedMessage}`)
  }

  const bruteForce = (): void => {
    const possibleMessages = bruteForceCaesar(message)
    setResult(`Возможные варианты:\n${possibleMessages}`)
  }

  return (
    <div style={styles.container}>
      <h1>Шифр Цезаря</h1>
      <Input
        value={message}
        onChange={value => setMessage(value.toLowerCase())}
        placeholder="Введите сообщение"
        type="textarea"
      />
      <Input
        value={key}
        onChange={value => setKey(Number(value))}
        placeholder="Введите ключ (1-33)"
        type="number"
        min={MIN_KEY}
        max={MAX_KEY}
      />
      <Button onClick={encryptMessage} label="Зашифровать" />
      <Button onClick={decryptMessage} label="Расшифровать" />
      <Button onClick={bruteForce} label="Подбор ключа" />
      <ResultDisplay result={result} />
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center' as const,
    backgroundColor: 'f4f4f4',
    borderRadius: '8px',
  },
}

export default App
