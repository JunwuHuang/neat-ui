import type { CSSProperties, ReactNode } from 'react'

export interface TagProps {
  className?: string
  style?: CSSProperties
  checked?: boolean
  onChange?: (checked: boolean) => void
  children?: ReactNode
}
