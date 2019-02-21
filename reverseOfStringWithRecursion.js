
//print reverse of string using recursion

function main(){

    let str='ram';
    reverseString(str,'');

} 

function reverseString(str,revStr){
    if(!str){
        console.log(revStr)
    }
    else{
        revStr+=str[str.length-1];
        str=str.slice(0, -1);
        reverseString(str,revStr);
    }
  
}
main();