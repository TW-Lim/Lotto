import React from 'react';
import { View, Text } from 'react-native';

export default function log() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<Text>Comp</Text>
		</View>
	);
}
