import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function home() {
	return (
		<View style={styles.container}>
			<View style={styles.item1}>
				<Text>로또</Text>
			</View>
			<View style={styles.item2}>
				<Text>로그</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column', // 혹은 'column'
	},
	item1: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray',
	},
	item2: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
});
