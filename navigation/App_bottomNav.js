import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo } from '@expo/vector-icons';
import home from '../screens/home';
import log from '../screens/log';
import QR from '../screens/QR';

const Tab = createBottomTabNavigator();
// App -> home, log, QR
export default function BotNav() {
	return (
		<Tab.Navigator initialRouteName="홈" backBehavior="initialRoute">
			<Tab.Screen
				name="로그"
				component={log}
				options={{
					tabBarIcon: () => <AntDesign name="left" size={20} />,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="홈"
				component={home}
				options={{
					tabBarIcon: () => <Entypo name="home" size={20} />,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="입력"
				component={QR}
				options={{
					tabBarIcon: () => <AntDesign name="right" size={20} />,
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 20,
					},
					headerTitleAlign: 'left',
					headerStyle: {
						shadowRadius: 0,
						shadowOffset: { height: 0 },
						elevation: 0,
					},
				}}
			/>
		</Tab.Navigator>
	);
}
