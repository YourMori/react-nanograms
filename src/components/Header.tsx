import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	const handleLinkClick = (e: any) => {
		const element = document.getElementById(e.target.to);
		if (element) {
			element.scrollTo(0, 20);
		}
	};

	return (
		<header className='header'>
			<nav className='menu'>
				<ul>
					<li>
						<Link to='play'>Играть</Link>
					</li>
					<li>
						<Link to='tournament'>Турнир</Link>
					</li>
					<li>
						<Link to='friends' onClick={handleLinkClick}>
							Друзья
						</Link>
					</li>
					<li>
						<Link to=''>Nanogram.com</Link>
					</li>
					<li>
						<a href='#'>Статистика</a>
					</li>
					<li>
						<a href='#'>Войти</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
