import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BotNav from './navigation/App_bottomNav';

export default function App() {
	return (
		<NavigationContainer>
			<BotNav />
		</NavigationContainer>
	);
}
