/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 function convert(s, numRows) {
    if(s.length<=0||numRows==1||s==null)
        return s;
    var matrix=new Array(numRows);
    for(var i0=0;i0<numRows;i0++)
    {
        matrix[i0]=new Array();
    }

    var T=2*(numRows-1);

    for(var x=0;x<s.length;x++)
    {
        var Tth=Math.floor(x/T);
        var Nth=x % T;
        if(Nth<=numRows-1)
            matrix[Nth].push(s[x]);
        else 
            matrix[T-Nth].push(s[x]); 
    }
    for(var i1=0;i1<numRows;i1++)
    {
        
        matrix[i1]=matrix[i1].join('');

    }
    return matrix.join('');
    
};
str=convert("PAYPALISHIRING", 3);
console.log(str);