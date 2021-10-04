import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import botNav from './navigation/bottomNav';

export default function App() {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
				style={styles.logo}
			/>

			<Text style={styles.instructions}>expo</Text>

			<Button style={{ backgroundColor: 'blue' }}>Pick ma a photo</Button>
			<StatusBar style="auto" />

			<NavigationContainer>
				<botNav />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 305,
		height: 159,
		marginBottom: 10,
	},
	instructions: {
		color: '#888',
		fontSize: 18,
		marginHorizontal: 15,
	},
});
