import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import reqWinNum from '../utils/LottoAPI';
import Number from './Number';

let drwNo, drwNoDate, firstAccumamnt, No1, No2, No3, No4, No5, No6, NoB;

// then으로 실행했는데도 변수 초기화보다 컴포넌트 렌더링이 머저 실행됨
reqWinNum(984).then((response) => {
	drwNoDate = response.drwNoDate;
	firstAccumamnt = response.firstAccumamnt
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	drwNo = response.drwNo;
	No1 = response.drwtNo1;
	No2 = response.drwtNo2;
	No3 = response.drwtNo3;
	No4 = response.drwtNo4;
	No5 = response.drwtNo5;
	No6 = response.drwtNo6;
	NoB = response.bnusNo;
});

export default function DrawCount() {
	return (
		<View style={styles.main}>
			<View style={styles.item1}>
				<Text style={styles.mainText}>{drwNo}회</Text>
				<Text>{drwNoDate}</Text>
			</View>

			<View style={styles.item2}>
				<View style={styles.number}>
					<Number>{No1}</Number>
					<Number>{No2}</Number>
					<Number>{No3}</Number>
					<Number>{No4}</Number>
					<Number>{No5}</Number>
					<Number>{No6}</Number>
					<Text> + </Text>
					<Number>{NoB}</Number>
				</View>

				<View style={styles.price}>
					<Text style={styles.Text}>1등 상금 </Text>
					<View style={{ padding: '3%' }}></View>
					<Text style={styles.Text}>{firstAccumamnt}원</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},

	item1: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		marginLeft: '5%',
		marginBottom: '7%',
		marginTop: '18%',
		width: '90%',
	},

	item2: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 5,
	},

	number: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		width: '90%',
		padding: '2%',
		borderBottomWidth: 1,
		borderColor: '#c3c3c3',
	},

	price: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		width: '90%',
		marginBottom: '3%',
	},

	mainText: {
		fontSize: 35,
		fontWeight: 'bold',
	},

	Cnumber: {
		fontSize: 18,
	},

	Text: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
