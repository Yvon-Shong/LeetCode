/**
 * Longest Substring Without Repeating Characters
 * stack
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(s) {
    var hash=new Array(255);//use hash to check
    for(var p1=0;p1<255;p1++)
        hash[p1]=-1;

    var max=0;
    
    for (var i=0;i<s.length;i++)
    {
        var position=s.charAt(i).charCodeAt();
        if(hash[position]===-1)
        {
            hash[position]=i;
            var value=0;
            for(var hashp=0;hashp<255;hashp++)
            {
                if(hash[hashp]!=-1)
                    value++;
            }
            max=Math.max(max,value);
        }
        else
        {
            //clear
            for(var hashp2=0;hashp2<255;hashp2++)
            {
                if(hash[hashp2] < hash[position])
                {
                    hash[hashp2] = -1 ;
                }
            }
       
            hash[position]=i;
            var value=0;
            for(var hashp3=0;hashp3<255;hashp3++)
            {
                if(hash[hashp3]!=-1)
                    value++;
            }
            max=Math.max(max,value);
        }
    }
   
    return max;

}
  


/*cost too much time
function lengthOfLongestSubstring(s) {
    if(s=='')
        return 0;
    var matrix=new Array(s);
    for(var p = 0;p<s.length;p++)
    {
        matrix[p]=new Array(s.length);
    }
    for(var i=0;i<s.length;i++)
    {
        for(var j=i;j<s.length;j++)
        {
            matrix[i][j]=match(s,i,j);
        }
    }
//find the max
    var max=0;
    var location=[0,0];
    for(var i1=0;i1<s.length;i1++)
    {
        for(var j1=i1;j1<s.length;j1++)
        {
            if(matrix[i1][j1]>max)
            {
                location=[i1,j1];
                max=matrix[i1][j1];
            }
        }
    }
    return location[1]-location[0]+1;
    
};




function match(s,i,j)
{
    var arr = s.slice(i,j+1).match(/./g);
    var hash=new Array(26);
    for(var hashp=0;hashp<26;hashp++)
    {
        hash[hashp]=0;
    }
    for(var i0=0;i0<j-i+1;i0++)
    {
        hash[arr[i0].charCodeAt()-97]++; 
    }
    var matchValue=0;
    for(var hashp2=0;hashp2<26;hashp2++)
    {
        if(hash[hashp2]>1)
            return -1;
        if(hash[hashp2]==1)
            matchValue++;
    } 
    return matchValue;
    
}

*/


//test
var s="vqblqcb";
var b=lengthOfLongestSubstring(s);
console.log(b);