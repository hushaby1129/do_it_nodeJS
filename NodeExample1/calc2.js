// 02-4. 노드에서 모듈 사용하기 (module.exports로 메인 파일에 더하기 함수 호출하기)

/**
 * module.exports를 사용하여 모듈화 예제
 */

let calc = {};

calc.add = (a, b) => {
    return a + b;
}

module.exports = calc;