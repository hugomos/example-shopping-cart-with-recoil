import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant: 'primary' | 'secondary' | 'default' | 'sucess' | 'error'
  icon?: React.ReactNode
  options?: {
    iconPosition?: 'left' | 'right'
  }
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  icon,
  options,
  ...props
}) => {
  let buttonClassName = `flex items-center justify-center gap-2 w-full min-w-fit 
  py-2 px-4 rounded-sm transition-colors font-semibold`

  if (variant === 'primary') {
    buttonClassName += ' bg-blue-500 text-zinc-50 hover:bg-blue-600'
  }

  if (variant === 'secondary') {
    buttonClassName +=
      ' border border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-zinc-50'
  }

  if (variant === 'default') {
    buttonClassName += ' bg-gray-500 text-zinc-50 hover:bg-gray-600'
  }

  if (variant === 'sucess') {
    buttonClassName += ' bg-green-500 text-zinc-50 hover:bg-green-600'
  }

  if (variant === 'error') {
    buttonClassName += ' bg-red-500 text-zinc-50 hover:bg-red-600'
  }

  if (options) {
    buttonClassName += ` ${
      options.iconPosition === 'left' ? ' flex-row-reverse' : ' flex-row'
    }`
  }

  return (
    <button {...props} className={buttonClassName}>
      {icon && icon}
      {title}
    </button>
  )
}
