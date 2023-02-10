import { Seo } from '@/components/common'
import { HeroSection, RecentPosts, FeatureWorks } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { Popup } from '@/components/popup'
import SnapShotVideo from '@/components/snapshot/SnapShotVideo'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/system'
import { useState, useEffect } from 'react'

const Home: NextPageWithLayout = () => {
	const [buttonPopup, setButtonPopup] = useState<boolean>(true)

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setButtonPopup(false)
	// 	}, 10000)
	// }, [])
	return (
		<Box>
			<Seo
				data={{
					title: 'NextJS Tutorials | Easy Frontend',
					description:
						'Step by step tutorials to build a full CRUD website using NextJS for beginners',
					url: 'https://learn-nextjs-fawn.vercel.app/',
					thumbnailUrl:
						'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
				}}
			/>

			<HeroSection />
			<RecentPosts />
			<FeatureWorks />

			{/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup} /> */}
			<SnapShotVideo />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
