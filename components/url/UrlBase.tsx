import React, { useState, useEffect } from 'react'
import ReactBase64 from 'react-base64'

function UrlBase64() {
	const [file, setFile] = useState(null)
	const [fileBase64, setFileBase64] = useState(null)

	const handleFileChange = (event) => {
		setFile(event.target.files[0])
	}

	useEffect(() => {
		if (!file) {
			return
		}

		const fileReader = new FileReader()
		fileReader.onload = (event) => {
			setFileBase64(event.target.result)
		}
		fileReader.readAsDataURL(file)
	}, [file])

	return (
		<div>
			<input type="file" onChange={handleFileChange} />
			{fileBase64 && (
				<ReactBase64.Image src={`data:${file.type};base64,${fileBase64.split(',')[1]}`} />
			)}
		</div>
	)
}

export default UrlBase64
