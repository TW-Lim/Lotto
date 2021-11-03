/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';

const QRScanner = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = ({ data }) => {
		// QR코드 URL 배열로 만들고 회차 push
		const countReg = /\d{4}/;
		const numReg = /\D\d{12}/g;
		const count = data.match(countReg);
		const number = data.match(numReg);

		const lottoInputed = count.concat(number);

		console.log(lottoInputed);
		navigation.navigate('Check', lottoInputed);
	};

	const isFocused = useIsFocused();

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	} else if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	} else if (hasPermission === true) {
		return (
			<View style={styles.container}>
				{isFocused && (
					<Camera
						style={styles.camera}
						onBarCodeScanned={handleBarCodeScanned}
					/>
				)}

				<View style={styles.textbutton}>
					<Text style={styles.text}>
						{'가운데에 QR코드를 보여주세요'}
					</Text>
				</View>
			</View>
		);
	}
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	camera: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: undefined,
		backgroundColor: 'gray',
		overflow: 'hidden',
		borderRadius: 30,
	},
	textbutton: {
		flex: 0.5,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginLeft: '10%',
		marginRight: '10%',
	},
	text: {
		fontSize: 40,
		fontWeight: 'bold',
		margin: '10%',
	},
});

export default QRScanner;
