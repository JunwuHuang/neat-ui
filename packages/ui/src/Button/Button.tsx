import {
  forwardRef,
  ForwardRefRenderFunction,
  useRef,
  useImperativeHandle
} from 'react'
import { ButtonRef, ButtonProps } from './types'

const Button: ForwardRefRenderFunction<ButtonRef, ButtonProps> = (
  props,
  ref?
) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useImperativeHandle(ref, () => {
    return buttonRef
  })

  return <button ref={buttonRef} {...props} />
}

export default forwardRef(Button)
