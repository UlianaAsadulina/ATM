const msg = document.querySelector(".messageArea");
const card = document.querySelector(".cardSlot");
const numPad = document.querySelector('.numPad');
const pinInput = document.querySelector('.inputPIN');
const pin=1234;
const allertMsg = document.querySelector('.alert');
// const caseArea = document.querySelector(".caseArea");
// const case1 = document.getElementById('case1');
// const case2 = document.getElementById('case2');
// const case3 = document.getElementById('case3');
// const case4 = document.getElementById('case4');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

let balance = 10000;



function insertCard() {
    msg.children[0].textContent = "Customer Validation";
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
    if (pinInput.getAttribute("type")==="password") {    
        if (Number(pinInput.value)==pin)
            welcomeUser();
        else {                   
            allertMsg.textContent = "Incorrect PIN. Try one more tyme.";       
            pinInput.value='';
        }
    } else 
        if  ((pinInput.getAttribute("type")==="text"))
            moneyDepositing();
}

function clearScreen () {
    pinInput.value='';
}

function welcomeUser () {    
    msg.children[0].textContent = "Welcome, Customer!";
    msg.children[1].textContent = "What do you want to do?"
    pinInput.style.display = "none";
    pinInput.value = '';
    allertMsg.textContent='';
    // case1. textContent = "withdraw cash";
    // case2. textContent = "deposit cash";
    // case3. textContent = "check balance";
    btn1.style.backgroundColor = 'red';
    btn2.style.backgroundColor = 'rgba(19, 140, 211, 0.877)';
    btn3.style.backgroundColor = 'green';
}

function withdraw() {
    btn1.style.backgroundColor = 'gray';
    btn2.style.backgroundColor = 'gray';
    btn3.style.backgroundColor = 'gray';
    msg.children[0].textContent = "Cash withdrawal";
    msg.children[1].textContent = "Enter amount";
    pinInput.setAttribute("type", "text");
    pinInput.style.display = "inline";
    pinInput.value = '';
    // case1. textContent = "";
    // case2. textContent = "";
    // case3. textContent = "";
    console.log('get money');
}

function deposit() {
    btn1.style.backgroundColor = 'gray';
    btn2.style.backgroundColor = 'gray';
    btn3.style.backgroundColor = 'gray';
    msg.children[0].textContent = "Cash deposition";
    msg.children[1].textContent = "Insert cash into purple rectangle money slot";
    pinInput.type = "text";
    pinInput.value = '';
    pinInput.style.display = 'inline';
    allertMsg.textContent='(enter the summ and press money slot)';
    // case1. textContent = "";
    // case2. textContent = "";
    // case3. textContent = "";
    
}

function moneyDepositing() {
    let n = pinInput.value;

    if (n === '') {       
        allertMsg.textContent='Money slot is empty';
    }
    else {
        msg.children[1].textContent = `You add ${n}$ to your account`;
        balance+=Number(n);
        allertMsg.textContent=`current balance is ${balance}$`;

    }
}

function checkBalance() {
    btn1.style.backgroundColor = 'gray';
    btn2.style.backgroundColor = 'gray';
    btn3.style.backgroundColor = 'gray';
    msg.children[0].textContent = "Card balance";
    msg.children[1].textContent = `Your balance is ${balance} $`;
    pinInput.style.display = 'none';
    pinInput.value = "";
    allertMsg.textContent='';
    // case1. textContent = "";
    // case2. textContent = "";
    // case3. textContent = "";
    console.log('balance');
}
card.addEventListener("click", insertCard);
document.getElementById('clear').addEventListener('click', clearScreen) ;
document.getElementById('numEnter').addEventListener('click', checkPIN);
btn1.addEventListener('click', withdraw);
btn2.addEventListener('click', deposit);
btn3.addEventListener('click', checkBalance);