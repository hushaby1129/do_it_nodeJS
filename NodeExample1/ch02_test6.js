// 02-4. 노드에서 모듈 사용하기 (외장모듈 사용하기)

/**
 * 기존에 만들어져있는 nconf 모듈을 사용하는 예제
 * nconf : 설정 및 시스템 환경변수 접근 모듈
 * 실행 시 Error: Cannot find module 'nconf' 오류 발생시
 * npm install nconf 실행
 */

let nconf = require('nconf');
nconf.env();

console.log('OS 환경변수 값 : %s', nconf.get('OS'));

