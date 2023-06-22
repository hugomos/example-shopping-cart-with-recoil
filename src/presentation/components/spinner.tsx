import { CircleNotch } from '@phosphor-icons/react'
import React from 'react'

interface SpinnerProps {
  size?: number
}

export const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return <CircleNotch size={size || 24} className="animate-spin" />
}
