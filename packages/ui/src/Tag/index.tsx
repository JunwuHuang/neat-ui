import { FC } from 'react'
import styled from '@emotion/styled'
import type { IProps } from './types'

const TagBase = styled.span<IProps>`
  font-size: 12px;
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  height: 22px;
  line-height: 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  background-color: ${props => (props.checked ? '#fff1f0' : '#f5f5f5')};
  border-color: ${props => (props.checked ? '#ffa39e' : '#d9d9d9')};
  color: ${props => (props.checked ? ' #ff4d4f' : 'rgba(0, 0, 0, 0.65)')};
`

const Tag: FC<IProps> = ({ className, style, checked, onChange, children }) => {
  return (
    <TagBase
      className={className}
      style={style}
      onClick={() => onChange?.(!checked)}
    >
      {children}
    </TagBase>
  )
}

export default Tag
