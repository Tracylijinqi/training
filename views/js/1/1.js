// /**
//  * Created by Li on 2017/3/20.
//  */
// var time=25;
// if (time<20){
//     console.log("Good day");
// }
//     else{
//     console.log("Good evening");
// }
//
//
// var time=15;
// if (time<10){
//     console.log("Good morning");
// }
// else if(time>=10&&time<=20){
//     console.log("Good day");
// }
// else{
//     console.log("Good evening")
// }
//
//
// var num=1;
// if(num===1){
//     console.log("num is equal to 1");
// }
//
// var num=2;
// if(num===1){
//     console.log("num is equal to 1");
// }
// else{
//     console.log("num is not equal to 1,the value of num is"+num);
// }
//
// var month=5;
// if(month===1){
//     console.log("January");
// }
// else if(month===2){
//     console.log("February");
// }
// else if(month===3){
//     console.log("March");
// }
// else {
//     console.log("Month is not January,February or");
// }
//
//
// var d=new Date().getDay();
// switch (d){
//     case 0:
//         x="今天是星期天";
//         console.log(x);
//         break;
//     case 1:
//         x="今天是星期一";
//         console.log(x);
//         break;
//     case 2:
//         x="今天是星期二";
//         console.log(x);
//         break;
//     case 3:
//         x="今天是星期三";
//         console.log(x);
//         break;
//     case 4:
//         x="今天是星期四";
//         console.log(x);
//         break;
//     case 5:
//         x="今天是星期五";
//         console.log(x);
//         break;
// }
//
// var x=null;
// var d=typeof x;
// switch (d){
//     case "string":
//         x="x是字符串";
//         console.log(x);
//         break;
//
//     case "number":
//         x="x是数字";
//         console.log(x);
//         break;
//     case "undefined":
//         console.log("x是未定义");
//         break;
//     case "boolean":
//         console.log("x是布尔值");
//         break;
//     case "object":
//             console.log("x是对象");
//             break;
// }
// /*循环语句*/
// var x=0;
// while(x<10){
//     x=x+1;
//     console.log(x);
// }
//
//
// var x=0;
// var b=1;
// while(x<=99){
//    x=x+1;
//     b=x*b;
//     console.log(b);
// }
//
// var x=0;
// var c=0;
// while(x<=100){
//     c=x+c;
//     x=x+1;
// }
// console.log(c);
//
// /*for循环*/
//
// for(var x=0;x<=9;x++){
//
//     console.log(x);
// }
// /*for循环1+2+3.。。。+100*/
// for( var b=0,x=0;x<=100;x++){
//
//     b=b+x;
// }
// console.log(b);
// /*for循环1-2+3-4.。。-100*/
//
// var b=0;
// for(var a=-1,x=1;x<=100;x++){
//     a=-a;
//     b=a*x+b;
// }
// console.log(b)
// /*99乘法表*/
// for(var a=1;a<=9;a++){
//    for(d=1;d<=9;d++)
//     console.log(a+'*'+d+'='+a*d);
// }
//
// /*do-while循环输出0-9*/
// var i=0;
// do{
//     console.log(i);
//     i++;
// }
// while
//     (i<=9);
// var i=0;
// do{
//     console.log('zhe number is'+i);
//     i++;
// }
// while
//     (i<=5);
//
// /*for..in循环*/
// var obj={
//     "first":"first",
//     "zoo":"zoo",
//     "2":"2",
//     "34":"34",
//     "1":"1",
//     "second":"second"
// };
// for(var i in obj){
//     console.log(i);
// };
//  var person={
//      name:'bob',
//      age:20,
//      tags:['js','web','mobile'],
//      city:'beijing',
//      hascar:true,
//          zipcode:null
// };
//  for(var b in person){
//      console.log(b)
//  }
//
// var string="abcdefg";
// var a= Array;
// a=string.split("");
// a.reverse();
// console.log(a) ;
//
//
//
// var str = "abcdefg",
//     result = "";
// for(var i = str.length; i > 0; i--) {
//     result += str.charAt(i - 1);
// }
// document.write(result + "<br>");
//
// str = "abddaabcdeff";
// str1 = str.replace(/(.).*\1/g,"$1");
// document.write(str + "<br>");
// document.write(str1+ "<br>");
//
// var i,a,b,c;
// for(i=100;i<1000;i++){
//     a=parseInt(i/100);
//     b=parseInt((i-a*100)/10);
//     c=parseInt(i-a*100-b*10);
//     if( a*a*a+b*b*b+c*c*c == i){
//         document.write(i+"<br>");
//     }
// }
//
// /*年利率*/
// var i=1000,b=10;
// var a=0.0325;
// var sum=i*Math.pow(1+a,b);
// console.log(sum);
// /*两点间的距离公式*/
// var x1=1,x2=2;
// var y1=1,y2=2;
// var sum1=Math.pow((x2-x1),2);
// var sum2=Math.pow((y2-y1),2);
// var sum3=sum1+sum2;
// var sum4=Math.sqrt(sum3);
// console.log(sum4);
// /*三角形面积公式*/
// var x1=1,y1=1;
// var x2=0,y2=0;
// var x3=1,y3=0;
// var side1=Math.pow((Math.pow((x1-x2),2)+Math.pow((y1-y2),2)),0.5);
// var side2=Math.pow((Math.pow((x1-x3),2)+Math.pow((y1-y3),2)),0.5);
// var side3=Math.pow((Math.pow((x2-x3),2)+Math.pow((y2-y3),2)),0.5);
// var s=(side1+side2+side3)/2;
// var area=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
// console.log(area);
// /*日期*/
// var date = new Date(2017,3,22);
// console.log('一共'+date.getDate()+'天');
// /*某天是星期几*/
// var date=new Date(a,m,q);
// var a=2017,m=3,q=1;
//     j=parseInt(a/100);
//     k=(a%100);
//     d=parseInt((26*(m+1))/10);
//     e=parseInt(k/4);
//     f=parseInt(j/4);
//     g=(q+d+k+e+f+5*j);
//     h=(g%7);
//     console.log(h);
// /*平均分*/
// var str="87,81,97,76,74,94,90,76,64,76";
// a=Number(str.charAt(0))+Number(str.charAt(3))+Number(str.charAt(6))+Number(str.charAt(9))+Number(str.charAt(12))
//     +Number(str.charAt(15))+Number(str.charAt(18))+Number(str.charAt(21))+Number(str.charAt(24))+Number(str.charAt(27));
// b=Number(str.charAt(1))+Number(str.charAt(4))+Number(str.charAt(7))+Number(str.charAt(10))+Number(str.charAt(13))
//     +Number(str.charAt(16))+Number(str.charAt(19))+Number(str.charAt(22))+Number(str.charAt(25))+Number(str.charAt(28));
// sum=(10*a)+b;
// sum1=parseInt(sum/10);
// console.log(sum1);

//
// var str="87,81,97,76,74,94,90,76,64,76";
// a=str.split(",");
// var d=0,e=0;
// for(var i=0;i<a.length;i++){
//     d+=Number(a[i]);
// }
// e=d/a.length;
// console.log(e);
// var array=[1,2,3,4,5];
// array.length=3;
// console.log(array);
//
// var week=['1','2','3'];
// week.unshift('4');
// week.push('5');
// console.log(week);
//
// var array=[0,1];
// for(var i=1;i<10;i++){
//     array.push(array[i-1]+array[i]);
// }
// console.log(array);
var array=[1000,498];
for(var i=0;i<498;i++){
    array.push((array[i])%(array[i+1]));
    if(((array[i])%(array[i+1]))==0){
        break;
    }
}
console.log(array[i+1]);

var m,n,sum;
var m=5,n=2;
for(var i=0;i<n;i++){
    sum=m*m;
}
console.log(sum);