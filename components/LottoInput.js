import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function LottoInput() {
	//const TextInputRepeat = ['1', '2', '3', '4', '5', '6'];

	return (
		<View style={styles.list}>
			<TextInput
				style={styles.input}
				keyboardType={'number-pad'}
				returnKeyType="next"
				placeholder="2"
				maxLength={2}
			/>
			<TextInput
				style={styles.input}
				keyboardType={'number-pad'}
				returnKeyType="next"
				placeholder="2"
				maxLength={2}
			/>
			<TextInput
				style={styles.input}
				keyboardType={'number-pad'}
				returnKeyType="next"
				placeholder="2"
				maxLength={2}
			/>
			<TextInput
				style={styles.input}
				keyboardType={'number-pad'}
				returnKeyType="next"
				placeholder="2"
				maxLength={2}
			/>
			<TextInput
				style={styles.input}
				keyboardType={'number-pad'}
				returnKeyType="next"
				placeholder="2"
				maxLength={2}
			/>
			<TextInput
				style={styles.input}
				keyboardType={'number-pad'}
				returnKeyType="next"
				placeholder="2"
				maxLength={2}
			/>
			<TextInput
				style={styles.input}
				keyboardType={'number-pad'}
				returnKeyType="next"
				placeholder="2"
				maxLength={2}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: '100%',
		height: '18%',
		marginBottom: '2%',
		borderWidth: 0.5,
		borderColor: '#c3c3c3',
		borderRadius: 3,
	},
	input: {
		marginHorizontal: '1%',
		marginVertical: '1%',
		fontSize: 20,
		textAlign: 'center',
	},
});
