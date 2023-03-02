# JS_STUDY

해당 주에 공부한 내용을 추가할 경우!  
해당 Week 폴더를 생성한 후 그 폴더 내에 추가해주세요!!😀

<details>
<summary style="font-size: 25px">Stack</summary>
 <h1>test</h1>
<pre><code>
    console.log("test");
    console.log("테스트");
  </code></pre>
</details>

<details>
<summary style="font-size: 25px">Queue</summary>

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

  ***
  ## 1. 단방향 연결리스트
  한 방향으로만 이동할 수 있는 리스트를 말한다.

  * 단방향 연결리스트 형태
  <img width="100%" src="https://user-images.githubusercontent.com/81006438/222418142-e7587a06-46d7-4fe7-9383-cc8df25fdd2b.png" />
    > 한 노드에 데이터와 포인터가 있는데 이 포인터는 다음 값의 주소이다.

  * 단방향 연결리스트에서 데이터 추가
  <img width="100%" src="https://user-images.githubusercontent.com/81006438/222418144-0768eb7e-948b-4b46-b2ec-803c78daf8cb.png" />
    > 새로 추가하려는 위치에서 왼쪽에 있는 노드가 가리키는 주소값을 바꾼다.  
    새로 추가하는 노드에서도 가리키는 주소값을 다음 노드로 설정한다.

  * 단방향 연결리스트에서 데이터 삭제
  <img width="100%" src="https://user-images.githubusercontent.com/81006438/222418130-9dec3f67-9603-4aae-8df7-861ca31f1229.png" />
    > 삭제하려는 노드와의 양 옆 연결을 제거한다.  
    이전 노드가 가리키는 주소가 삭제할 노드를 가리키게 하지 않고 그 다음 노드를 가리키도록 바꿔준다. 

  ## 2. 양방향 연결리스트
  양 방향으로 이동할 수 있는 리스트를 말한다.

  * 양방향 연결리스트 형태
    > 한 노드에 데이터와 포인터 2개가 있다.  
    포인터 한 개는 다음 값의 주소를 가지고 있고 다른 포인터 한 개는 이전 값의 주소를 가지고 있다.

  * 양방향 연결리스트에서 데이터 추가
    > 단방향 연결리스트에서의 데이터 추가 방법과 동일하다.  
    다만 이전 값을 가리키는 주소가 한 개 더 있기 때문에 이 주소도 추가하려는 데이터를 거치도록 바꿔준다.

  * 양방향 연결리스트에서 데이터 삭제
    > 단방향 연결리스트에서의 데이터 삭제 방법과 동일하다.  
    다만 이전 값을 가리키는 주소가 한 개 더 있기 때문에 이 주소도 추가하려는 데이터를 거치도록 바꿔준다.

## 3. 연결리스트와 배열의 차이점
> :+1: 데이터 찾는 속도: 배열 > 연결리스트  

연결리스트에서 데이터를 찾기 위해서는 연결 순서대로 돌아다녀야하기 때문에 배열보다 찾는 속도가 느리다.

> :+1: 데이터 삽입/삭제 속도: 연결리스트 > 배열

연결리스트에서는 노드를 하나 새로 생성하고 추가할 자리의 양 옆 노드의 주소만 바꿔주면 되기 때문에 빠르다.
배열에서는 데이터를 중간에 삽입/삭제할 때 배열 전체가 이동하기 때문에 느리다. 

## 4. 연결리스트 코드 구현
출처: https://overcome-the-limits.tistory.com/16
```js
class Node {
  constructor(element){
    this.element = element;
    this.next = null;
  }
}
 
class LinkedList {
  constructor(){
    this.head = new Node("head");
  }
    
    append(newElement) {
    	let newNode = new Node(newElement); //새로운 노드 생성
    	let current = this.head; // 시작 노드
    	while(current.next != null) { // 맨 끝 노드 찾기
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
    
    find(item){
      let currNode = this.head;
      while(currNode.element !== item) {
        currNode = currNode.next;
      }
      return currNode;
    }
    
    findPrevious(item) {
    	let currNode = this.head;
    	while(currNode.next != null && currNode.next.element !== item) {
        	currNode = currNode.next;
    }
    	return currNode;
	}
            
    toString() {
    	let array = [];
    	let currNode = this.head;
    	while(currNode.next !== null){
        	array.push(currNode.next.element);
        	currNode = currNode.next;
    }
    	return array
	}
}

let linkedList = new LinkedList();
linkedList.insert("A", "head");
linkedList.insert("B", "A");
linkedList.insert("C", "B");
linkedList.remove("B");
linkedList.append("D");
linkedList.append("E");

console.log(linkedList.toString())
```

</details>

