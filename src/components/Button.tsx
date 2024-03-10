import clsx from "clsx"
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => (
  <button
    {...props}
    className={clsx(
      props.className,
      "px-4 py-2 bg-cyan-500 text-white rounded-full",
    )}
  >
    {props.children}
  </button>
)

export default Button
