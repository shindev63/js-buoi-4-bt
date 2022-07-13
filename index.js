// var isVip = false; 

// // toan tu so sanh

// console.log( 4 == 4);
// console.log(4 != 4);
// console.log(5 > 4);
// console.log(5 >= 4);
// console.log(5 < 4);
// console.log(5 <= 4);


// console.log(5 === 5);
// console.log(5 !== 5);

// // toan tu logic , && , ||
// console.log(isVip);
// console.log(!isVip);
// // Dấu Và
// console.log(5 < 4 && 2 == 3 && 7 < 8); 
// // Dấu hoặc
// console.log(5 < 4 || 2==3); 

// // mệnh đề IF

// // if(biểu thức điều kiện){
// //     // code se run khi đúng điều kiện
// // } else{
// //     // code sẽ run khi sai đk
// //     }

// var d = 4;
// if(d < 0){
//     d = -d;
//     console.log(d);
// } else {
//         console.log(d , " đã là số dương");
//     }

// Bài 1
/**
 * input : nhập số tiền phải trả
 *          tiền đã thanh toán 1 phần trong tháng
 *          tính tiền phạt chưa thanh toán
 *          lãi xuất 1,5% / tháng
 * 
 * process :
 *      1. lấy input (creditCardBalance,payment)
 *      2. tính tiền nợ = creditCardBalance - payment
 *      3. tính tiền phạt = tiền nợ * 1,5 %
 * 
 * output : penalty
 * 
 * 
 */

// var creditCardBalance = 5000000;
// var payment = 200000;
// var balance = creditCardBalance - payment;
// var penalty;
// if(balance >= 0){
//     penalty = (balance * 1.5)/100 ;  
//     console.log("Số tiền phạt là :", penalty);
// }else{
//     console.log("đã đủ tiền thanh toán");
// }


// bài 1:
/***
 * INPUT: 3 số nguyên, xuất 3 số theo thứ tự tăng dần
 * 
 * PROCESS: 
 * 1. lấy input
 * 2. tính 3 số nguyên
 * 3. log ra màn hình
 * 
 * OUTPUT: theo thứ tự tăng dần
 */

var a = 6;
var b = 19;
var c = 23;

if(a < b && a < c)
{
    if(b < c){
        console.log("3 số nguyên thứ tự tăng dần là :", a ,b,c);
    }else{
            console.log("3 số nguyên thứ tự tăng dần là :", a ,c,b);
        }
}
if(b < a && b < c)
{
    if(a < c){
        console.log("3 số nguyên thứ tự tăng dần là :", b ,a,c);
    }else{
            console.log("3 số nguyên thứ tự tăng dần là :", b ,c,a);
        }
}
if(c < a && c < b)
{
    if(a < b){
        console.log("3 số nguyên thứ tự tăng dần là :", c ,a,b);
    }else{
            console.log("3 số nguyên thứ tự tăng dần là :", c ,b,a);
        }
}
// bài 2:
/***
 * INPUT:“Chào hỏi” các thành viên trong gia đình
 * 
 * PROCESS: 
 * 1.lấy input
 * 2.tính
 * 3. log ra màn hình 
 * 
 * OUTPUT: đưa ra lời chào phù hợp
 */
var T = "anh trai";
var B = "bố";
var M = "mẹ";
var A = "anh trai";
var E = "em gái";
switch(T){
    case B:
        console.log("con chào bố ạ");
        break;
    case M:
        console.log("con chào mẹ ạ");
        break;
    case A:
        console.log("em chào anh trai ạ");
        break;
    case E:
        console.log("anh chào em gái ");
        break;
    default:
        console.log("lời chào không chính xác!");
}
// bài 3:
/***
 * INPUT: 3 số nguyên, xuất ra bao nhiêu số lẻ và bao nhiêu số chẵn
 * 
 * PROCESS:
 * 1. lấy input
 * 2. tính
 * 3. log ra màn hình
 * 
 * OUTPUT: số chẵn và số lẻ
 */

var a = 5 % 2;
var b = 6 % 2;
var c = 8 % 2;

var even = 0 ;
var odd = 0 ;
 if(a == 0){
    even +=1;
 }else{
    odd +=1;
 }
 if(b == 0){
    even +=1;
 }else{
    odd +=1;
 }
 if(c == 0){
    even +=1;
 }else{
    odd +=1;
 }
 console.log("Tổng chẵn là:",even);
 console.log("Tổng lẻ là:",odd);

 // bài 4:
 /***
  * INPUT: 3 cạnh tam giác,cho biết đó là tam giác gì
  * 
  * PROCESS:
  * 1. Lấy input
  * 2. xét 3 cạnh tam giác
  * 3. log ra màn hình
  * 
  * 
  * OUTPUT: tam giác gì
  * 
  */
 var a = 3;
 var b = 4;
 var c = 5;
 if(a == b || a == c || b == c){
    console.log("Đây là tam giác cân");
 }
 if(a == b && a == c && b == c){
    console.log("Đây là tam giác đều");
 }
 if(a*a == b*b + c*c || b*b == a*a + c*a || c*c == a*a + b*b){
    console.log("Đây là tam giác vuông");
 }


 var month = 1;

/**
 * if month === 1{
 *      console.log("31 ngay")
 * } else if(month === 2) {
 *      console.log("28 ngày")     
 * }
 * 
 * 
 * 
 */

switch(month) {
    case 1:
        console.log("31 ngay");
        break;
    case 2:
        console.log("28 ngay");
        break;
    default :
        console.log("Không hợp lệ");    
}


// bài 3:

/***
 * INPUT: 3 số nguyên, in ra cách đọc nó
 * 
 * PROCESS:
 * 1. lấy input
 * 2. tính
 * 3. log ra màn hình
 * OUTPIT: cách đọc của 3 số nguyên
 */

var a = 2 % 10;
var b = (30 / 10) % 10;
var c = 200 / 100;

if (a,b,c < 100 || a,b,c > 500) {
    console.log("cách đọc của 3 số nguyên là:");
}else{
    switch(c){
        case 1: console.log("Một trăm ");
        break;
        case 2: console.log("Hai trăm ");
        break;
        case 3: console.log("Ba trăm ");
        break;
        case 4: console.log("Bốn trăm ");
        break;
        case 5: console.log("Năm trăm ");
        break;
    }
}
if(b % 10 == 0 && a != 0){
    console.log("lẻ ",b);
  }else{
  switch(b){
    case 1: console.log("mười ");
    break;
    case 2: console.log("hai mươi ");
    break;
    case 3: console.log("ba mươi ");
    break;
    case 4: console.log("bốn mươi ");
    break;
  }
}
  switch(a){
    case 1: console.log("một ");
    break;
    case 2: console.log("hai ");
    break;
    case 3: console.log("ba ");
    break;
  }