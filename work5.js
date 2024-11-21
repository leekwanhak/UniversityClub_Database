// MySQL module 연결
const mysql = require("mysql");

// 데이터베이스 연결 생성
const connection = mysql.createConnection({
  host: "192.168.56.101",
  user: "khlee",
  password: "lkh071550",
  database: "madang",
  port: 4567,
});

// 데이터베이스 연결
connection.connect((err) => {
  if (err) {
    console.error("데이터베이스에 연결하는 동안 오류가 발생했습니다: ", err);
    return;
  }
  console.log("MySQL 데이터베이스에 성공적으로 연결되었습니다");

  // 1. 테이블에서 데이터 삽입
  const insertBookQuery = ` INSERT  INTO Book(bookid, bookname, publisher, price) VALUES (20, '스포츠 의학', '한솔의학서적', 90000);`;
  connection.query(insertBookQuery, (err, results) => {
    if (err) {
      console.error("데이터 삽입 중 오류가 발생했습니다: ", err);
      return;
    }
    console.log("데이터가 성공적으로 삽입되었습니다");
  });

  // 2. 테이블에서 데이터 삭제
  const deleteBookQuery = `DELETE FROM Orders WHERE bookid = '10';`;
  connection.query(deleteBookQuery, (err, results) => {
    if (err) {
      console.error("데이터 삭제 중 오류가 발생했습니다:  ", err);
      return;
    }
    console.log("데이터가 성공적으로 삭제되었습니다");
  });

  // 3. 데이터 검색
  const selectBooksQuery = ` SELECT * FROM Book WHERE publisher NOT IN ('굿스포츠', '대한미디어');`;
  connection.query(selectBooksQuery, (err, results) => {
    if (err) {
      console.error("데이터 검색 중 오류가 발생했습니다: ", err);
      return;
    }
    console.log("Results:", results);
  });

  // 데이터베이스 연결 종료
  connection.end((err) => {
    if (err) {
      console.error("연결을 끊는 과정에서 오류가 발생했습니다: ", err);
      return;
    }
    console.log("정상적으로 연결이 끊어졌습니다");
  });
});
