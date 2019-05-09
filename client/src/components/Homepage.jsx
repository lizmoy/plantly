import React from 'react'
import bitplant from '../images/bitmap_plant.png'

export default function Homepage() {
	return (
		<div className="description-container">
			<div className="description">
				<h1 className="description-title">Plant.ly</h1>
				<p className="description-tagline">making plant<br />parenthood easier.</p>
			</div>
			<img src={bitplant} alt="" className="bitplant" />
		</div>
	)
}
