import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DrawCount from '../components/DrawCount/DrawCount';

export default function home() {
	const [count, setCount] = useState(0);
	return (
		<View
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
		>
			<DrawCount />
			<Text>home</Text>
			<Text>{`Pressed ${count} times`}</Text>
			<Button
				title="Tab"
				color="#f0f"
				onPress={() => {
					setCount(count + 1);
				}}
			></Button>
		</View>
	);
}
