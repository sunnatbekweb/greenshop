'use client'

import { Card } from '@/components/ui/Card'
import { Carousel } from '@/components/ui/Carousel'
import RangeSlider from '@/components/ui/RangeSlider'

const categories = Array.from({ length: 9 })
const plants = Array.from({ length: 9 })
const sizes = ['Small', 'Medium', 'Large']

export default function Home() {
	return (
		<main>
			<section className="pt-6">
				<div className="container">
					<Carousel />
				</div>
			</section>
			<section className="py-6">
				<div className="container flex gap-x-12.5">
					<aside className="max-w-77.5 w-full">
						<div className="py-3.5 px-4 bg-[#FBFBFB] flex flex-col gap-y-12.5">
							<div>
								<span className="font-bold text-lg leading-4">Categories</span>
								<ul className="flex flex-col gap-y-5 py-5 px-3">
									{categories.map((_, index) => (
										<li
											key={index}
											className="flex items-center justify-between"
										>
											<button>House Plants</button>
											<span>({index})</span>
										</li>
									))}
								</ul>
							</div>
							<div>
								<span className="font-bold text-lg leading-4">Price Range</span>
								<RangeSlider />
							</div>
							<div>
								<span className="font-bold text-lg leading-4">Categories</span>
								<ul className="flex flex-col gap-y-5 py-5 px-3">
									{sizes.map((size, index) => (
										<li
											key={size}
											className="flex items-center justify-between"
										>
											<button>{size}</button>
											<span>({index})</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</aside>
					<div className="w-full">
						<div className="flex items-center justify-between">
							<div className="flex gap-10">
								<button>All Plants</button>
								<button>New Arrivals</button>
								<button>Sale</button>
							</div>
							<div>
								Sort by:{' '}
								<select>
									<option value="default">Default sorting</option>
								</select>
							</div>
						</div>
						<div className="grid grid-cols-3 gap-5 pt-6">
							{plants.map((_, index) => (
								<Card key={index} />
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
