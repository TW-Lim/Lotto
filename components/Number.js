import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//변수를 children으로 받아 표시
export default function Number(props) {
	const number = props.children;
	let color;

	// children 크기에 따라 color변수에 알맞은 styles 객체 대입
	if (number >= 1 && number < 11) {
		color = styles.Number1;
	} else if (number >= 11 && number < 21) {
		color = styles.Number11;
	} else if (number >= 21 && number < 31) {
		color = styles.Number21;
	} else if (number >= 31 && number < 41) {
		color = styles.Number31;
	} else if (number >= 41) {
		color = styles.Number41;
	}

	return (
		<View style={[styles.circle, color]}>
			<Text>{props.children}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	circle: {
		borderRadius: 50,
		width: 33,
		height: 33,
		alignItems: 'center',
		justifyContent: 'center',
		margin: '1%',
	},
	Number1: {
		backgroundColor: '#ede0f0',
	},
	Number11: {
		backgroundColor: '#fcffb0',
	},
	Number21: {
		backgroundColor: '#ffafb0',
	},
	Number31: {
		backgroundColor: '#afffba',
	},
	Number41: {
		backgroundColor: '#c4f4fe',
	},
});
