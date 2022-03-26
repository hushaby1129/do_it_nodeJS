// 02-4. 노드에서 모듈 사용하기

/**
 * exports.object, module.exports를 사용하여 모듈 사용하는 예제
 * require를 사용하여 객체를 불러와 변수에 할당하여 사용 예제
 */

let calc = require('./calc');

console.log('export.object를 사용하여 모듈 분리 후 calc.add(10, 20) : %d', calc.add(10, 20));

let calc2 = require('./calc2');

console.log('module.exports를 사용하여 모듈 분리 후 calc.add(1, 2) : %d', calc2.add(1, 2));