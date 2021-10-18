import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import keyboard from './inputScreens/keyboard';
import QRcamera from './inputScreens/QRcamera';

const Tab = createMaterialTopTabNavigator();
const keyboardStack = createStackNavigator();
const QRCamera = createStackNavigator();

export default function QR() {
	return (
		<Tab.Navigator
			initialRouteName="직접입력"
			screenOptions={{
				tabBarLabelStyle: { fontWeight: 'bold', fontSize: 14 },
				tabBarStyle: {
					shadowColor: 'white',
					shadowRadius: 0,
					shadowOffset: { height: 0 },
					elevation: 0,
				},
				tabBarActiveTintColor: '#6A5ACD',
				tabBarInactiveTintColor: 'gray',
				tabBarIndicatorStyle: { color: 'white' },
				tabBarItemStyle: { width: 100 },
				tabBarPressColor: 'gray',
				tabBarPressOpacity: '50%',
			}}
		>
			<Tab.Screen name="직접입력" component={KeyboardStackScreen} />
			<Tab.Screen name="QR입력" component={QRCameraStackScreen} />
		</Tab.Navigator>
	);
}

function KeyboardStackScreen() {
	return (
		<keyboardStack.Navigator initialRouteName="Keyboard">
			<keyboardStack.Screen
				name="Keyboard"
				component={keyboard}
				options={{ headerShown: false }}
			/>
		</keyboardStack.Navigator>
	);
}

function QRCameraStackScreen() {
	return (
		<QRCamera.Navigator initialRouteName="QRCamera">
			<QRCamera.Screen
				name="QRCamera"
				component={QRcamera}
				options={{ headerShown: false }}
			/>
		</QRCamera.Navigator>
	);
}
