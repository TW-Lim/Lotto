import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

// eslint-disable-next-line react/prop-types
const Keyboard = ({ navigation }) => {
	const goToCheck = () => {
		// eslint-disable-next-line react/prop-types
		navigation.navigate('Check');
	};

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<View style={styles.radio}>
					<Text>자동 수동 들어갈 자리 입니다.</Text>
				</View>

				<View style={styles.item2}>
					<Button onPress={goToCheck} title="체크"></Button>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},

	main: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		margin: '4%',
	},

	radio: {
		flex: 0.6,
		justifyContent: 'center',
		margin: '2%',
		width: '100%',
		backgroundColor: 'gray',
	},

	camera: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '85%',
		margin: '15%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},
	item2: {
		flex: 6,
		justifyContent: 'center',
		alignItems: 'center',
		margin: '2%',
		width: '100%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},

	Button: {
		color: 'gray',
	},
});

export default Keyboard;
