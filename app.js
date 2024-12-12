const msg = document.querySelector(".messageArea");
const header = document.querySelector("h1");
const text = document.querySelector(".textLine");
const allertMsg = document.querySelector('.alert');
const pinInput = document.querySelector('.inputPIN');

const card = document.querySelector(".cardSlot");
const money = document.querySelector(".moneySlot");

const numPad = document.querySelector('.numPad');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const pin=1234;

let balance = 10000;
const limit = 500;

let isDeposit = false;
let isWithdraw = false;



function insertCard() {
    header.textContent = "Customer Validation";

    const newNode = document.createTextNode("Enter PIN code");
    const element = document.querySelector(".messageArea").children[1];    
    element.replaceChild(newNode, element.childNodes[0]);

    card.style.backgroundColor ="gray";

    pinInput.setAttribute("type", "password");        
}



function addNumber (character){     
    pinInput.value+=character; 
    
}


function checkPIN() {
    let aType = pinInput.getAttribute("type");
    if (aType==="password") {    
        if (Number(pinInput.value)==pin){
            console.log("correct pin");
            welcomeUser();
        }
        else {        
            console.log("incorrect pin")           ;
            allertMsg.textContent = "Incorrect PIN. Try one more tyme.";       
            pinInput.value='';
        }
    } else {
        if  (aType==="text")
            if (isDeposit)
                moneyDepositing();
            if (isWithdraw)
                moneyWithdrawal() ;
        }
            
}

function clearInput () {
    pinInput.value='';
}

function welcomeUser () {    
    header.textContent = "Welcome, Customer!";
    text.textContent = "What do you want to do?"
    pinInput.type = 'text';
    pinInput.style.display = "none";
    pinInput.value = '';
    allertMsg.textContent='';
    btn1.style.backgroundColor = 'red';
    btn2.style.backgroundColor = 'rgba(19, 140, 211, 0.877)';
    btn3.style.backgroundColor = 'green';
    
}

function withdraw() {
    btn1.style.backgroundColor = 'gray';
    btn2.style.backgroundColor = 'gray';
    btn3.style.backgroundColor = 'gray';
    header.textContent = "Cash withdrawal";
    text.textContent = "Enter amount";
    pinInput.setAttribute("type", "text");
    pinInput.style.display = "inline";
    pinInput.value = '';
    isWithdraw = true;
}

function moneyWithdrawal() {
    let n = Number(pinInput.value);
    pinInput.style.display = "none";
    pinInput.value = '';
    if (n>limit) {
        header.textContent = "Notice";
        msg.children[1].textContent = `Your card has limit ${limit} $ cash withdrawal.`;
        allertMsg.textContent='';     
        }
    else {
        balance-=n;
        header.textContent = "Take your cash";
        msg.children[1].textContent = `Your current balance is ${balance}$`;
        allertMsg.textContent='';
        
        

    }
    isWithdraw = false;

}

function deposit() {
    btn1.style.backgroundColor = 'gray';
    btn2.style.backgroundColor = 'gray';
    btn3.style.backgroundColor = 'gray';
    
    header.textContent = "Cash deposition";
    text.textContent = "Insert cash into purple rectangle money slot";
    pinInput.type = "text";
    pinInput.value = '';
    pinInput.style.display = 'inline';
    allertMsg.textContent='(enter the sum and press money slot)';
    isDeposit = true;
    money.style.backgroundColor = 'purple';
}

function moneyDepositing() {
    let n = pinInput.value;
    pinInput.style.display = "none";
    pinInput.value = '';

    if (n === '') {       
        allertMsg.textContent='Money slot is empty';
         }
    else {
        text.textContent = `You add ${n}$ to your account`;
        balance+=Number(n);
        allertMsg.textContent=`current balance is ${balance}$`;

    }
    isDeposit = false;
    money.style.backgroundColor = 'gray';
}


function checkBalance() {
    btn1.style.backgroundColor = 'gray';
    btn2.style.backgroundColor = 'gray';
    btn3.style.backgroundColor = 'gray';
    header.textContent = "Card balance";
    text.textContent = `Your balance is ${balance} $`;
    pinInput.style.display = 'none';
    pinInput.value = "";
    allertMsg.textContent='';
   
    // console.log('balance');
}



function cancelTransaction() {
    header.textContent = 'Take you card';
    allertMsg.textContent='Your card have been ejected';
    startOver();
}

function startOver() {
    window.location=window.location;
}

card.addEventListener("click", insertCard);
money.addEventListener("click", moneyDepositing);
document.getElementById('clear').addEventListener('click', clearInput) ;
document.getElementById('numEnter').addEventListener('click', checkPIN);
btn1.addEventListener('click', withdraw);
btn2.addEventListener('click', deposit);
btn3.addEventListener('click', checkBalance);
btn4.addEventListener('click', cancelTransaction);