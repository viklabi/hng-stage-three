import { ReactNode } from "react"

interface buttonProps {
  children: ReactNode,
  className: string,
  type: 'button' | 'submit',
  onClick: () => void
}

const Button = ({ children, className, onClick, type }: buttonProps) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button