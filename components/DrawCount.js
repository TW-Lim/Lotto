import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { reqWinNum } from '../utils/LottoAPI';
import Number from './Number';
import PropTypes from 'prop-types';
/*  
이 컴포넌트는 return의 내용을 렌더링 한 후 reqWinNum이 실행되었다(추측)
컴포넌트 함수 내의 코드의 실행, 렌더링 순서는?

Number에 손대지 않았는데 Number의 borderRadius가 적용되지 않는 문제 발생 -> Number style에 color가 생기면서 충돌이 발생한것이 원인. 해결완료.
 */
export default function DrawCount(props) {
	// useState로 lottoWin 객체 STate 생성
	const [lottoWin, setLottoWin] = useState({
		drwNo: 0,
		drwNoDate: '로드 중',
		firstWinamnt: 0,
		No1: 0,
		No2: 0,
		No3: 0,
		No4: 0,
		No5: 0,
		No6: 0,
		NoB: 0,
	});

	// lottoWin State를 상수로 만들어서(spread operator) return에서 호출할 수 있게
	const {
		drwNo,
		drwNoDate,
		firstWinamnt,
		No1,
		No2,
		No3,
		No4,
		No5,
		No6,
		NoB,
	} = lottoWin;

	const count = props.count;

	// props.count로 회차 번호 받아 setState로 지정
	const set = async () => {
		const response = await reqWinNum(props.count);

		setLottoWin({
			...lottoWin,
			['drwNo']: response.drwNo,
			['drwNoDate']: response.drwNoDate,
			['firstWinamnt']: response.firstWinamnt
				// 입력창에 0이나 공백이 들어왔을 때 toString 불가능 에러
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			['No1']: response.drwtNo1,
			['No2']: response.drwtNo2,
			['No3']: response.drwtNo3,
			['No4']: response.drwtNo4,
			['No5']: response.drwtNo5,
			['No6']: response.drwtNo6,
			['NoB']: response.bnusNo,
		});
	};

	useEffect(() => {
		set();
	}, []);

	//컴포넌트의 state가 변해야 리-렌더링 됨
	//근데 count는 state가 아닌데?
	//왜 이게 없으면 리렌더링 되지 않는지 다음에 다시 알아보기
	useEffect(() => {
		set();
	}, [count]);

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
					<Text style={styles.Text}>
						{firstWinamnt == 0
							? '-1등 당첨자 없음-'
							: firstWinamnt + '원'}
					</Text>
				</View>
			</View>
		</View>
	);
}

DrawCount.propTypes = {
	count: PropTypes.number.isRequired,
};

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
