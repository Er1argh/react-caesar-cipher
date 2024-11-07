import React from 'react'

interface InputProps {
  value: string | number
  onChange: (value: string) => void
  type: 'text' | 'number' | 'textarea'
  placeholder?: string
  min?: number
  max?: number
}

const Input: React.FC<InputProps> = ({ value, onChange, type, placeholder, min, max }) => {
  if (type === 'textarea') {
    return (
      <textarea
        style={styles.textarea}
        value={value as string}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    )
  }

  return (
    <input
      style={styles.input}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  )
}

const styles = {
  textarea: {
    width: '100%',
    height: '100px',
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
}

export default Input
