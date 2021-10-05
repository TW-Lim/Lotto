import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../screens/home';
import log from '../screens/log';
import QR from '../screens/inputScreens/QR';

const Tab = createBottomTabNavigator();

export default function BotNav() {
	return (
		<Tab.Navigator initialRouteName="home" backBehavior="initialRoute">
			<Tab.Screen name="log" component={log} />
			<Tab.Screen name="home" component={home} />
			<Tab.Screen name="QR" component={QR} />
		</Tab.Navigator>
	);
}
