/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    var str=x.toString().split('');
    
    var sign=1;
    if(str[0]=="-")
    {
        sign=-1;
        str.shift();
    }
    var revStr=str.reverse().join('');
    
    var value=parseInt(revStr)*sign;
    if(value>2147483647||value<-2147483648)
        value=0;
    return value;
};

var y=reverse(091234);
console.log(y);