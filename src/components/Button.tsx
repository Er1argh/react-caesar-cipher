import React from 'react'

interface ButtonProps {
  onClick: () => void
  label: string
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}

const styles = {
  button: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    color: '#fff',
    backgroundColor: '#007BFF',
    cursor: 'pointer',
  },
}

export default Button
