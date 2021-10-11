export const reqWinNum = async (drawCount) => {
	const url =
		'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=';
	let json;
	/* 
	1. home에서 console.log, fetch를 변수에 할당 후 then(data)에서 리턴 - Promise._W에 데이터 수신 성공
	1-1. home에서 console.log, then(data)에서 return 없이 data 호출 - Promise._W가 undefined
	1-2. home에서 console.log 삭제, then(data)에서 consol.log(data) - 로또 Object 바로 출력
	2. async await를 사용해서 consol.log - [Function Callee] 출력
	3. 그 외 기억 안나는 실패사례들

	여기서 log하지 않고 외부 파일에서 로또정보객체만 사용하려면?
	*/
	try {
		const response = await fetch(`${url}${drawCount}`);
		json = await response.json();
		jsonObj = await JSON.
	} catch (e) {
		console.error(e);
	}

	return json;
};
