# JS_STUDY

해당 주에 공부한 내용을 추가할 경우!  
해당 Week 폴더를 생성한 후 그 폴더 내에 추가해주세요!!😀

<details>
<summary style="font-size: 25px">💵Stack</summary>

# :star:정의

한 쪽 끝에서만 자료를 넣거나 뺄 수 있는 선형 구조 형식의 자료구조

# :star:특징

<img width="100%" src="https://blog.kakaocdn.net/dn/b1j1EP/btrAcWiIeeQ/PAUT9taBoi7hkhJh4O5160/img.png" />

### 1.후입선출("LIFO"): 가장 최근에 들어온 것이 마지막에 나감

### 2. 데이터의 삽입,삭제가 스택의 상단에서 행함

[출처] https://roi-data.com/entry/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-4-%EC%8A%A4%ED%83%9DStack%EC%9D%B4%EB%9E%80-%EC%97%B0%EC%82%B0-%EA%B5%AC%ED%98%84%EB%B0%A9%EB%B2%95

# :star:추상 자료형

스택의 핵심 연산

```
push(x):새로운 요소를 스택에 삽입
pop():스택에서 맨 위에 있는 요소를 삭제하고 반환
peek():스택의 마지막 요소를 삭제 하지 않고 반환
is_empty():스택이 비어있는지 확인
size():스택에 들어 있는 요소의 개수 반환
```

# :star:구현

```js
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
  is_empty() {
    return this.size() === 0;
  }
  size() {
    return this._arr.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.is_empty(); // 2
stack.is_empty(); // false
stack.peek(); // 2
stack.push(3);
stack.pop(); // 3
```

</details>

<details>
<summary style="font-size: 25px">🎳Queue</summary>

# 큐

한쪽 끝에서만 삽입이 이루어지고, 다른 한쪽 끝에서는 삭제 연산만 이루어지는 유한 순서 리스트이다.

## :star:특징

### 1.선입선출("FIFO"): 가장 최근에 들어온 것이 제일 먼저 삭제된다.

<img width="100%" src="https://velog.velcdn.com/images%2Fjxlhe46%2Fpost%2F782c85d3-a291-4d41-bb62-9267ecdc1f09%2Fimage.png" />

## :star:종류

### - [선형 큐](#1-선형-큐)

### - [원형 큐](#2-원형-큐)

---

## 1. 선형 큐

- 특징

선형 큐에서는 rear가 배열 크기와 같아지면 큐가 꽉 찼다고 판단하며, front와 rear가 동일한 위치를 가리키면 큐가 비었다고 판단한다.

  <img width="100%" src="https://user-images.githubusercontent.com/68090939/139860059-d2beccc3-ff14-4d28-84d0-225a11f022b8.png" />

- 문제점

선형 큐는 원소 삭제 시 앞에서부터 공간이 남게 되는데, 이때 뒤의 원소들을 앞으로 당겨주지 않으면 빈 공간이 많이 남아 있음에도 불구하고 더 이상 원소를 추가하지 못하는 문제가 발생할 수 있다. 그렇다고 삭제 연산이 일어날 때마다 원소들을 한칸씩 앞으로 당기기에는 매우 비효율적이다.

- 코드 구현

출처: https://hokeydokey.tistory.com/31

```js
class queueType {
  constructor(size) {
    this.maxSize = size;
    this.front = -1;
    this.rear = -1;
    this.array = [];
  }
  enque(item) {
    if (this.rear != this.maxSize - 1) {
      this.array[++this.rear] = item;
    } else {
      console.log(new Error("queue is full"));
    }
  }

  deque() {
    if (this.front == this.rear) {
      console.log(new Error("queue is empty"));
    } else {
      ++this.front;
      return this.array[this.front];
    }
  }

  print() {
    let string = "";
    for (let i = 0; i < this.maxSize; i++) {
      if (this.front >= i || i > this.rear) {
        string += " | ";
      } else {
        string += `${this.array[i]} | `;
      }
    }
    console.log(string);
  }
}

let queue = new queueType(5);

queue.enque("10");
queue.enque("23");
queue.enque("32");
queue.print();
queue.deque();
queue.deque();
queue.deque();
queue.print();
```

## 2. 원형 큐

- 특징

원형큐는 선형큐와 달리 원형의 모양을 하고 있으며 이 queue의 공간에 아이템이 꽉 차지 않는 이상 언제든 enque와 deque를 할 수 있다.

  <img width="100%" src="https://user-images.githubusercontent.com/68090939/139867077-dc03fcc2-cac8-4dca-ba5d-f95ad41da386.png" />
  <img width="100%" src="https://user-images.githubusercontent.com/68090939/139866819-d2463717-66c4-4b64-9c3c-dbe5973a5196.png" />

- 코드 구현

출처: https://hokeydokey.tistory.com/37

```js
class CircleQueue {
  constructor(size) {
    this.maxQueueSize = size;
    this.array = [];
    this.front = 0;
    this.rear = 0;
  }

  isEmpyt() {
    return this.front == this.rear;
  }

  isFull() {
    return (this.rear + 1) % this.maxQueueSize == this.front;
  }
  enQueue(item) {
    if (this.isFull()) {
      console.log(new Error("큐가 포화상태입니다."));
    } else {
      this.rear = (this.rear + 1) % this.maxQueueSize;
      this.array[this.rear] = item;
    }
  }

  deQueue() {
    if (this.isEmpyt()) {
      console.log(new Error("큐가 비었습니다."));
    } else {
      this.front = (this.front + 1) % this.maxQueueSize;
      return this.array[this.front];
    }
  }

  print() {
    if (this.isEmpyt()) {
      console.log(new Error("큐가 비었습니다."));
    }
    let string = "";
    let i = this.front;
    do {
      i = (i + 1) % this.maxQueueSize;
      string += this.array[i] + "|";
      if (i == this.rear) {
        console.log(string);
        break;
      }
    } while (i != this.front);
  }
}

let queue = new CircleQueue(5);

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.deQueue();
queue.enQueue(5);

queue.print();
```

</details>
<details>
<summary style="font-size: 25px">🔛Deque</summary>

# :star:정의

double-ended queue의 줄임말로서 큐의 전단(front)과 후단(rear)에서 모두 삽입과 삭제가 가능한 큐를 의미한다.

# :star:특징

### 1. 삽입 삭제가 양방향에서 자유롭다. stack과 queue를 합쳐 놓은 것과 비슷함.

<img width="100%" src="https://blog.kakaocdn.net/dn/m8ZLL/btq2MvSwR3H/bO8V57NsMOxzJ0uWtkwAB0/img.png" />

# :star:추상 자료형

스택의 핵심 연산

```
add_front(e): 주어진 요소e를 덱의 맨 앞에 추가한다.
delete_front(): 전단 요소를 삭제하고 반환한다.
add_rear(e): 주어진 요소도 e를 덱의 맨 뒤에 추가한다.
delete_rear(): 후단 요소를 삭제하고 반환한다.
get_front(): 전단 요소를 삭제하지 않고 반환한다.
get_rear(): 후단 요소를 삭제하지 않고 반환한다.
is_empty(): 공백 상태이면 True를 아니면 False를 반환한다.
is_full(): 덱이 가득 차 있으면 True를 아니면 False를 반환한다.
size(): 덱 내의 모든 요소들의 개수를 반환한다.
```

# :star:구현

```js
class Deque {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }
  push_front(item) {
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[this.head] = item;
    this.tail++;
  }
  push_back(item) {
    this.arr[this.tail++] = item;
  }
  pop_front() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[this.head++];
      return result;
    }
  }
  pop_back() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[--this.tail];
      return result;
    }
  }
}

let deque = new Deque();
deque.push_front(1); // arr: [1] head: 0 tail: 1
deque.push_front(2); // arr: [2, 1] head: 0 tail: 2
console.log(deque.pop_front()); // 2, head: 1 tail: 2
deque.push_front(3); // arr: [2, 3, 1] head: 1 tail: 3
console.log(deque.pop_front()); // 3, head: 2 tail: 3
console.log(deque.pop_front()); // 1, head: 3 tail: 3
console.log(deque.pop_front()); // null
deque.push_back(5); // arr: [5] head: 3 tail: 4
// 실제 배열 출력은 arr: [2, 3, 1, 5] 이지만 배열 요소 2, 3, 1은 pop_front()를 하였기에 shift()가 된 요소로 생각할 수 있다.
console.log(deque.pop_back()); // 5, head: 3 tail: 3
console.log(deque.pop_back()); // null
deque.push_back(6); // arr: [6] head: 3 tail: 4
// 실제 배열 출력은 arr: [2, 3, 1, 6] 이지만 배열 요소 2, 3, 1 은 pop_front()를 하였기에 shift()가 된 요소로, 배열 요소 5는 pop_back()을 실행해서 pop()가 된 요소로 생각할 수 있다.
deque.push_front(9); // arr: [9, 6] head: 3 tail: 5
```

[출처] https://soft.plusblog.co.kr/24

</details>
<details>
<summary style="font-size: 25px">🌻LinkedList (연결리스트)</summary>

# 연결리스트

각 노드가 데이터와 포인터를 가지고 한 줄로 연결되어 있는 자료 구조를 말한다.

## :star:연결리스트 종류

### - [단방향 연결리스트](#1-단방향-연결리스트)

### - [양방향 연결리스트](#2-양방향-연결리스트)

## :star:연결리스트와 배열의 차이점

### - [연결리스트와 배열의 차이점](#3-연결리스트와-배열의-차이점)

## :star:연결리스트 코드 구현

### - [연결리스트 코드](#4-연결리스트-코드-구현)

---

## 1. 단방향 연결리스트

한 방향으로만 이동할 수 있는 리스트를 말한다.

- 단방향 연결리스트 형태
  <img width="100%" src="https://user-images.githubusercontent.com/81006438/222418142-e7587a06-46d7-4fe7-9383-cc8df25fdd2b.png" />

  한 노드에 데이터와 포인터가 있는데 이 포인터는 다음 값의 주소이다.

- 단방향 연결리스트에서 데이터 추가
  <img width="100%" src="https://user-images.githubusercontent.com/81006438/222418144-0768eb7e-948b-4b46-b2ec-803c78daf8cb.png" />

  새로 추가하려는 위치에서 왼쪽에 있는 노드가 가리키는 주소값을 바꾼다.
  새로 추가하는 노드에서도 가리키는 주소값을 다음 노드로 설정한다.

- 단방향 연결리스트에서 데이터 삭제
  <img width="100%" src="https://user-images.githubusercontent.com/81006438/222418130-9dec3f67-9603-4aae-8df7-861ca31f1229.png" />

  삭제하려는 노드와의 양 옆 연결을 제거한다.
  이전 노드가 가리키는 주소가 삭제할 노드를 가리키게 하지 않고 그 다음 노드를 가리키도록 바꿔준다.

## 2. 양방향 연결리스트

양 방향으로 이동할 수 있는 리스트를 말한다.

- 양방향 연결리스트 형태

```

한 노드에 데이터와 포인터 2개가 있다.
포인터 한 개는 다음 값의 주소를 가지고 있고 다른 포인터 한 개는 이전 값의 주소를 가지고 있다.

```

- 양방향 연결리스트에서 데이터 추가

```

단방향 연결리스트에서의 데이터 추가 방법과 동일하다.
다만 이전 값을 가리키는 주소가 한 개 더 있기 때문에 이 주소도 추가하려는 데이터를 거치도록 바꿔준다.

```

- 양방향 연결리스트에서 데이터 삭제

```

단방향 연결리스트에서의 데이터 삭제 방법과 동일하다.
다만 이전 값을 가리키는 주소가 한 개 더 있기 때문에 이 주소도 추가하려는 데이터를 거치도록 바꿔준다.

```

## 3. 연결리스트와 배열의 차이점

> :+1: `데이터 찾는 속도`: 배열 > 연결리스트

```

연결리스트에서 데이터를 찾기 위해서는 연결 순서대로 돌아다녀야하기 때문에 배열보다 찾는 속도가 느리다.

```

> :+1: `데이터 삽입/삭제 속도`: 연결리스트 > 배열

```

연결리스트에서는 노드를 하나 새로 생성하고 추가할 자리의 양 옆 노드의 주소만 바꿔주면 되기 때문에 빠르다.
배열에서는 데이터를 중간에 삽입/삭제할 때 배열 전체가 이동하기 때문에 느리다.

```

## 4. 연결리스트 코드 구현

출처: https://overcome-the-limits.tistory.com/16

```js
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  append(newElement) {
    let newNode = new Node(newElement); //새로운 노드 생성
    let current = this.head; // 시작 노드
    while (current.next != null) {
      // 맨 끝 노드 찾기
      current = current.next;
    }
    current.next = newNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement); //새로운 노드 생성
    let current = this.find(item); // 삽입할 위치의 노드 찾기
    newNode.next = current.next; // 찾은 노드가 가리키는 노드를 새로은 노드가 가리키기
    current.next = newNode; // 찾은 노드는 이제부터 새로운 노드를 가리키도록 하기
  }

  remove(item) {
    let preNode = this.findPrevious(item); // 삭제할 노드를 가리키는 노드 찾기
    preNode.next = preNode.next.next; // 삭제할 노드 다음 노드를 가리키도록 하기
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findPrevious(item) {
    let currNode = this.head;
    while (currNode.next != null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  toString() {
    let array = [];
    let currNode = this.head;
    while (currNode.next !== null) {
      array.push(currNode.next.element);
      currNode = currNode.next;
    }
    return array;
  }
}

let linkedList = new LinkedList();
linkedList.insert("A", "head");
linkedList.insert("B", "A");
linkedList.insert("C", "B");
linkedList.remove("B");
linkedList.append("D");
linkedList.append("E");

console.log(linkedList.toString());
```

</details>
<details>
<summary style="font-size: 25px">🎭DFS/BFS</summary>

# DFS/BFS

그래프를 탐색하는 방법
-> 하나의 노드로부터 시작하여 차례대로 모든 노드들을 한 번씩 방문하는 것

## :star:DFS/BFS 정의

### - [DFS(깊이 우선 탐색)](#1-DFS(깊이 우선 탐색))

### - [BFS(너비 우선 탐색)](#2-BFS(너비 우선 탐색))

## :star:DFS/BFS의 차이점

### - [DFS/BFS의 차이점](#3-DFS/BFS의-차이점)

## :star:DFS/BFS 코드 구현

### - [DFS/BFS 코드](#4-DFS/BFS-코드)

---

## 1. DFS(깊이 우선 탐색)

  <img width="100%" src="https://velog.velcdn.com/images%2Flucky-korma%2Fpost%2F30737a15-9adf-49a6-96a0-98c211cab1cc%2FR1280x0.gif" />

루트 노드(혹은 다른 임의의 노드)에서 시작해서 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방식을 말합니다.

> 특징
>
> > 모든 노드를 방문할때 사용
> > 깊이 우선 탐색이 너비 우선 탐색보다 좀 더 간단함
> > 검색 속도 자체는 너비 우선 탐색에 비해 느림

## 2. BFS(너비 우선 탐색)

  <img width="100%" src="https://velog.velcdn.com/images%2Flucky-korma%2Fpost%2F2112183b-bfcd-427e-8072-c9dc983180ba%2FR1280x0-2.gif" />

루트 노드(혹은 다른 임의의 노드)에서 시작해서 인접한 노드를 먼저 탐색하는 방법으로,
시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법입니다.

> 특징
>
> > 두 노드 사이의 최단 경로를 찾고 싶을 때 사용

## 3. DFS/BFS의 차이점

  <img width="100%" src="https://velog.velcdn.com/images%2Flucky-korma%2Fpost%2Fe2ef7ac3-14e6-42e7-a768-224c5f773e29%2FR1280x0-3.gif" />

1. DFS(깊이 우선 탐색)
   - 현재 정점에서 갈 수 있는 점들까지 들어가면서 탐색
   - 스택 또는 재귀함수로 구현
2. BFS(너비 우선 탐색)
   - 현재 정점엣 연결된 가까운 점들부터 탐색
   - 큐를 이용해서 구현

> 시간복잡도 차이(O(N))
>
> > 그래프의 모든 정점을 방문하는 것이 주요한 문제 -> DFS=BFS
> > 경로에 제한이 있는 문제 -> DFS>BFS(BFS는 경로의 특징을 가지지 못한다)
> > 최단거리를 구해야 하는 문제 -> BFS>DFS
> > 검색 대상 그래프가 엄청 큰 문제 -> DFS>BFS

## 4. DFS/BFS 코드

1. DFS코드

```js
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const DFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

console.log(DFS(graph, "A"));
// ["A", "B", "D", "E", "F", "C", "G", "H", "I", "J"]
```

2. BFS코드

```JS
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

const BFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

console.log(BFS(graph, "A"));
// ["A", "B", "C", "D", "G", "H", "I", "E", "F", "J"]
```

</details>
