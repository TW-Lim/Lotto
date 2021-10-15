import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import reqWinNum from '../utils/LottoAPI';

let drwNo,
	drwNoDate,
	firstAccumamnt,
	drwtNo1,
	drwtNo2,
	drwtNo3,
	drwtNo4,
	drwtNo5,
	drwtNo6,
	bnusNo;

reqWinNum(984).then(
	(response) => (
		(drwNoDate = response.drwNoDate),
		((firstAccumamnt = response.firstAccumamnt
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',')),
		(drwNo = response.drwNo),
		(drwtNo1 = response.drwtNo1),
		(drwtNo2 = response.drwtNo2),
		(drwtNo3 = response.drwtNo3),
		(drwtNo4 = response.drwtNo4),
		(drwtNo5 = response.drwtNo5),
		(drwtNo6 = response.drwtNo6),
		(bnusNo = response.bnusNo))
	),
);

export default function DrawCount() {
	return (
		<View style={styles.main}>
			<View style={styles.item1}>
				<Text style={styles.mainText}>{drwNo}회</Text>
				<Text>{drwNoDate}</Text>
			</View>
			<View style={styles.item2}>
				<View style={styles.number}>
					<View style={styles.circle}>
						<Text>{drwtNo1}</Text>
					</View>

					<View style={styles.circle}>
						<Text>{drwtNo2}</Text>
					</View>

					<View style={styles.circle}>
						<Text>{drwtNo3}</Text>
					</View>

					<View style={styles.circle}>
						<Text>{drwtNo4}</Text>
					</View>

					<View style={styles.circle}>
						<Text>{drwtNo5}</Text>
					</View>

					<View style={styles.circle}>
						<Text>{drwtNo6}</Text>
					</View>

					<Text>+</Text>

					<View style={styles.circle}>
						<Text>{bnusNo}</Text>
					</View>
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

	circle: {
		borderRadius: 50,
		width: 33,
		height: 33,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ede0f0',
		margin: '1%',
	},

	Cnumber: {
		fontSize: 18,
	},

	Text: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
