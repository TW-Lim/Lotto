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
				<View style={styles.number}>
					<Text>번호</Text>
				</View>
				<View style={styles.price}>
					<Text>상금</Text>
				</View>
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
		marginLeft: '5%',
		marginBottom: '7%',
		marginTop: '18%',
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

	number: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		flexDirection: 'row',
		width: '90%',
		marginTop: '3%',
		backgroundColor: 'gray',
	},

	price: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
		marginBottom: '3%',
		backgroundColor: 'green',
	},

	mainText: {
		fontSize: 35,
		fontWeight: 'bold',
	},

	circle: {
		borderRadius: 50,
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red',
	},

	Cnumber: {
		fontSize: 18,
	},
});
