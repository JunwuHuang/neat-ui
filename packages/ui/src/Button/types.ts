import { ButtonHTMLAttributes, RefObject } from 'react'

export interface ButtonRef extends RefObject<HTMLButtonElement> {
  hi?: () => 'hi'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'default'
}
