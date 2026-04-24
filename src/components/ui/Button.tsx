type Variant = 'primary'
type Size = 'md'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: Variant
	size?: Size
}

const variantStyles = {
	primary: 'bg-green-primary font-bold text-white leading-5'
}

const sizeStyles = {
	md: 'px-6 h-10'
}

export const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	className = ''
}: ButtonProps) => {
	return (
		<button
			className={`rounded-md transition ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
		>
			{children}
		</button>
	)
}
