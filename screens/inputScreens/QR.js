import React from 'react';
import { View } from 'react-native';
import QRScanner from '../../utils/camera';

export default function QR() {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			{/*작업 확인용 임시 화면 */}
			<QRScanner />
		</View>
	);
}
