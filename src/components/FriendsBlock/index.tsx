import React from 'react';

import styles from './FriendsBlock.module.scss';

const FriendsBlock: React.FC = () => {
	return (
		<div className={styles.root}>
			<img src='../src/assets/png/friends.png'></img>
			<div className={styles.user}>
				<h2>User1</h2>
				<div className={styles.actions}>
					<h4>Чат</h4>
					<h4>Бросить вызов</h4>
				</div>
			</div>
		</div>
	);
};

export default FriendsBlock;
