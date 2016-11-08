/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {

    var size=Math.floor(Math.log(x)/Math.log(10))+1;

    if(x<0)
        return false;
    if(size==1)
        return true;

    while(size>1&&x!=0)
    {
        
        if(head(x,size)==tail(x))
        {
            console.log("head:"+head(x,size)+";tail:"+tail(x));

            x=x-head(x,size)*Math.pow(10,size-1);
            x=Math.floor(x/10);
            console.log("x:"+x);
            size=size-2;
            console.log("size:"+size);
        }
        else
        {  
            console.log("head:"+head(x,size)+";tail:"+tail(x));
            var size0=Math.floor(Math.log(x)/Math.log(10))+1;
            if(size0==size)
            {
                return false;
            }
            else
            {
                if(tail(x)==0)
                {
                    x=Math.floor(x/10);
                    size=size-2;
                }
                else
                    return false;
            }
            console.log("size0:"+size0);
            
        }
    }
    return true;

};

function head(x,size)
{
    return Math.floor(x/Math.pow(10,size-1));
}

function tail(x)
{
    return x%10;
}

var t=isPalindrome(1000021);
console.log(t);
