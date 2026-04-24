import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Button } from './Button'

const slides = Array.from({ length: 3 })

export const Carousel = () => {
	return (
		<Swiper
			pagination={true}
			modules={[Pagination]}
			loop={true}
			className="hero-carousel"
		>
			{slides.map((_, index) => (
				<SwiperSlide key={index}>
					<div className="flex items-center justify-between">
						<div className="flex w-1/2 flex-col">
							<div className="mb-11 flex flex-col gap-y-1.5">
								<span className="font-medium text-sm uppercase text-text-primary">
									Welcome to GreenShop
								</span>
								<strong className="font-black leading-none text-[70px] text-text-primary">
									Let’s Make a Better{' '}
									<span className="text-green-primary">Planet</span>
								</strong>
								<p className="text-sm leading-6 text-text-secondary">
									We are an online plant shop offering a wide range of cheap and
									trendy plants. Use our plants to create an unique Urban
									Jungle. Order your favorite plants!
								</p>
							</div>
							<Button className="w-fit">Shop now</Button>
						</div>
						<div>
							<Image
								src={'/images/carousel_image.png'}
								width={518}
								height={470}
								alt="Image"
								loading="eager"
							/>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
