import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import QrScanner from '../../utils/camera';

export default function QR() {
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			{/*작업 확인용 임시 화면 */}
			<QrScanner />
		</View>
	);
}
