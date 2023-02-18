class Stack {
    constructor() {
        this.stack = [];
        this.count = 0;
    }
    //Добавить новый элемент
    push(value) {
        this.stack[this.count] = value;
        this.count++;
    }
    //Удалить верхний элемент и вернуть его
    pop() {    
        if (this.count === 0) return undefined;
        this.count--;
        let result = this.stack[this.count];
        delete this.stack[this.count];
        return result;
    }
    //Вернуть верхний элемент
    peek() {
        return this.stack[this.count - 1];
    }
    //Вернуть количество элементов в стеке
    size() {
        return this.count;
    }
}

export default Stack