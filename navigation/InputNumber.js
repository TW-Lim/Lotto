import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRnavigator from '../screens/QR';
import Check from '../screens/inputScreens/stackScreen/NumberCheck';
import Comp from '../screens/inputScreens/stackScreen/NumberComp';

const QRNavigator = createStackNavigator();

export default function InputNumber() {
	return (
		<QRNavigator.Navigator>
			<QRNavigator.Screen
				name="QRNavigator"
				component={QRnavigator}
				options={{ headerShown: false }}
			/>
			<QRNavigator.Screen
				name="Check"
				component={Check}
				options={{ headerShown: false }}
			/>
			<QRNavigator.Screen
				name="Comp"
				component={Comp}
				options={{ headerShown: false }}
			/>
		</QRNavigator.Navigator>
	);
}
