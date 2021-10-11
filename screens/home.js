import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DrawCount from '../components/DrawCount/DrawCount';
import ReqWinNum from '../utils/LottoAPI';

export default function home() {
	const [count, setCount] = useState(0);
	ReqWinNum(123).then((response) => console.log(response));

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
