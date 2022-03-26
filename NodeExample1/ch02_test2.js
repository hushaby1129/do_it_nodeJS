// 02-3. 프로세스 객체 간단하게 살펴보기

/**
 * process 객체는 프로그램을 실행했을 때 만들어지는 프로세스 정보를 가진 객체
 *
 * process 객체에 포함되는 속성 및 메소드 예시
 * argv : 프로세스를 실행 할 때 전달되는 파라미터(매개변수) 정보
 * env: 환경변수 정보
 * exit() : 프로세스 종료 메소드
 */

console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

/*
    node 실행시 파라미터 입력시 해당 파라미터 출력
    node 실행시 파라미터 미입력시 node.exe 절대경로와 현재 실행한 js 파일 절대경로 출력
    테스트 실행 명령어 : node .\ch02_test2.js __port 7002
 */

if (process.argv.length > 2) {
    console.log('3번째 파라미터 값 : %s', process.argv[2]);
}

process.argv.forEach((item, index) => {
    console.log('process argv index : ' + index + ' // process argv item : ' + item);
});


