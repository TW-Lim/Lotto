/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import LottoInput from '../../components/LottoInput';

//모양 정돈,
//Button onPress로 setData한 뒤 data route
//useRef 사용해서 focus 전환
//textInput 아닌 다른 컴포넌트로 로또 방식 체크
//textInput에게 name 부여 방법
const Keyboard = ({ navigation }) => {
	const [data, setData] = useState({
		drwNo: 0,
		No1: 0,
		No2: 0,
		No3: 0,
		No4: 0,
		No5: 0,
		No6: 0,
		type: '미',
	});

	const { drwNo, No1, No2, No3, No4, No5, No6, type } = data;

	const goToCheck = () => {
		setData({
			...data,
			['drwNo']: drwNo,
			['No1']: No1,
			['No2']: No2,
			['No3']: No3,
			['No4']: No4,
			['No5']: No5,
			['No6']: No6,
			['type']: type,
		});
		navigation.push('Check', {
			data: {
				drwNo: drwNo,
				No1: No1,
				No2: No2,
				No3: No3,
				No4: No4,
				No5: No5,
				No6: No6,
				type: type,
			},
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<View style={styles.radio}>
					<Text>자동 수동 들어갈 자리 입니다.</Text>
				</View>

				<View style={styles.item2}>
					<TextInput
						keyboardType={'number-pad'}
						returnKeyType="next"
						numeric
						maxLength={4}
					/>
					<LottoInput />
					<LottoInput />
					<LottoInput />
					<LottoInput />
					<LottoInput />
					<Button onPress={goToCheck} title="체크"></Button>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},

	main: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		margin: '4%',
	},

	radio: {
		flex: 0.6,
		justifyContent: 'center',
		margin: '2%',
		width: '100%',
		backgroundColor: 'gray',
	},

	item2: {
		flex: 6,
		justifyContent: 'center',
		alignItems: 'center',
		margin: '2%',
		width: '100%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},
});

export default Keyboard;
