import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//변수를 children으로 받아 표시
export default function Number(props) {
	return (
		<View style={styles.circle}>
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
});
