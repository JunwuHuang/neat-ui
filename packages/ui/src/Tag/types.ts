import type { CSSProperties, ReactNode } from 'react'

export interface IProps {
  className?: string
  style?: CSSProperties
  checked?: boolean
  onChange?: (checked: boolean) => void
  children?: ReactNode
}
