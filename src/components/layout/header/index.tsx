import { Cart } from '@/assets/icons/Cart'
import { Logout } from '@/assets/icons/Logout'
import { Search } from '@/assets/icons/Search'
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
						loading='eager'
						alt="Logo"
					/>
				</Link>
				<nav>
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
				<div className="flex items-center gap-x-7.5">
					<Search />
					<Cart />
					<button className="h-9 px-4 rounded-md bg-green-primary text-white flex items-center gap-1">
						<Logout />
						<span>Login</span>
					</button>
				</div>
			</div>
		</header>
	)
}
