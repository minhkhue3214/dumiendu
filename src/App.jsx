import { useEffect, useState } from 'react'
import './App.css'
import Sound from 'react-sound';
import aloi from '../public/aloi.mp3'
import Gallery1 from '../components/Gallery1';
import Gallery2 from '../components/Gallery2';
import Gallery3 from '../components/Gallery3';
import Gallery4 from '../components/Gallery4';
import Gallery5 from '../components/Gallery5';
import Gallery6 from '../components/Gallery6';
import Navbar from '../components/Navbar/Navbar';
import ScrollUp from '../components/ScrollUp/ScrollUp';
import Footer from '../components/Footer/Footer';
import GridGift from '../components/GridGift/GridGift';

function App() {
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = () => {
		setIsPlaying(true);
	};

	return (
		<>
			<Navbar />
			{/* <button onClick={handlePlay}>play</button> */}
			<ScrollUp />
			<Sound
				url={aloi}
				playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
				playFromPosition={300 /* in milliseconds */}
				userGesture={true}
			/>
			<main>
				<Gallery1 />
				<Gallery2 />
				<Gallery3 />
				<Gallery4 />
				<Gallery5 />
				<Gallery6 />
			</main>
			<GridGift />
			<Footer />
		</>
	)
}

export default App
