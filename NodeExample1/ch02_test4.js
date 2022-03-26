// 02-4. 노드에서 모듈 사용하기

/**
 * 독립적인 객체로 분리하여 코드 중복방지, 코드 재사용성 등을 높여 개발 효율성 향상을 위해 사용
 * export.object 로 객체로 분리, require(objName)으로 모듈 불러와서 사용
 * export.object vs module.export
 *  - export.object : 여러개의 변수나 함수를 각각 추가하여 export
 *  - module.export : 하나의 변수, 객체를 직접 할당
 */

let calc = {};

calc.add = (a, b) => {
    return a + b;
}

console.log('모듈 분리 전 calc.add(10, 20) : %d', calc.add(10, 20));
