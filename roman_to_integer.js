var romanToInt = function(s) {
    let mymap=new Map();
    mymap.set("I",1);
    mymap.set("V",5);
    mymap.set("X",10);
    mymap.set("L",50);
    mymap.set("C",100);
    mymap.set("D",500);
    mymap.set("M",1000);
    let result=0;
    let i=0
    for (i;i<s.length-1;i++)
    {
        if (mymap.get(s[i])<mymap.get(s[i+1]))
        {    
            result+=mymap.get(s[i+1])-mymap.get(s[i]);
            i++;
        } 
        else  result+=mymap.get(s[i]);

    }
    if (i===s.length-1)
        result+=mymap.get(s[i]);
    return result;

};
romanToInt(s = "III");//Input: s = "III" Output: 3 Explanation: III = 3.
romanToInt(s = "LVIII");// Input: s = "LVIII" Output: 58 Explanation: L = 50, V= 5, III = 3.
romanToInt(s = "MCMXCIV");//Input: s = "MCMXCIV" Output: 1994 Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
