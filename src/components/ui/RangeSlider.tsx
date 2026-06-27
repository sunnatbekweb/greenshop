import { useState } from 'react'
import { Button } from './button'
import './RangeSlider.css'

const RangeSlider = () => {
	const [min, setMin] = useState(39)
	const [max, setMax] = useState(1230)

	const MIN = 39
	const MAX = 1500

	return (
		<div className="range-container">
			<div className="slider">
				<input
					type="range"
					min={MIN}
					max={MAX}
					value={min}
					onChange={e => setMin(Math.min(+e.target.value, max - 1))}
				/>

				<input
					type="range"
					min={MIN}
					max={MAX}
					value={max}
					onChange={e => setMax(Math.max(+e.target.value, min + 1))}
				/>

				<div className="slider-track" />
				<div
					className="slider-range"
					style={{
						left: `${(min / MAX) * 100}%`,
						right: `${100 - (max / MAX) * 100}%`
					}}
				/>
			</div>

			<p className="mb-4">
				Price: <span>${min}</span> – <span>${max}</span>
			</p>

			<Button>Filter</Button>
		</div>
	)
}

export default RangeSlider
