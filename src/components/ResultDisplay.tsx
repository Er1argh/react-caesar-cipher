import React from 'react'

interface ResultDisplayProps {
  result: string
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return <div style={styles.result}>{result}</div>
}

const styles = {
  result: {
    padding: '10px',
    marginTop: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    whiteSpace: 'pre-wrap' as const,
  },
}

export default ResultDisplay
