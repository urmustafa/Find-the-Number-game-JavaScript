let enter=document.getElementById('enter');
let output=document.getElementById("out");
let number=Math.floor(Math.random()*100)
let sec=document.getElementById("gif");
let again=document.getElementById("again");
let sayac=document.getElementById("count");
let ara=document.getElementById("mt");
let kucuk=1;
let buyuk=100;
let count=1;
console.log(number)

enter.addEventListener('click',function(e){
    let input=document.getElementById('user').value;
    if(input==number && input<101 && input>0){
        output.innerHTML=`You guessed right, your number was ${input}`;
        sayac.innerHTML=`Number of attempts: ${count}`;
        sec.style.display="inline";
        sayac.style.display="inline"
    }else if(input<number && input<101 && input>0){
        kucuk=input;
        output.innerHTML=`A larger number than ${input} `;
        ara.innerHTML=`Guess a number between below ${kucuk}-${buyuk}`;
        sec.style.display="none";
        document.getElementById('user').value="";
        sayac.style.display="none"
    }else if(input>number && input<101 && input>0){
        buyuk=input;
        output.innerHTML=`A number smaller than ${input}`;
        ara.innerHTML=`Guess a number between below ${kucuk}-${buyuk}`;
        sec.style.display="none";
        document.getElementById('user').value="";
        sayac.style.display="none"
    }
    else{
        window.alert("lütfen 1 ile 100 arasında bir sayı giriniz")
        document.getElementById('user').value="";
        sayac.style.display="none";
        sec.style.display="none";
        output.innerHTML=`This "!!  ${input} !!" value you entered is incorrect.`;
        
    }
    if(input!=number&& input<101 && input>0){
    count++;
    }
});

again.addEventListener('click',function(){
    console.log("again")
    number=Math.floor(Math.random()*100);
    console.log(number);
    document.getElementById('user').value="";
    output.innerText ="";
    sayac.innerHTML="";
    sec.style.display="none";
    ara.innerHTML=`Guess a number between below 1-100`;
    count=1;

})