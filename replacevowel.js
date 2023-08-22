const string ="I like hiking Mountains, I like playing sports, I like reading books";
var newstring="";

for (i=0;i<=string.length;++i){
    if(string[i]==="a"||string[i]==="A"||string[i]==="e"||string[i]==="E"||string[i]==="i"||string[i]==="I"||string[i]==="o"||string[i]==="O"||string[i]==="u"||string[i]==="U"){
        newstring = newstring+"*";
    }
    else{
        newstring=newstring+string[i];
    }
}
console.log(newstring);