import React from 'react'

interface LoaderProps {
  text?: string
}

const Loader: React.FC<LoaderProps> = ({ text }: LoaderProps) => {
  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{text}</div>
}

export default Loader
