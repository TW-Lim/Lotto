import * as SQLite from 'expo-sqlite';

/* 
취창 레포트 목표와 추진 레이아웃
실물 프린트

	function URLtoDB(url) {
		count[Number] = url.regex()
		no[Array] = url.regex();
		no.push(count);
		ARRtoDB(no); 
	};
	복권을 장 별로 관리할 방법
	function ARRtoDB(no); {
		for (num in no) {
			num

		}
	};

*/

let drwNo;

const lottoDB = SQLite.openDatabase('LottoDB');

const createLottoTBL = () => {
	lottoDB.transaction((tx) => {
		tx.executeSql(
			`CREATE TABLE IF NOT EXISTS "Lotto"(
				"ID" 	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
				"drwNo"	INTEGER NOT NULL,
				"no1"	INTEGER NOT NULL,
				"no2"	INTEGER NOT NULL,
				"no3"	INTEGER NOT NULL,
				"no4"	INTEGER NOT NULL,
				"no5"	INTEGER NOT NULL,
				"no6"	INTEGER NOT NULL,
				"type"	TEXT	NOT NULL
			)`,
			[],
			(tx, result) => {
				console.log('!TBL CREATE!', result);
			},
			(tx, err) => {
				console.log('!SQL ERROR!\n', err);
				return true; // 실패 - 트랜잭션 롤백 시 true 리턴?
			},
		);
	});
};

const createLottoFinalTBL = () => {
	lottoDB.transaction((tx) => {
		tx.executeSql(
			`CREATE TABLE IF NOT EXISTS "Lotto_Final" (
				"drwNo"	INTEGER NOT NULL PRIMARY KEY,
				"drawNoDate"	TEXT NOT NULL,
				"1stWin"	INTEGER NOT NULL,
				"1stWinIndi"	INTEGER NOT NULL,
				"2ndWin"	INTEGER NOT NULL,
				"3rdWin"	INTEGER NOT NULL,
				"no1F"	INTEGER NOT NULL,
				"no2F"	INTEGER NOT NULL,
				"no3F"	INTEGER NOT NULL,
				"no4F"	INTEGER NOT NULL,
				"no5F"	INTEGER NOT NULL,
				"no6F"	INTEGER NOT NULL,
				"noBF"	INTEGER NOT NULL,
			)`,
			[],
			(tx, result) => {
				console.log('TBL CREATE', result);
			},
			(tx, err) => {
				console.log('!SQL ERROR!\n', err);
				return true;
			},
		);
	});
};
const InsertLottolTBL = () => {
	lottoDB.transaction((tx) => {
		tx.executeSql(
			`INSERT INTO Lotto (drwNo, no1, no2, no3, no4, no5, no6) VALUES (
				0, 1, 2, 3, 4, 5, 6
			)`,
			[],
			(tx, result) => {
				console.log('!DATA INSERT!\n', result);
			},
			(tx, err) => {
				console.log('!SQL ERROR!\n', err);
				return true;
			},
		);
	});
};
const InsertLottoFinalTBL = () => {
	lottoDB.transaction((tx) => {
		tx.executeSql(
			`INSERT INTO Lotto_Final VALUES ();
			`,
			[],
			(tx, result) => {
				console.log('!DATA INSERT!\n', result);
			},
			(tx, err) => {
				console.log('!SQL ERROR!\n', err);
				return true;
			},
		);
	});
};
const selectLottoData = () => {
	lottoDB.transaction((tx) => {
		tx.executeSql(
			`SELECT * FROM Lotto
			WHERE drwNo = ${drwNo};`,
			[],
			(tx, result) => {
				console.log('!TBL SELECT!\n', result);
			},
			(tx, err) => {
				console.log('!SQL ERROR!\n', err);
				return true;
			},
		);
	});
};
const selectLottoFinalData = () => {
	lottoDB.transaction((tx) => {
		tx.executeSql(
			`SELECT * FROM Lotto_Final
			WHERE drwNo = ${drwNo};`,
			[],
			(tx, result) => {
				console.log('!TBL SELECT!\n', result);
			},
			(tx, err) => {
				console.log('!SQL ERROR!\n', err);
				return true;
			},
		);
	});
};
const dropLottoTBL = () => {
	lottoDB.transaction((tx) => {
		tx.executeSql(
			`DROP TABLE IF EXISTS Lotto`,
			[],
			(tx, result) => {
				console.log('!TBL DROP!\n', result.rows);
			},
			(tx, err) => {
				console.log('!SQL ERROR!\n', err);
				return true;
			},
		);
	});
};
const dropLottoFinalTBL = () => {
	lottoDB.transaction((tx) => {
		tx.executeSql(
			`DROP TABLE IF EXISTS Lotto`,
			[],
			(tx, result) => {
				console.log('!TBL DROP!\n', result.rows);
			},
			(tx, err) => {
				console.log('!SQL ERROR!\n', err);
				return true;
			},
		);
	});
};

const DBobj = {
	Lotto: {
		create: createLottoTBL,
		insert: InsertLottolTBL,
		select: selectLottoData,
		drop: dropLottoTBL,
	},
	Lotto_Final: {
		create: createLottoFinalTBL,
		insert: InsertLottoFinalTBL,
		select: selectLottoFinalData,
		drop: dropLottoFinalTBL,
	},
};

export default DBobj;
