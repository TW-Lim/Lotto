/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NumberCheck = ({ route, navigation }) => {
	const { data } = route.params;

	const goToComp = () => {
		navigation.navigate('Comp');
	};

	const goBack = () => {
		navigation.navigate('QRNavigator');
	};

	return (
		<View style={styles.container}>
			<View style={styles.item1}>
				<Text>입력하신 번호를 확인해주세요.</Text>
				<Text>{data.drwNo}</Text>
				<Text>{data.No1}</Text>
				<Text>{data.No2}</Text>
				<Text>{data.No3}</Text>
				<Text>{data.No4}</Text>
				<Text>{data.No5}</Text>
				<Text>{data.No6}</Text>
			</View>
			<View style={styles.item2}>
				<View style={styles.buttonView}>
					<TouchableOpacity style={styles.button1} onPress={goToComp}>
						<Text>네</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonView}>
					<TouchableOpacity
						style={styles.button2}
						onPress={() => {
							goBack();
						}}
					>
						<Text>아니요</Text>
					</TouchableOpacity>
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
	item1: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		margin: '3%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},
	item2: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		margin: '2%',
		/* borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5, */
	},

	buttonView: {
		flex: 1,
		backgroundColor: 'white',
		width: '80%',
		height: '80%',
		marginLeft: '2%',
	},

	button1: {
		width: 150,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
		/* backgroundColor: 'gray', */
		borderRadius: 5,
		borderColor: 'blue',
		borderWidth: 2,
	},
	button2: {
		width: 150,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
		/* backgroundColor: 'gray', */
		borderRadius: 5,
		borderColor: 'red',
		borderWidth: 2,
	},
});

export default NumberCheck;
