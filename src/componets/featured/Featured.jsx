import React from 'react'
import './featured.scss'

const Featured = () => {
	return (
		<div className="featured">
			<img src="https://static.vecteezy.com/system/resources/thumbnails/002/299/703/small_2x/flat-lay-composition-of-cinema-objects-on-red-background-photo.jpg" alt="" />

			<div className="info">
				<img
					src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
					alt=""
				/>
				<span className="desc">
					A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
				</span>
			</div >
		</div>
	)
}

export default Featured
