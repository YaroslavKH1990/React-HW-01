import React from 'react';
import user from './data/user.json';
import Profile from './components/Profile.jsx';
import Statistics from './components/Statistics.jsx';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/FriendList.jsx';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory.jsx';
import transactions from './data/transactions.json';

const App = () => {
	return (
		<>
			<Profile
				name={user.name}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics title="Upload stats" stats={statisticalData} />
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</>
	);
};

export default App;
