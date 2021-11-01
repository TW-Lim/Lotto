import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Drawcount from '../../../components/DrawCount';

//끝낼수있을까...

export default function Comp() {
	return (
		<View style={styles.container}>
			<Drawcount />
			<View style={styles.log}>
				<Text>comp</Text>
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
		paddingTop: '1%',
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
