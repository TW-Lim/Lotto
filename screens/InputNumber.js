import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRnavigator from './QR';
import Check from './inputScreens/NumberCheck';
import comp from './NumberComp';

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
				component={comp}
				options={{ headerShown: false }}
			/>
		</QRNavigator.Navigator>
	);
}
