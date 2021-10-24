import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//변수를 children으로 받아 표시
export default function Number(props) {
	const number = props.children;
	let color;

	// children 크기에 따라 color변수에 알맞은 styles 객체 대입
	if (number >= 1 && number < 11) {
		color = styles.yellow;
	} else if (number >= 11 && number < 21) {
		color = styles.blue;
	} else if (number >= 21 && number < 31) {
		color = styles.red;
	} else if (number >= 31 && number < 41) {
		color = styles.black;
	} else if (number >= 41) {
		color = styles.green;
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
		backgroundColor: '#ede0f0',
		margin: '1%',
	},
	yellow: {
		backgroundColor: 'yellow',
	},
	blue: {
		backgroundColor: 'blue',
	},
	red: {
		backgroundColor: 'red',
	},
	black: {
		backgroundColor: 'grey',
	},
	green: {
		backgroundColor: 'green',
	},
});
