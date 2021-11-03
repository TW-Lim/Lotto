/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NumberCheck = ({ route, navigation }) => {
	const lottoInputed = route.params;
	/* 	const [lottoState, setLottoState] = useState({
		L1: {
			drwNo: 0,
			No1: 0,
			No2: 0,
			No3: 0,
			No4: 0,
			No5: 0,
			No6: 0,
			type: '미',
		},
		L2: {
			drwNo: 0,
			No1: 0,
			No2: 0,
			No3: 0,
			No4: 0,
			No5: 0,
			No6: 0,
			type: '미',
		},
		L3: {
			drwNo: 0,
			No1: 0,
			No2: 0,
			No3: 0,
			No4: 0,
			No5: 0,
			No6: 0,
			type: '미',
		},
		L4: {
			drwNo: 0,
			No1: 0,
			No2: 0,
			No3: 0,
			No4: 0,
			No5: 0,
			No6: 0,
			type: '미',
		},
		L5: {
			drwNo: 0,
			No1: 0,
			No2: 0,
			No3: 0,
			No4: 0,
			No5: 0,
			No6: 0,
			type: '미',
		},
	});
	const { L1, L2, L3, L4, L5 } = lottoState;

	const lottoInputedRepeat = () => {
		for (let i = 0; i <= 5; i++) {
			const lottoArr = lottoInputed[i];
			const typeReg = /\D/;
			const numberReg = /\d{2}/g;

			let type = lottoArr.match(typeReg);
			if (type[0] === 'n') {
				return false;
			} else {
				switch (type) {
					case 'q':
						type = '수동';
						break;
					//...
				}
			}
			const number = lottoArr.match(numberReg);

			setLottoState({
				...lottoState,
				//100% 오류남 문자+숫자=문자로 할 것
				['L' + (i + 1)]: {
					drwNo: lottoInputed[0],
					No1: number[0],
					No2: number[1],
					No3: number[2],
					No4: number[3],
					No5: number[4],
					No6: number[5],
					type: type,
				},
			});
		}
	};
 */

	lottoInputed;

	const goToComp = () => {
		navigation.navigate('Comp');
	};

	const goBack = () => {
		navigation.navigate('QRNavigator');
	};

	return (
		<View style={styles.container}>
			<View style={styles.item1}>
				<Text>입력하신 번호를 확인해주세요.</Text>
				<View>
					<Text>{lottoInputed[0]}</Text>
					<Text>{lottoInputed[1]}</Text>
					<Text>{lottoInputed[2]}</Text>
					<Text>{lottoInputed[3]}</Text>
					<Text>{lottoInputed[4]}</Text>
					<Text>{lottoInputed[5]}</Text>
				</View>
			</View>
			<View style={styles.item2}>
				<View style={styles.buttonView}>
					<TouchableOpacity style={styles.button1} onPress={goToComp}>
						<Text>네</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonView}>
					<TouchableOpacity
						style={styles.button2}
						onPress={() => {
							goBack();
						}}
					>
						<Text>아니요</Text>
					</TouchableOpacity>
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
	item1: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		margin: '3%',
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5,
	},
	item2: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		margin: '2%',
		/* borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 5, */
	},

	buttonView: {
		flex: 1,
		backgroundColor: 'white',
		width: '80%',
		height: '80%',
		marginLeft: '2%',
	},

	button1: {
		width: 150,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
		/* backgroundColor: 'gray', */
		borderRadius: 5,
		borderColor: 'blue',
		borderWidth: 2,
	},
	button2: {
		width: 150,
		height: 150,
		alignItems: 'center',
		justifyContent: 'center',
		/* backgroundColor: 'gray', */
		borderRadius: 5,
		borderColor: 'red',
		borderWidth: 2,
	},
});

export default NumberCheck;
