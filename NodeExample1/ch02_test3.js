// 02-3. 프로세스 객체 간단하게 살펴보기

/**
 * process 객체는 프로그램을 실행했을 때 만들어지는 프로세스 정보를 가진 객체
 *
 * process 객체에 포함되는 속성 및 메소드 예시
 * argv : 프로세스를 실행 할 때 전달되는 파라미터(매개변수) 정보
 * env: 환경변수 정보
 * exit() : 프로세스 종료 메소드
 */


console.dir(process.env);

console.log('OS 환경변수 : %s', process.env['OS']);

process.exit();

// process.exit() 으로 프로세스를 종료하여 실행 X
console.log('User name : %s',process.env['USERNAME']);


