import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DrawCount from '../components/DrawCount';

export default function log() {
	const [count, setCount] = useState(1);

	useEffect(() => {
		//count state 변경시 DrawCount 재렌더링
	}, [count]);

	return (
		<View style={styles.container}>
			<View style={styles.log}>
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
			</View>
			<View style={styles.scroll}>
				<ScrollView contentContainerStyle={styles.scrollView}>
					<Text style={styles.text}>로그</Text>
					<Text style={styles.text}>로그</Text>
					<Text style={styles.text}>로그</Text>
					<Text style={styles.text}>로그</Text>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		width: '50%',
		borderWidth: 1,
		borderRadius: 5,
		textAlign: 'center',
		fontSize: 20,
		padding: '2%',
		marginBottom: '5%',
	},
	container: {
		flex: 1,
		flexDirection: 'column', // 혹은 'row'
		backgroundColor: 'white',
		paddingTop: '11%',
	},
	scrollView: {
		backgroundColor: 'white',
	},
	scroll: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
		margin: '5%',
		padding: '6%',
	},
	log: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	text: {
		fontSize: 32,
		paddingBottom: '3%',
	},
});
