function ReqWinNum(drawCount) {
	const url =
		'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=';

	/* 
	1. home에서 console.log, fetch를 변수에 할당 후 then(data)에서 리턴 - Promise._W에 데이터 수신 성공
	1-1. home에서 console.log, then(data)에서 return 없이 data 호출 - Promise._W가 undefined
	1-2. home에서 console.log 삭제, then(data)에서 consol.log(data) - 로또 Object 바로 출력
	2. async await를 사용해서 consol.log - [Function Callee] 출력
	3. 그 외 기억 안나는 실패사례들

	여기서 log하지 않고 외부 파일에서 로또정보객체만 사용하려면?
	*/
	let num = null;
	fetch(`${url}${drawCount}`)
		.then((response) => response.json())
		.then((data) => {
			num = data;
			console.log(num, 'fetch');
		});
	setTimeout(() => console.log(num, 'LottoAPI'), 5000); //기다려야 정상적으로 num이 출력
	return num; //함수 내에선 API 호출의 지연을 기다려주지만 외부파일에선 기다리지 않고 사용함
}

export default ReqWinNum;
