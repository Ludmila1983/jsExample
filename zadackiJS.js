'use strict';


// let a = prompt("Введите сторону квадрата");
// a=Number(a);

// console.log( "Периметр", a*4);
// console.log( "Площадь", a**2);

// let b = prompt("Введите число 2");
// let c = prompt("Введите число 3");
// a=Number(a);
// b=Number(b);
// с=Number(c);
// // let resault = a*2 +(b-3)+c**2;
// // alert(resault);
// let resault=(a+b+c)/3;
// console.log (resault);

// let a = prompt("Введите цену печенья");
// let b = prompt("Введите цену конфет");
// a=Number(a);
// b=Number(b);
// // console.log("Цена покупки", b*0.3+a*0.4);
// console.log("Цена покупки", 3*(2*a+1.8*b));

// let t =prompt("Введите время");
// let s =prompt("Введите расстояние");
// t=Number(t);
// s=Number(s);
// console.log("скорость", (s/1000)/(t/60));

// let a =prompt("Введите катет");
// let b =prompt("Введите катет");
// a=Number(a);
// b=Number(b);
// console.log("площадь", a*b*0.5);
// let c = ((a**2+b**2))**0.5;
// console.log("гипотенуза", c);
// console.log("периметр", a+b+c );
// let a =prompt("Введите количество дней");
// let b =prompt("Введите скидку");
// let с =prompt("Введите сумму");
// a=Number(a);
// b=Number(b);
// с=Number(с);
// console.log("итоговая сумма", c*b*0.01 );
// alert("я javaScript");
// let admin;
// let name;
// name = 'Джон'
// admin=name;
// alert(admin);
// let age = prompt('Сколько тебе лет?' , 100);
// alert(`тебе ${age} лет`);

// let sum = prompt("введите сумму");
// sum=Number(sum);
// let srok = prompt("введите срок");
// srok=Number(srok);
// console.log ("в месяц", sum*(5/100)/365*30);
// console.log ("за весь срок", (sum*(5/100)/365*30)*srok);
// console.log ("итого", (sum*(5/100)/365*30)*srok+sum);
// alert(`в месяц: ${sum*(5/100)/365*30}`);
// alert(`за весь срок: ${sum*(5/100)/365*30*srok}`);
// alert(`итого: ${sum*(5/100)/365*30*srok+sum}`);

// let a=5678;
// let b=a%10; 
// let c=((a-b)/10)%10;
// let d=((a-c*10-b)/100)%10;
// let e =(((a-d*100-c*10-b)/1000)%10);
// let f= b*1000+c*100+d*10+e;
// alert(f);
// b=String(b);
// c=String(c);
// d=String(d);
// e=String(e);
// console.log(b+c+d+e);
// alert(`результат: ${b+c+d+e}`);

// let a =+prompt('введите число');
// if (a>3) {alert(`${a+10}`);
// } else {alert( `${a-10}`);
// }

// let a =+prompt('введите число');
// if (a<7) {alert(`YES`);
// } 
// if (a>10) {alert(`NO`);
// } 
// if (a=10) {alert(`ERROR`);
// } 

// let a =+prompt('введите число');
// if (a==1) {alert(`Январь`);
// } 
// if (a==2) {alert(`Февраль`);
// } 
// if (a==3) {alert(`Март`);
// } 
// if (a==4) {alert(`Апрель`);
// } 
// if (a==5) {alert(`Май`);
// } 
// if (a==6) {alert(`Июнь`);
// } 
// if (a==7) {alert(`Июль`);
// } 
// if (a==8) {alert(`Август`);
// } 
// if (a==9) {alert(`Сентябрь`);
// } 
// if (a==10) {alert(`Октябрь`);
// } 
// if (a==11) {alert(`Ноябрь`);
// } 
// if (a==12) {alert(`Декабрь`);
// } 

// let a =+prompt('введите первое число');
// let b =+prompt('введите второе число');
// if (a>b) {alert(`${a}`);
// } else {alert(`${b}`);
// }

// let a =+prompt('введите первое число');
// let b =+prompt('введите второе число');
// if ((a-b)==100) {alert(`YES`);
// } else {alert(`NO`);
// }


// for (let i=1; i<11; i++) {
// console.log("YOU ARE WELCOME");
// }

// let x =+prompt('ведите первое число');

// for (let n=0; n<x; n++) {
// console.log("kvhjfv");
// }


// for (let i=1; i<21; i++ ) {
//     console.log(i);
// }

// for (let i=100; i >= 1; i=i-4 ) {
//     console.log(i);
// }

// for (let i=1.2; i <= 2.8; i=i+0.2 ) {
//     console.log(i);
// }

// let n =+prompt('введите число');
// let a =0;
// for (let i=1; i <= n; i++ ) {
//     console.log(i);
//     a=a+i;
// }
// console.log(a);

// let n =+prompt('введите число');
// let a =0;
// for (let i=10; i <= 88; i++ ) {
//     a=a+i;
// }
// console.log(a);

// let a =1;
// for (let i=5; i <= 13; i++ ) {
//     a=a*i;
// }
// console.log(a);

// let a =+prompt('введите первое число');
// let b =+prompt('введите второе число');

// for (let i=a; i >= b; i++){


//     if (i%2==0) {
//     console.log(i);
// }
// }

// let a =+prompt('введите первое число');
// let b =+prompt('введите второе число');
// let c =+prompt('введите третье число');
// if (a>10 && b>10 && c>10 && (a%3==0) && (b%3==0) ) {
//     alert("Yes")
// } else {
//     alert("No");
// }

// let n =+prompt('введите число');
// if (n >= 2 && n <= 5) {
//     console.log(n+10);
// } else if (n >=7 && n <= 40) {
//     console.log(n-100);
// } else if ( n <=0 || n >3000) {
//     console.log(n*3);
// }

// let a =1;
// for( let i=5; i <= 111; i++){
//     a=a*i;
// }
// console.log(a);

// let n =+prompt('введите число');
// for (let i=1; i <= n; i++)
// {  if( i%2==1) {
//         console.log("*******");
//     }else { 
//         console.log("****");
//     }

// }

// let n =+prompt('введите число');
// let res = 0;
// for (let i=1; i <= n; i++ ) {
//     res=res + i**2
// }
// console.log(res);

// let n =+prompt('введите число');

// let res = 0;
// for (let i=1; i <= n; i++) {
//     res = res+1/i
// }
// console.log(res);

// let n =+prompt('введите 1 число');
// let a =+prompt('введите  2 число');
// let res = 1;
// for (let i=1; i <= n; i++) {
//     res=res*(a+i)**2;
// }
// console.log(res);




// for (let x=1; x<=10; x++) {
// let res=(Math.abs(x-5)-Math.sin(x))/3+Math.sqrt(x**2+2014)*Math.cos(2*x)-3;
// console.log(res);}


// let x=3.6;

// let res=(Math.E**(x-2))+Math.abs(Math.sin(x))-x**4*Math.cos(1/x);
// console.log(res);

// let a=0.1;
// let b=0.2;
// let x=1;

// let res = (x**2+b)**(1/5) - (b**2*(Math.sin(x+a))**3)/x;
// console.log(res);



// let a =+prompt('введите 1 число');
// let b =+prompt('введите  2 число');

// let res;
// console.log(a+b);
// console.log(a*b)

// let a =+prompt('введите  число');
// console.log(a**2);
// console.log(a**3);

// let a =+prompt('введите 1 число');
// let b =+prompt('введите  2 число');
// let c =+prompt('введите  3 число');
// let res=a*2+b-3+c**2
// console.log(res);

// let a =+prompt('введите 1 число');
// let b =+prompt('введите  2 число');
// let c =+prompt('введите  3 число');
// let res=(a+b+c)/3;
// console.log(res);
// let d=2*(a+c)-3*b;
// console.log(d);


// let a ="*";
// let n =+prompt('введите число');
// for (let i=1; i<=n; i++) {
//     console.log (a);
//    a=a+"*"
// }


// let k = +prompt("введите сторону квадрата");

// for ( let n=1; n<=k ; n++) {
    
//     let s =""

//     for (let i=1; i<=k; i++) {
//         if (i==1 || i==k || n==1 || n==k || i==n ||i==k+1-n) {
//             s=s+"1";
//         } else {
//             s=s +"0" 
//         }
    
//     }
    
//     console.log(s);

// }



// function random(min, max) {
//     return min + Math.random() * (max - min);
// }

// alert( Math.floor(random(578, 10024) ));
// alert( Math.floor(random(578, 10024) ));
// alert( Math.floor(random(578, 10024) ));

// let n = +prompt("введите n");
// let a = +prompt("введите от");
// let b = +prompt("введите до");
// for (let i=1; i<=n; i++) {
//     alert(Math.floor(Math.random() * ( b- a)) + a);
// }

// alert (Math.min(4, -2, 5, 19, -130, 0, 10));
// alert (Math.max(4, -2, 5, 19, -130, 0, 10));

// let a = +prompt("введите a ");
// let b = +prompt("введите b");
// alert (Math.abs(a-b));

// let n = +prompt("введите количество строк");
// let m = +prompt("введите сколько раз должно повторяться AAA");
// let result;
    
// for (let s=1; s<=n; s++) {
//     let x = "";
//         if (s%2==1){
//             for (let k=1; k<=m; k++){
//                 x=x+"AAA"+"BBB";
//                 }
//                 console.log(x);
//         } else {
//             for (let k=1; k<=m; k++){
//                 x=x+"BBB"+"AAA";
//                 }
//                 console.log(x);
//         } 
// }

// for (let s=1; s<=n; s++) {
//     if (s%2==1) { 
//         result="AAA"+"BBB";
//         console. log(result.repeat(m));
//     } else {
//         result="BBB"+"AAA";
//         console. log(result.repeat(m));
//     }
// }

// let s= +prompt("Введите количество строк");
// let l=s*2;

// for (let k=1; k<=s; k++) {
//     let x = "";
//     for (let i=1; i<=l; i++) {
//         if( i==1 || i==l || k==1 || k==s) {
//             x=x+"A"
//         } else {
//             x=x+"B"
//         }
//     }
//     console.log(x);
    
// }

// ромб
// let n= +prompt("Введите число");
// if (n%2==0) {
//     alert('Ошибка! Введите нечетное число');
//     n =+prompt("введите нечетное число")
// }
// let i = 0;
// let k=1;
// let s = (n-1)/2+1;
// let minus;
// let star;

// while (i < s) {
// minus= "";
// star = "";
// for (let j = 0; j < s- i; j++) {
//     minus=minus+ "-" };
// for (let j = 0; j < 2 * i + 1; j++) {
//     star = star+"*";}

// console.log(minus + star + minus);
// i++;
// }

// while (k<=s) {
//     minus= "";
//     star = "";
//     for (let r=1; r<k+1; r++){
//         minus=minus + "-" 
//     }
//     for (let r=0; r<(s-k)*2+1; r++) {
//         star = star+"*"
//     }
//     console.log(minus + star + minus);
// k++;
// }


// треугольник

// let n;
// do {
//     n=+prompt("введите нечетное число");
// } while(n%2==0)

// let i = 0;
// let s = (n-1)/2+1;
// let minus;
// let star;

// while (i <s) {
// minus= "";
// star = "";
// for (let j = 1; j < s- i; j++) {
//     minus=minus+ "-" };
// for (let j = 0; j < 2 * i + 1; j++) {
//     star = star+"*";}

// console.log(minus + star+minus);
// i++;
// }

// треугольник перевернутый
// let n= +prompt("Введите число");
// let s= (n-1)/2+1;

// let minus;
// let plus;
// let i=1;
// while (i<=s) {
//     minus="";
//     plus="";
//     for (let j=2; j<i+1; j++) {
//         minus=minus+"-";
//     }
//     for (let j=0; j<(s-i)*2+1; j++) {
//         plus=plus+"+";
//     }
// console.log(minus+plus+minus);
// i++;
// }



// function koren(x,y) {
//     console.log (Math.sqrt(x-Math.sqrt(y))); 
// }

// for (let i=1; i<=10; i++) {
//     koren (i,i+1);
// }

// function rgb(r=0, g=0, b=0 ) {
//     return "rgb ("+r+","+g+","+b+")";
// }
// let result = rgb(2,3);
// console.log (result);

// function avg (a,b,c,d,x) {
//     console.log ((a+b+c+d+x)/5)
// }
// for (let i=1; i<=5; i++ ) {
    
// let s=Math.random();
// let v=Math.random();
// let g=Math.random();
// let h=Math.random();
// let k=Math.random();
//     avg(s,v,g,h,k); 
// }

// function square(a,b){
//     if (b==undefined){
//         console.log(a*a)
//     } else console.log(a*b)
//    }
// square(5,6)

// function uravn(a,b,c){
// let d=(b**2-4*a*c);
// if (d<0) {
//     console.log('действительных корней нет')

// } else if (d===0){
//     console.log((-1)*b/(2*a))

// } else {
//     console.log ((((-1)*b+Math.sqrt(d))/(2*a)), (((-1)*b-Math.sqrt(d))/(2*a)))
// }
// }
// uravn(2,4,5);

// function length(r) {
// return (2*Math.PI*r);
// }
// let r=+prompt("Введите радиус окружности");
//  alert (length(r));


// function price(a) {
//     return (a-a*0.035)
// }
// let a=+prompt("Введите цену товара");
// alert(Math.floor(price(a)*100)/100); 

// function min(a,b){
//     if (a<b) {
//         return(a)
//     }
//     return(b);
// }
// let a=+prompt("Введите число");
// let b=+prompt("Введите число");
// alert(min(a,b));

// let str= "dsdfidgidgvlgdsdtgpskvs;zxsddkwsd"
// console.log(str[0]);
// let finish=str.slice(-1);
// console.log(finish);
// let dl=str.length;


//     if(dl%2==0) {
//         console.log('среднего нет');
//     }else {
//         console.log(str.slice(dl/2,dl/2+1));
//     }

// let str ="jfh";
// let dl=str.length;
// if (dl>5){
//     console.log(str.slice(0,3),str.slice(dl-3))
// } else {
// for (let n=0; n<dl; n++) {
//     console.log(str.slice(0,1))}
// }

// let str = "hdhfgdhfnbv dfgujv xjkhfusjf ccjsuhfsk ffisihfyfihdv fwioohg"
// let dl=str.length;
// for (let i=2; i<=dl; i=i+3 ) {
//     console.log(str.slice(i,i+1))
// }


// let str ="jdfhdj fjfs fshfs gdkhg gvkdihgd scjwf";
// let dl=str.length;
// let n = "" ;
// let k = "";
// for (let i=0; i<dl; i++) {

//     if (i%2==0) {
//         n=n+str.slice(i,i+1)
        
//     } else {
//     k =k+str.slice(i,i+1)
//     }
    
// }
// console.log(n);
// console.log(k);

// let str= "jfjs!sdfnfb kj!dhfd !fdhf xj!!fhskz ksbgfs dkshvx";

// let newStr = str.replaceAll("!", " ");
// console.log(newStr);

// let str ="+++---0++--++--0";
// let dl=str.length;
// let k=0;
// let n=0;
// let r=0;
// for (let i=0; i<dl; i++) {
//     if (str[i]=="+") {
//         k=k+1;
//     }
//     if (str[i]=="-") {
//         n=n+1; 
//     }
//     if (((str[i]=="-") || (str[i]=="+")) && i<str.length-1 && str[i+1]=="0") {
//         r=r+1; 
//     }
// }
// console.log(`символов + ${k} штук`);
// console.log(`символов - ${n} штук`);
// console.log(`символов после которых 0 ${r} штук`)

// let str = "jfjflddkghdkglddmvklshfjs";
// let p = " ";
// for (let i=0; i<=str.length; i=i++) {
//   p = p+str[i] + " ";
// }
// console.log(p);

// let str = 'ndf';
// if (str.length>10) {
//     console.log(str.slice(0,6))
// } else {
//     str=str.padEnd(12,'o')
// }
// console.log(str);

// let str= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
// let k=1;

// for (let i=0; i<str.length; i++) {
//     if (str[i]==" ") {
//         k=k+1
//     }
    
// }
// console.log(k);
// console.log (str.replaceAll("a","ab"));


// let str="1234567345623415632";
// let newStr =""
// if (str.length%3==0){
//     for (let i=0; i<=str.length; i=i+3) {
//         newStr=newStr+str.slice(i,i+3)+ " ";
//     }
//     console.log(newStr)  
// } 

// else if(str.length%3==2){
//     for (let i=2; i<=str.length; i=i+3) {
//         newStr=newStr+str.slice(i,i+3)+ " ";
//     }
//     console.log(str.slice(0,2)+ ' ' +newStr)
// }
// else if (str.length%3==1){
//     for (let i=1; i<=str.length; i=i+3) {
//         newStr=newStr+str.slice(i,i+3)+ " ";
//     }
//     console.log(str.slice(0,1)+ ' ' +newStr)
// }

// let str='Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud'
// let k=0;
// for (let i=0; i<str.length; i++) {
//     if (str[i]==='1' || str[i]==='2' ||str[i]==='3' ||str[i]==='4' ||str[i]==='5' ||str[i]==='6' ||str[i]==='7' ||str[i]==='8' ||str[i]==='9' ||str[i]==='0' ) {
//         k=k+1;
        
//     }
// }
// console.log(k) 

// let str ="Lorem ipsum dolor  sit amet, consectetur";
// let newStr ='';
// for (let i=str.length-1; i>=0; i--) {
//     newStr=newStr+str[i]
// }
// console.log(newStr)

// let str ="abcddcbaоо";
// let newStr ='';
// for (let i=str.length-1; i>=0; i--) {
//     newStr=newStr+str[i]
// }
// if (str===newStr) {
//     console.log('перевертыш')
// } else {
//     console.log ('не перевертыш')
// }

// let str1 ='Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   laboris nisi ut aliquip ex ea commodo consequat. Duis aute    irure dolor in reprehenderit   in voluptate velit esse   cillum dolore eu fugiat nulla pariatur.    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
// let str = " " + str1 + " ";
// while(str.includes('  ')){
//     str = str.replaceAll('  ', ' ')
// }
// for (let i=0; i<=str.length; i++) {
//     let n=0;
//     let k="";
//     if (str[i]==" ") {
        
//         while(str[i+1]!=" ") {
//             n=n+1;
//             k=k+str[i+1]
//             i++;
//         }
        
//         console.log( n);
//         console.log(k)

//     }
        
        
//     }
    



// let str1="abdc asdff asdfa asdffggg bdfdb";
// let str = " "+str1+"  "

// for (let i=0; i<str.length-1; i++) {
//     let newStr="";
//         if (str[i]==" ") {
            
//             while(str[i+1]!=" ") {
//                 newStr=newStr+str[i+1]
//                 i++;
//             }
            
//                 if (newStr[0]==newStr[newStr.length-1]) {
//                     console.log(newStr)
//                 }
            
            
//         }
//     }

// let arr=[];
// for (let i=0; i<=999; i++){
//      if(i%2==0){

     
//         arr.push(i)
//      }
    
// }
// console.log(arr);
// console.log(arr.length);

// let arr=[];
// for (let i=1000; i>200; i--) {
//     if (i%3==0) {
//         arr.push(i)
//     }
// }
// console.log(arr)

// let arr=[];
// for (let i=0; i<=1000; i++) {

//     arr.push((i+1)*(i+1))
// }
// console.log(arr)

// let arr=[2,4,7,1,2,5,7];
// let k=0;
// for (let i=0; i<=arr.length; i++){
    
//     if (arr[i]%2==0) {
//         k=k+1
//     }
// }
// console.log(k);

// let arr=[2,4,7,1,2,5,7];
// let sum=0;
// let proizv=1;
// for (let i=0; i<arr.length; i++){
// sum=sum+arr[i];
// proizv=proizv*arr[i] 

// }
// console.log(sum);
// console.log(proizv);

// let arr=[2,8,47,8,,8,3,6,2,1];
// let sum=0;
// let sumKr = arr[0]+arr[arr.length-1]
// for (let i=0; i<arr.length; i++){
//     if ((i)%2==1 && arr[i]>sumKr) {
//         sum=sum+arr[i]
//     }
// }
// console.log(sum);

// let arr=[2,8,47,0,8,3,6,2,-1,-8];
// let min = arr[0];
// for (let i=0; i<arr.length; i++) {
//     if (arr[i]%2==0 && arr[i]<min){
//         min=arr[i]
        
//     }
    
// }
// console.log(min)

// let arr=[2,8,47,0,8,3,6,2,-1,-8];
// let dubl=false;
// while(arr.length>0){
//     const elem=arr.pop();
//     if (arr.includes(elem)) {
//         dubl=true;
//         break;
//     }
// }
// console.log(dubl)

// let str = "Дана строка, состоящая    из слов!";

// while(str.includes('  ')){
//     str = str.replaceAll('  ', ' ')
//     }

// let arr =str.split(' ');
// console.log(arr);
// console.log(arr.length);

// let arr=[];
// let n =prompt('введите длину массива');
// arr[0]=1;
// arr[n]=1;
// for (let i=1; i<n; i++) {
//     arr[i]=0
// }
// alert(arr)

// let arr=[];
// let n =prompt('введите длину массива');
// for (let i=0; i<n; i++){
//     if(i%2==0) {
//         arr[i]=0; 
//     } else {arr[i]=1 } 
    
// }
// alert(arr)

// let arr=[];
// for (let i=0; i<100; i++){
//     if((i+1)%2==0){
//         arr[i]=1
//     } else {arr[i]=i%5}   
// }
// console.log(arr);

// let arr =[2,8,-9,7,0,9,6,12,5,2,4,3];
// let newArr1=[];
// let newArr2=[];
// let k=arr[arr.length-1];
// for (let i=0; i<arr.length; i++) {
//     if(arr[i]%arr[0]==0){
//         newArr1.push(arr[i])
    
//     } 
//     if (arr[i]%k==0) {
//         newArr2.push(arr[i])

//     }
// }
// console.log(newArr1.length, newArr2.length);

// let arr =[2,8,-9,7,0,9,6,12,5,2,4,3];
// let max=arr[0];
// for(let elem of arr) {
//     if(elem>max) {
//         max=elem
//     }
// }
// console.log(max);
// №6,8

// let arr =[2,8,-9,7,0,9,6,12,5,2,4,3];
// let max=arr[0];
// let min=arr[0];
// for(let elem of arr) {
//     if(elem>max) {
//         max=elem
//     }
// }
// for(let elem of arr) {
//     if(elem<min) {
//         min=elem
//     }
// }
// let i1=arr.indexOf(min);
// let i2=arr.indexOf(max);
// let m1 = arr[arr.indexOf(min)];
// let m2= arr[arr.indexOf(max)];
// arr[i1]=m2;
// arr[i2]=m1;
// console.log(arr);
// console.log(min+max);

// let arr =[1,2,3,4,5,6,7,8]
// let i=0;
// let k=0;
// let l=0;
// while(i<arr.length) {
//     if (arr[i]<arr[i+1]) {
//         k=k+1
//     } else  if (arr[i+1]<arr[i]) {
//         l=l+1
//     }
//     i++
// }

// if((k==arr.length-1) || (l==arr.length-1)) {
//     console.log('возрастающий/убывающий')
// } else {
//     console.log('разносорт');
// }

// let arr=[2,3,4,5,6,7,8];
// arr.shift();
// arr.pop();
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9];
// arr.reverse();
// console.log(arr);

// let arr=[1,6,-5,8,25,-4,0,12];
// let newArr=[];
// for (let i=0; i<arr.length; i++) {
//     if(arr[i]<=0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr)

// let str = 'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   laboris nisi ut aliquip ex ea commodo consequat. Duis aute    irure dolor in reprehenderit   in voluptate velit esse   cillum dolore eu fugiat nulla pariatur.    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
// let arr =str.split(" ");
// let min =0;
// let word;
// for(let i=0; i<arr.length; i++) {
// if (arr[i].length>min) {
//     min=arr[i].length
//     word=arr[i];
// }
// }
// console.log(word);

// let arr=[1,4,6,-9,-6,-8,-2,1,3,0,0];
// let max=Math.max(...arr);
// for (let i=0; i<arr.length; i++) {
//     if(arr[i]%2==0 && arr[i]<max) {
//     max=arr[i]
//     }
// }
// console.log(max);

// let arr=[1,4,6,-6,-9,-6,-8,-2,1,3,0,0];
// let minSum=arr[0]+arr[1];
// let a;
// let b;
// for (let i=1; i<arr.length; i++){
//     if((arr[i])+(arr[i+1])<minSum) {
//         minSum=arr[i]+arr[i+1];
//         a=arr[i];
//         b=arr[i+1]
//     }
// }
// console.log(minSum);
// console.log(a,b);


// let arr=[1,2,-34,2,6,7,78,8];
// let newArr=arr.map((elem) => elem**3);
// console.log(newArr);
// newArr=newArr.sort((a,b)=> a-b);
// console.log(newArr);
// let sum=0;
// newArr.forEach((el) => sum=sum+el);
// let around=sum/newArr.length;
// console.log(around);
// let newArr2=newArr.filter((x)=>x<around);
// console.log(newArr2);
// newArr2=newArr2.map((elem,ind) => elem-ind);
// console.log(newArr2);
// let res = newArr2.some((element)=> element<0);
// console.log(res);
// let first = newArr2.find(n => n<around/2);
// console.log(first);
// let max=newArr2.reduce((max1,max2)=>max1.length>max2.length ? max1:max2)
// console.log(max);



// let str="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore";
// let arr=str.split("");
// let str1=arr.filter((el) => el!=="," && el!==".").join('');
// console.log(str1);
// str1=str1.toLowerCase();
// console.log(str1);

// let str2=str1.split(' ').sort( ).join(' ');
// console.log(str2);
// let k=str2.split(' ').reduce((n,word)=>word.length>6 ? ++n: n,0);
// console.log(k);
// let max=str2.split(' ').reduce((word1, word2)=>word1.length>word2.length ? word1: word2);
// console.log(max);
// let str3 = str2.split(' ').map(word => {
//     let letters = word.split('');
//     letters[0] = letters[0].toUpperCase();
//     letters[letters.length-1] = letters[letters.length-1].toUpperCase();
//     letters = letters.join('');
//     return letters;
// }).join(' ');
// console.log(str3);
// str3 = str3.split(' ').map( word => word.split('').reverse().join('')).join(' ')
// console.log(str3);
// let str4 = str3.split(' ').map(b=>b[0]);
// console.log(str4);
// let copy = str4.reduce( (accum, l) =>{
//     if(!accum.includes(l)){
//         accum.push(l)
//     }
//     return accum
// },[])
// console.log(copy);



// let str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud'
// let newStr=str.split('').filter(el=>el=="1" || el=="2" || el=="3"||el=="4"|| el=="5"||el=="6"||el=="7"||el=="8"||el=="9"|| el=="0").join("");
// console.log(newStr.length);
// let result=newStr.split('').map(el=>Number(el)).reduce((a,b)=>a+b);
// console.log(result);
// let result1=newStr.split('').map(el=>Number(el)).reduce((a,b)=>a*b);
// console.log(result1);

// let word = 'abcddcba';
// let newWord = word.split('').reverse().join("");
// console.log(newWord==word);


// let str = 'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   laboris nisi ut aliquip ex ea commodo consequat. Duis aute    irure dolor in reprehenderit   in voluptate velit esse   cillum dolore eu fugiat nulla pariatur.    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
// let newStr =str.split("").filter((el) => el!==",").join("").split(" ").reduce((max1,max2)=>max1.length>max2.length ? max1:max2);
// console.log(newStr);

// let str = 'abdc asdff asdfa asdffggg bdfdb';
// let newStr = str.split(' ').filter(word => {
//     let letters = word.split('');
//     if (letters[0]==letters[letters.length-1]){
//         letters = letters.join('');
//         return letters;}
//     })
// console.log(newStr);

// let arr=[1,-8,2,-15,25,15,9,27,-27,0];
// let newArr=arr.filter((el,index)=>(el%3==0)&&(index%2==1)).reduce((a,b)=>a>b ? a:b)
// console.log(newArr);


// function Student(suname,name, lastName, num, sucsess){
//     this.suname=suname;
//     this.name=name;
//     this.lastName=lastName;
//     this.num=num;
//     this.sucsess=sucsess;
//     this.arround=function(){
//         return this.sucsess.reduce((a,b)=> a+b)/this.sucsess.length;
//     }
//     this.isPerfect=function(){
//         return this.sucsess.every(r=>r>=4)
//     }
//     this.show =function(){
//         console.log(`${this.name}-${this.num}`);
//     }
// }
// const firstGr1 = new Student('Иванов', 'Иван', 'Иванович','m1', [5,4,3,5,2]);
// const firstGr2 = new Student('Петров', 'Петр', 'Петрович','m1', [5,5,2,3,4]);
// const firstGr3 = new Student('Савчук', 'Людмила', 'Алексеевна','m1', [5,3,4,3,2]);
// const firstGr4 = new Student('Потейчук', 'Василий', 'Васильевич','m1', [4,5,5,4,4]);
// const firstGr5 = new Student('Ромашка', 'Роза', 'Юрьевна','m3', [3,3,5,4,5]);
// const firstGr6 = new Student('Кривой', 'Иван', 'Иванович','m1', [5,2,2,4,1]);
// const firstGr7 = new Student('Косой', 'Иван', 'Петрович','m2', [2,5,3,4,2]);
// const firstGr8 = new Student('Кривая', 'Жанна', 'Ивановна','m5', [1,2,2,3,4]);
// const firstGr9 = new Student('Косая', 'Илонна', 'Петровна','m2', [3,5,5,3,1]);
// const firstGr10= new Student('Савчук', 'Денис', 'Владимирович','m1', [4,5,2,1,4]);
// console.log(firstGr1);
// const students =[firstGr1, firstGr2, firstGr3, firstGr4, firstGr5, firstGr6, firstGr7, firstGr8, firstGr9, firstGr10];
// students.forEach(s=>console.log(s.arround()));
// console.log(students.sort((s1,s2)=>s1.arround()-s2.arround()));
// students.filter((s)=>s.isPerfect()).forEach(s=>s.show());


// function Train(titleStation, numbertrain, time){
//     this.titleStation=titleStation;
//     this.numbertrain=numbertrain;
//     this.time=time;
//     this.zapros=function(){
//         alert(`${this.titleStation}-${this.time}`);
//     }
//     this.station=function(){
//         return this.titleStation
//     }
//     }
//     const train1= new Train("Брест", 712, 17);
//     const train2= new Train("Минск", 312, 19);
//     const train3= new Train("Варшава", 259, 10);
//     const train4= new Train("Брест", 148, 9);
//     const train5= new Train("Берлин", 700, 20);
//     const train6= new Train("Брест", 148, 13);
//     const trains= [train1,train2,train3,train4,train5,train6];

//     console.log(trains.sort((s1,s2)=>s1.numbertrain-s2.numbertrain));
//     console.log(trains.sort((a,b)=>a.time-b.time).sort(function (a, b) {
//         if (a.titleStation > b.titleStation) {
//         return 1;
//         }
//         if (a.titleStation < b.titleStation) {
//         return -1;
//         }
//         return 0;
//         }
//     ));
//         let key=+prompt('Введите номер поезда', 'numbertrain'); 
//     // trains.filter(el=>{if (key===el.numbertrain) {return el}}).forEach(el=>el.zapros())
//     console.log(trains.find(t=>t.numbertrain===key));

//     let city1={name:'ГородN', population: 10000000};
//     let city2={name:'ГородM', population: 1e6};
//     function getName(){
//         relturn this.name;
//     }
//     city1.f=getName;
//     city2.f=getName;
//     console.log(city1.f(),city2.f());
//     city1.exportStr=function(){
//         console.log(`name=${this.name}
// population=${this.population}`);
//     }
// city2.exportStr=city1.exportStr;
// city1.exportStr();
// city2.exportStr();

// function getObgect(){
//     return this;
// }
// city1.getCity=function () {
//     return getObgect;
// }
// console.log( city1.getCity());

// const obj = {
//         method1() {
//     return this;
//     },
//     method2() {
//     return this;
//     },
//     method3() {
//     console.log('метод3' );
//     return this;
//     }
// }
// obj.method1().method2().method3();

// let arr=[1,1,1,2,3,6,598,1,2,6,59,8,58,21,1,25,2];
// let arrNew= new Set(arr).size;
// console.log(arrNew);

// console.log(arr.length-arrNew);

// function Triangle (a,b,c){
//     this.a=a;
//     this.b=b;
//     this.c=c;
    
//     this.proverka=function(){
//         return this.a+this.b>this.c
//         } 
//         Object.defineProperty(this, 'perimetr', {get:function() {return this.a+this.b+this.c},
//                 configurable: true})
//         Object.defineProperty(this, 'area', { get: function(){
//             return Math.sqrt((this.perimetr/2)*((this.perimetr/2)-this.a)*((this.perimetr/2)-this.b)*((this.perimetr/2)-this.c))
//         },configurable: true})
//     }

// const tr1 = new Triangle(3,4,5);
// const tr2 = new Triangle(18,6,12);
// const tr3 = new Triangle(1,1,10);
// let triangles=[tr1,tr2,tr3]
// console.log(tr1.proverka(), tr2.proverka(), tr3.proverka());
// console.log(tr1.perimetr);
// console.log(tr1.area);

// let arr=[[1, 2, 3], [4, 5], [6]];
// arr=arr.flat().reduce((a,b)=>a+b);
// console.log(arr);


// function User(firstName,lastName,year){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.year=year;
//             Object.defineProperty(this, 'fullName', {get:function() {return `${this.firstName} ${this.lastName}`},
//                 configurable: true})
//         Object.defineProperty(this, 'age', { get: function(){
//             return (2022-this.year);},configurable: true})

//             this.vyvod=function(){
//                 console.log(this.fullName, this.age);
//             }    
//     }

// const us1= new User("Иванов","Иван",1986);
// const us2= new User("Петров","Петр", 1993);
// const us3= new User("Сидоров","Иван",1981);
// const us4= new User("Косой","Петр",1999);
// const us5= new User("Косая","Валентина",1956);
// const us6= new User("Хромой","Иван",1982);
// const us7= new User("Хромая","Виктория",1983);
// const us8= new User("Большой","Сергей",1984);
// const us9= new User("Большая","Надежда",1996);
// const us10= new User("Маленький","Константин",1995);

// let users=[us1,us2,us3,us3,us4,us5,us6,us7,us8,us9,us10]

// console.log(us1.age, us1.fullName);
// let key=+prompt('Введите n'); 
//     let older=users.filter(el=>{if (key<=el.age) {return el}}).sort(function (a, b) {
//                 if (a.firstName > b.firstName) {
//                 return -1;
//                 }
//                 if (a.firstName < b.firstName) {
//                 return 1;
//                 }
//                 return 0;
//                 }
//             ).forEach(el=>el.vyvod());

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data);
//     // const dataNew =data.filter(el=>el.title.length<15)
//     // console.log(dataNew);
//     const shortData=data.map(item=> {if(item.title.length>15){
//         item.title=item.title.slice(0,12)+"...";
//     }
//     return item;
// })
// console.log(shortData);

// .catch(e=>{ console.error(e)})

// 

// let shape={
//     color: "green",
//     draw() {
//         console.log(this.color, this.name)
//     },
// }
// let point ={ x:5, y:8};
// Object.setPrototypeOf(point, shape);


// let rectangle={ side1: 10, side2: 20, name:"rectangle"

// }
// Object.setPrototypeOf(rectangle, point);
// rectangle.draw()

// let circle = {radius: 10, name: 'circle'}
// Object.setPrototypeOf(circle,point);
// circle.draw()

// function Student(firstName, lastName, group, averageMark){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.group=group;
//     this.averageMark=averageMark;
//     this.getScholarship= function() { 
//         return (this.averageMark >=5 ? 100 : 80 )
//         }
    
// }

//     const st1= new Student("Иванов", "Иван", "b-11", 4.5);
//     const st2= new Student("Петров","Максим", "M-1", 5.5);
//     const st3= new Student("Сидоров","Иван", "M-4", 6.5);
//     const st4= new Student("Иванова","Елена", "M-2", 3.5);

// function Aspirant (firstName, lastName, group, averageMark, work) {
//     Student.call(this,firstName, lastName, group, averageMark)
//     this.work ='work';
//     this.getScholarship= function() { 
//         return (this.averageMark >=5 ? 200 : 180 )
//         }
    
// }
// Aspirant.prototype=Object.create(Student.prototype);

//     const asp1=new Aspirant("Сидорова","Евгения", "MН-5", 7.5);
//     const asp2=new Aspirant("Сидорова","Галина", "MН-5", 7.5);
//     const asp3=new Aspirant("Иванова","Елена", "MН-1", 3.5);
//     const asp4=new Aspirant("Петров","Алексей", "M-5", 5.5);
// let all=[st1,st2,st3,st4,asp1,asp2,asp3,asp4]
// all.forEach((el)=>console.log(el.getScholarship()));