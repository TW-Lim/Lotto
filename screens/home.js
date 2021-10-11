import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DrawCount from '../components/DrawCount';

export default function home() {
	return (
		<View style={styles.container}>
			<DrawCount />
			<View style={styles.log}>
				<Text>로그</Text>
			</View>
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

	log: {
		flex: 1.5,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		backgroundColor: 'white',
		margin: '5%',
		marginTop: '5%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},
});
