function PriorityQueue(){
    this.data = new Map();

    PriorityQueue.prototype.insert = function (k,v){
        return this.data.set(k,v);
    }
    PriorityQueue.prototype.min = function (){
        if(this.data.size === 0){
            return null;
        }else{
            let keys = Array.from( this.data.keys() );
            let min_key = keys[0];
            for (let i of keys) {
                if(i <= min_key){
                    min_key = i;
                }
            }
            return this.data.get(min_key);
        }
    }
    PriorityQueue.prototype.removeMin = function (){
        if(this.data.size === 0){
            return null;
        }else{
            let keys = Array.from( this.data.keys() );
            let min_key = keys[0];
            for (let i of keys) {
                if(i <= min_key){
                    min_key = i;
                }
            }
            return this.data.delete(min_key);
        }

    }
    PriorityQueue.prototype.size = function (){
        return this.data.size;
    }
    PriorityQueue.prototype.isEmpty = function (){
        return this.data.size === 0;
    }
}
