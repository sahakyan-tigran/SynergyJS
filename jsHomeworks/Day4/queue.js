function Queue(){
    this.arr = [];

    this.getArr = function (){
        return this.arr;
    }

    this.setArr = function (arr1){
        this.arr = JSON.parse(JSON.stringify(arr1));
    }

    Queue.prototype.enqueue = function (e){
        return this.arr.push(e);
    }
    Queue.prototype.dequeue = function (){
        if(this.arr.length === 0){
            return null;
        }else{
            let first = this.arr[0];
            this.arr.splice(0,1);
            return first;
        }
    }
    Queue.prototype.first = function (){
        return (this.arr.length === 0) ? null : this.arr[0];
    }
    Queue.prototype.size = function (){
        return this.arr.length;
    }
    Queue.prototype.isEmpty = function (){
        return this.arr.length === 0;
    }
}

q = new Queue();
q.enqueue(5);
q.enqueue(6);
q.dequeue();
q.dequeue();

console.log(q.first());