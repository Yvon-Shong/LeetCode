/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
    if(str===null||str===''||str===NaN)
        return 0;
    if(str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57)
    var result=0;
    for(var i=0;i<str.length;i++)
    {
        if(str[i].charCodeAt() < 48 || str[i].charCodeAt() > 57)
            if(str[i]!="-")
                continue;
            else
                var sign=-1;
        else
            result=result*10+parseInt(str[i]);
        
    }
};