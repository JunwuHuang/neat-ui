import { FC } from 'react'
import clsx from 'clsx'
import './index.less'
import type { TagProps } from './types'

const namespace = 'tag'

const Tag: FC<TagProps> = ({
  className,
  style,
  checked,
  onChange,
  children
}) => {
  return (
    <span
      className={clsx(namespace, className, {
        [`${namespace}-checked`]: checked
      })}
      style={style}
      onClick={() => onChange?.(!checked)}
    >
      {children}
    </span>
  )
}

export default Tag
