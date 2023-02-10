import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import html2canvas from 'html2canvas'

function SnapShotVideo() {
	const videoRef = useRef(null)
	const [snapshot, setSnapshot] = useState(null)

	const takeSnapshot = () => {
		const canvas = document.createElement('canvas')
		const video = videoRef.current
		canvas.width = video.videoWidth
		canvas.height = video.videoHeight
		canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
		setSnapshot(canvas.toDataURL())
	}
	return (
		<div>
			<video ref={videoRef} controls>
				<source src="./Videos/videoplayback.mp4" type="video/mp4" />
			</video>
			<button onClick={takeSnapshot}>Take Snapshot</button>
			{snapshot && <img src={snapshot} />}
		</div>
	)
}

export default SnapShotVideo
