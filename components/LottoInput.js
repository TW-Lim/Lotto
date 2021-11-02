import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function LottoInput() {
	const TextInputRepeat = [1, 2, 3, 4, 5, 6].map(() => {
		<TextInput
			style={styles.input}
			keyboardType={'number-pad'}
			returnKeyType="next"
			numeric
			onSubmitEditing={() => {
				this.passwordInput.focus();
			}}
			maxLength={2}
		/>;
	});

	return (
		<View style={styles.container}>
			{TextInputRepeat()}

			{/* <picker> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},

	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});
