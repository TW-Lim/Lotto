import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
/* import './home.css'; */

export default function home() {
	return (
		<View style={styles.container}>
			<View style={styles.item1}>
				<Text style={styles.mainText}>981회</Text>
				<Text>2021-09-18</Text>
			</View>
			<View style={styles.item2}>
				<Text>메인</Text>
			</View>

			<View style={styles.item3}>
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

	mainText: {
		fontSize: 40,
		fontWeight: 'bold',
	},

	item1: {
		flex: 0.5,
		width: '83%',
		backgroundColor: 'white',
		justifyContent: 'center',
		marginTop: '1%',
	},

	item2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		marginBottom: '2%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
		width: '90%',
	},

	item3: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		backgroundColor: 'white',
		margin: 10,
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},

	circle: {
		borderRadius: 50,
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red',
	},

	number: {
		fontSize: 18,
	},
});
