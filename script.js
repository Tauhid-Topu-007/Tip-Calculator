const billEl= document.getElementById('bill');
const tipEl= document.getElementById('tip');
const btnEl= document.getElementById('calculate');
const totalEl=document.getElementById('total');

btnEl.addEventListener('click',()=>{
    const billVal= billEl.value;
    const tipVal= tipEl.value;
    const totalVal=billVal * (1+tipVal/100);

    totalEl.innerText="$" + totalVal.toFixed(2);

})