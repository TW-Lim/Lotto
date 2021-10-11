import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import QRScanner from '../../utils/camera';
  
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
			<View
				style={{
					flex: 1,
					width: '90%',
					margin: '4%',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<View style={styles.radio}>
					<Text>자동 수동 들어갈 자리 입니다.</Text>
				</View>
				<View style={styles.item2}></View>
			</View>
		</View>
	);
}

function QRCamera() {
	return (
		<View style={styles.container}>
			<View style={styles.camera}>
				<QRScanner />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},

	radio: {
		flex: 0.6,
		justifyContent: 'center',
		margin: '2%',
		width: '100%',
		backgroundColor: 'gray',
	},

	camera: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '85%',
		margin: '15%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},
	item2: {
		flex: 6,
		justifyContent: 'center',
		alignItems: 'center',
		margin: '2%',
		width: '100%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},

	Button: {
		color: 'gray',
	},
});
