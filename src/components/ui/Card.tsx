import Image from 'next/image'

export const Card = () => {
	return (
		<div className='flex flex-col gap-y-3'>
			<div className="bg-[#FBFBFB] h-75 grid place-content-center">
				<Image
					src={'/images/card_image.png'}
					width={250}
					height={250}
					alt="Plant image"
				/>
			</div>
			<div>
				<p className="leading-4 text-text-primary">Barberton Daisy</p>
				<span className="font-bold text-lg text-green-primary">$119.00</span>
			</div>
		</div>
	)
}
