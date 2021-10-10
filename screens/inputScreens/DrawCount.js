import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function DrawCount() {
	return (
		<View style={styles.main}>
			<View style={styles.item1}>
				<Text style={styles.mainText}>981회</Text>
				<Text>2021-09-18</Text>
			</View>
			<View style={styles.item2}>
				<Text>메인</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',

		width: '100%',
	},

	item1: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		marginLeft: 20,
		marginBottom: 20,
		marginTop: 20,
		width: '90%',
	},

	item2: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},

	mainText: {
		fontSize: 35,
		fontWeight: 'bold',
	},
});
