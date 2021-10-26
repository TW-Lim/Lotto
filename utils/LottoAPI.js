import moment from 'moment';
//eqWinNum(123).then((response) => (YOUR CODE)); <= #*#*아무 파일에서나 이 방식으로 사용 가능*#*#
//API 호출할 때 비동기, 가져온 프로미스를 사용할 때도 비동기로
const reqWinNum = async (drawCount) => {
	const url =
		'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=';
	let lottoData;

	try {
		const data = await fetch(`${url}${drawCount}`);
		lottoData = await data.json();
	} catch (e) {
		console.error(e);
	}

	return lottoData;
};

const newLottoFinal = () => {
	const today = moment();
	const fstLottoFinal = moment('2002/12/07', 'YYYY/MM/DD');
	const newLottoFinal = parseInt(today.diff(fstLottoFinal, 'days') / 7 + 1);
	//토요일 추첨 전에는 안나오게? 하여튼 거시기 그거 고치기
	return newLottoFinal;
};

export { reqWinNum, newLottoFinal };
