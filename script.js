function addbudgetamt(){
    var bgtamt=document.getElementById('getbudgetamt').value;
    document.getElementById('setbudget').innerHTML=`${bgtamt}`;
}
function addexpense(){
    var bgtamt=document.getElementById('getbudgetamt').value;
    var expensedescription=document.getElementById('getexpensetitle').value;
    var expenseamnt=document.getElementById('getexpenseamount').value;
    var balaceremaining = `${bgtamt}`-`${expenseamnt}`;
    document.getElementById('setexpense').innerHTML=`${expenseamnt}`;
    document.getElementById('setbalance').innerHTML=`${balaceremaining}`;
document.getElementById('expensemanager').innerHTML=` <b>Title &nbsp; Amount</b><br>${expensedescription} &nbsp; ${expenseamnt} `;
}