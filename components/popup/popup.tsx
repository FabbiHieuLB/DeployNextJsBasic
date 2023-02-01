import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { Container } from '@mui/system'
import googleImage from '@/images/imageJPG.jpg'

export function Popup() {
	return (
		<Stack
			style={{
				position: 'fixed',
				left: '0',
				bottom: '0',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: '#ccc',
				width: '40%',
				padding: '10px',
			}}
		>
			<Box>
				<iframe
					width="300"
					height="300"
					src="https://www.youtube.com/embed/8IlG3VgetoM"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</Box>
			<Box sx={{ textAlign: 'center' }}>
				<Box
					sx={{
						minWidth: '240px',
						color: 'secondary.light',
						marginBottom: '10px',
						borderRadius: '20px',
					}}
				>
					<Image
						src={googleImage}
						width="300"
						height="150"
						layout="responsive"
						alt="work thumbnail"
					/>
				</Box>
				<Typography variant="h5" fontWeight="bold" marginBottom="10px">
					Soloban Soloban Soloban Soloban
				</Typography>
				<Button variant="contained" size="large" style={{ borderRadius: '20px', width: '200px' }}>
					Click
				</Button>
			</Box>
		</Stack>
	)
}
