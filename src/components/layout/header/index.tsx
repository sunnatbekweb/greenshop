import { Cart } from '@/assets/icons/Cart'
import { Menu } from '@/assets/icons/Menu'
import { Search } from '@/assets/icons/Search'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
	return (
		<header className="h-17.5">
			<div className="container h-full my-auto flex items-center justify-between border-b-[0.3px] border-[#46A35880]">
				<Link href={'/'}>
					<Image
						src={'/icons/logo.svg'}
						width={150}
						height={34}
						loading="eager"
						alt="Logo"
					/>
				</Link>
				<nav className="hidden lg:block">
					<ul className="flex items-center gap-x-12.5">
						<li>
							<Link href={'#'}>Home</Link>
						</li>
						<li>
							<Link href={'#'}>Shop</Link>
						</li>
						<li>
							<Link href={'#'}>Plant Care</Link>
						</li>
						<li>
							<Link href={'#'}>Blogs</Link>
						</li>
					</ul>
				</nav>
				<div className="flex items-center gap-x-1.75 sm:gap-x-3.75">
					<Button
						variant="ghost"
						size="icon"
					>
						<Search />
					</Button>
					<Button
						variant="ghost"
						size="icon"
					>
						<Cart />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="lg:hidden"
					>
						<Menu />
					</Button>
				</div>
			</div>
		</header>
	)
}
