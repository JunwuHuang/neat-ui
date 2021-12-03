import { FC, useEffect } from 'react'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ color, ...props }) => {
  useEffect(() => {
    console.log(color)
  }, [color])
  return <button {...props} />
}

export default Button
