const balance=document.querySelector("#balance");
const inc_amt=document.querySelector("#inc-amt");
const exp_amt=document.querySelector("#exp-amt");
const trans=document.querySelector("#trans");
const form=document.querySelector("#form");
const description=document.querySelector("#desc");
const amount=document.querySelector("#amt");

const dummyData=[
    {id:1,description:"Flower",amount:-20},
    {id:2,description:"Salary",amount:2000},
    {id:3,description:"Book",amount:-200},
    {id:4,description:"Camera",amount:-2500},
];

let transaction=dummyData;

function loadTransactionDetails(transaction){
    const sign=transaction.amount < 0 ? "-":"+";
    const item=document.createElement("li");
    item.classList.add(transaction.amount <0 ? "exp" :"inc");   
    item.innerHTML=`
    ${transaction.description}
    <span>${sign} ${Math.abs(transaction.amount)}</span> 
    <button class="btn-del" onclick="removeTrans($ {transaction.id})"> x </button>
    `; 
    trans.appendChild(item);
    console.log(transaction);
}

function removeTrans(id){
    if(confirm("Are you sure you want to delete Tranasaction"
    )){
        transaction=transaction.filter((transaction) =>
        transaction.id !=id);
        config();
    } else{
        return;
    }

;}

function config(){
    trans.innerHTML="";     /* remove list */
    transaction.forEach(loadTransactionDetails);
}

window.addEventListener("load",function(){
    config();
})