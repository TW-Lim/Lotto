import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

// eslint-disable-next-line react/prop-types
const QRScanner = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [text, setText] = useState('가운데에 QR코드를 보여주세요');

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = ({ data }) => {
		setScanned(true);
		setText(data);
		// eslint-disable-next-line react/prop-types
		navigation.navigate('Check');
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<View style={styles.camera}>
				<BarCodeScanner
					onBarCodeScanned={
						scanned ? undefined : handleBarCodeScanned
					}
					style={{ height: 400, width: 400 }}
				/>
			</View>
			<View style={styles.textbutton}>
				<Text>{text}</Text>
			</View>
			<View style={{ marginBottom: '5%' }}>
				{scanned && (
					<Button
						title={'다시하기'}
						onPress={() => setScanned(false)}
					/>
				)}
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
	camera: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 300,
		width: 300,
		overflow: 'hidden',
		marginTop: '5%',
		borderRadius: 30,
	},
	textbutton: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginLeft: '10%',
		marginRight: '10%',
	},
});

export default QRScanner;
