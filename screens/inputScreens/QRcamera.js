import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRScanner from '../../utils/camera';

function QRCamera() {
	return (
		<View style={styles.container}>
			<View style={styles.camera}>
				<QRScanner />
			</View>
		</View>
	);
}

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
		width: '85%',
		marginTop: '4%',
		marginBottom: '4%',
	},
});

export default QRCamera;
