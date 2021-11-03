/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
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
		type: 'n',
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
			<ScrollView style={styles.main}>
				<Text>1번째</Text>
				<LottoInput />
				<Text>2번째</Text>
				<LottoInput />
				<Text>3번째</Text>
				<LottoInput />
				<Text>4번째</Text>
				<LottoInput />
				<Text>5번째</Text>
				<LottoInput />
			</ScrollView>

			<TouchableOpacity
				style={styles.check}
				onPress={goToCheck}
				title="체크"
			>
				<Text style={styles.checkText}>체크</Text>
			</TouchableOpacity>
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
		display: '',
		flexDirection: 'column',
		backgroundColor: 'white',
		width: '90%',
		marginTop: '4%',
		marginHorizontal: '4%',
	},

	check: {
		width: '100%',
		height: '10%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'green',
	},
	checkText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	},
});

export default Keyboard;
