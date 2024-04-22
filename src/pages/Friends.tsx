import React from 'react';
import FriendsBlock from '../components/FriendsBlock';

const Friends: React.FC = () => {
	return (
		<div className='friends'>
			<h1>Друзья</h1>
			<img src='../src/assets/png/friends.png'></img>
			<div className='friends-wrapper'>
				<FriendsBlock />
				<FriendsBlock />
				<FriendsBlock />
				<FriendsBlock />
				<FriendsBlock />
				<FriendsBlock />
			</div>
		</div>
	);
};

export default Friends;
