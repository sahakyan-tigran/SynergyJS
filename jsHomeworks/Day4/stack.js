function Stack(){
    this.arr = [];

    this.getArr = function (){
        return this.arr;
    }
    this.setArr = function (arr1){
        this.arr = JSON.parse(JSON.stringify(arr1));
    }
    Stack.prototype.push = function (element){
        return this.arr.push(element);
    }
    Stack.prototype.pop = function (){
        return this.arr.pop();
    }
    Stack.prototype.top = function (){
        return this.arr[this.arr.length - 1];
    }
    Stack.prototype.size = function (){
        return this.arr.length;
    }
    Stack.prototype.isEmpty = function (){
        return this.arr.length === 0;
    }
}
