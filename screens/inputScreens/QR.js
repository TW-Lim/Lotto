import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

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
			<Tab.Screen name="직접입력" component={Keyboard} />
			<Tab.Screen name="QR입력" component={QRCamera} />
		</Tab.Navigator>
	);
}

function Keyboard() {
	return (
		<View style={styles.container}>
			<View style={styles.item1}></View>
			<View style={styles.item2}></View>
		</View>
	);
}

function QRCamera() {
	return (
		<View style={styles.container}>
			<View style={styles.item1}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column', // 혹은 'row'
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},

	item1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green',
		margin: 10,
		width: '90%',
	},
	item2: {
		flex: 6,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		backgroundColor: 'blue',
		width: '90%',
	},

	Button: {
		color: 'gray',
	},
});

/* <View style={styles.container}>
			<View style={styles.header}>
				<Text>QR</Text>
			</View>
			<View style={styles.item1}>
				<Text>QR</Text>
			</View>
			<View style={styles.item2}>
				<Text>QR</Text>
				<Button style={styles.Button} title="확인"></Button>
			</View>
		</View> */
