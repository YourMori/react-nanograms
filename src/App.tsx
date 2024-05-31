import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Route, Routes } from 'react-router';

import './scss/app.scss';
import Header from './components/Header';
import Switch from './components/Switch';
import Friends from './pages/Friends';
import Home from './pages/Home';
import Tournament from './pages/Tournament';
import Play from './pages/Play';

function App() {
	return (
		<>
			<Parallax
				pages={1.8}
				style={{ top: '0', left: '0' }}
				className='animation'
			>
				<ParallaxLayer offset={0} speed={0.4}>
					<div className='animation_layer parallax' id='sky_back'></div>
				</ParallaxLayer>

				<ParallaxLayer offset={0} speed={0.5}>
					<div className='animation_layer parallax' id='mountain_back'></div>г
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.6}>
					<div className='animation_layer parallax' id='mountain_middle'></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.7}>
					<div className='animation_layer parallax' id='mountain_front'></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0.6} speed={0.7}>
					<main className='content'>
						<div className='wrapper'>
							<Routes>
								<Route path='/'>
									<Route path='' element={<Home />} />
									<Route path='play' element={<Play />} />
									<Route path='friends' element={<Friends />} />
									<Route path='tournament' element={<Tournament />} />
								</Route>
							</Routes>
						</div>
					</main>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.7}>
					<div className='animation_layer parallax'>
						<Switch />
						<Header></Header>
					</div>
				</ParallaxLayer>
			</Parallax>

			<footer className='footer'></footer>
		</>
	);
}

export default App;
