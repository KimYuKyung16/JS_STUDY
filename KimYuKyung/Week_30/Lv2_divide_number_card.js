// 유클리드 호제법: 두 자연수 사이의 최대공약수를 구하는 알고리즘
// 어떤 자연수 a,b가 있을 때, 두 수의 최대공약수는 a를 b로 나눈 나머지와 b의 최대공약수와 같다. (조건: a>b)

function solution(arrayA, arrayB) {
  let a = getDvsr(arrayA, arrayB);
  let b = getDvsr(arrayB, arrayA);
  return Math.max(a,b);
}

function getDvsr(arrayA, arrayB){
  let answer = 0; // arrayA의 최대 공약수
  // 어떤 자연수 a,b가 있을 때, 두 수의 최대공약수는 a를 b로 나눈 나머지와 b의 최대공약수와 같다. (조건: a>b)
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); // 최대 공약수를 구하는 함수
  arrayA.forEach(val => answer = gcd(answer, val)); // arrayA의 최대 공약수 구하기
  if (arrayB.some(val => val%answer === 0)) return 0; // arrayB 배열의 값이 하나라도 arrayA의 최대 공약수로 나누어질 경우 조건 만족X
  return answer;
}