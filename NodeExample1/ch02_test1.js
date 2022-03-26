// 02-2. 콘솔에 로그 뿌리기

/**
 * js는 전역 객체(Global Object | console, process, exports)가 있다
 * 코드 어디든지 사용 가능하다
 * 자바처럼 파라미터 입력이 가능하다
 */


/**
 * console 객체는 콘솔화면에 결과, 속성 등을 출력하기 위해 사용
 *
 * console 객체에 포함되는 메소드 예시
 * dir(object) : js 객체의 속성들을 출력 메소드
 * time(id) : 실행시간을 측정하기 위한 '시작' 시간 기록 메소드
 * timeEnd(id) : 실행시간을 측항하기 위한 '끝' 시간 기록 메소드
 */

console.time('dur_sum');

let result = 0;

for (let i = 0; i < 100; i ++) {
    result += i;
}

console.timeEnd('dur_sum');

console.log('0에서 100합 : %d', result);

/**
 * 전역변수 예시
 * __filename : 샐행한 파일의 이름 출력, 파일 절대경로 출력
 * __dirname : 샐행한 파일이 위치한 폴더 출력, 폴더 절대경로 출력
 */

console.log('__filename : %s', __filename);
console.log('__dirname : %s', __dirname);

/**
 * dir(object) 메소드로 속성 출력 예제
 */

let Person ={
    name : 'Person.name'
    , age : 'Person.age'
};

console.dir(Person);