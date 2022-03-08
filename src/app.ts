let amount = (document.querySelector('#amount') as HTMLElement)
let total =(document.querySelector('#total') as HTMLElement)
const tipButtons = document.querySelectorAll('.grid button')
const reset=document.querySelector('#reset')
let selectTip:string[] = []

const readInputs = () => {
   let billInput =parseFloat((document.querySelector('#bill-input') as HTMLInputElement).value)
    let peopleInput = parseFloat((document.querySelector('#people-input') as HTMLInputElement).value)
    const people =Number(peopleInput)
    const procent=Number(selectTip[0])/100
    if(!isNaN(billInput) || !isNaN(peopleInput) || peopleInput !== 0){
amount.innerText=`${(billInput*procent/people).toFixed(2)}`
total.innerText=`${(billInput*(1+procent)/people).toFixed(2)}`;
(document.querySelector('#bill-input') as HTMLInputElement).classList.remove('error');
(document.querySelector('#people-input') as HTMLInputElement).classList.remove('error')
   }if(isNaN(billInput) || isNaN(peopleInput) || peopleInput == 0){
         amount.innerText='0';
         total.innerText='0';
         (document.querySelector('#bill-input') as HTMLInputElement).classList.add('error');
         (document.querySelector('#people-input') as HTMLInputElement).classList.add('error')
   }
}
tipButtons.forEach(button => {
    button.addEventListener('click', (e) => { 
        selectTip.splice(0,1,(<HTMLElement> e.target).id)
        readInputs()
    })   
})
reset.addEventListener('click',()=>{
 const inputBill:HTMLInputElement=document.querySelector('#bill-input') 
 const inputPeople:HTMLInputElement=document.querySelector('#people-input') 
    amount.innerText='0'
    total.innerText='0'
    selectTip.splice(0,1)
    inputBill.value=''
    inputPeople.value=''
})
