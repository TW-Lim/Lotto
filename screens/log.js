import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DrawCount from '../components/DrawCount';

export default function log() {
	const [count, setCount] = useState(1);

	useEffect(() => {
		//count state 변경시 DrawCount 재렌더링
	}, [count]);

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<TextInput
					style={styles.input}
					keyboardType={'number-pad'}
					maxLength={3}
					onChangeText={(text) => {
						if (text || text !== 0) {
							const parsed = parseInt(text);
							setCount(parsed);
						} else {
							return true;
						}
					}}
					placeholder={'회차'}
				/>
				<DrawCount count={count} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	container: {
		flex: 1,
		flexDirection: 'column', // 혹은 'row'
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: StatusBar.currentHeight,
	},
	scrollView: {
		backgroundColor: 'white',
	},
	text: {
		fontSize: 42,
	},
});
