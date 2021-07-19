$(".SE").attr("href", "http://meet.google.com/zca-hgss-qos"); 
$(".CN").attr("href", "https://meet.google.com/lookup/cn7qapcsoa"); 
$(".DAA").attr("href", "http://meet.google.com/nsk-kawh-zgv");
$(".ITC").attr("href", "https://meet.google.com/lookup/eaeuhqpwkl?authuser=0&hs=179");
$(".DBMS").attr("href", "http://meet.google.com/kad-tzjp-sek"); 
$(".CRY").attr("href", "https://meet.google.com/lookup/d7ghplms6c"); 
$(".DBMS-LAB").attr("href", "http://meet.google.com/kad-tzjp-sek");
$(".ALGO-LAB").attr("href", "http://meet.google.com/nsk-kawh-zgv");
$(".CN-LAB").attr("href", "https://meet.google.com/lookup/cn7qapcsoa");


var date = new Date();
var hr=date.getHours();
var row=date.getDay();
if(row==0)
{
    row=7;
}
row--;
var col=hr-8; 

if(row>=0 && row<5)
{
    $("tbody tr")[row].classList.add("day");
    if(col>0 && col<10)
    {
        if($("tbody tr")[row].children[col].firstChild!="")
        {
            $("tbody tr")[row].children[col].classList.add("time");
        }
    }
}


$("a").click(function(event){
    if(row<5 && col<10){
    if(event.target.innerText!=$("tbody tr")[row].cells[col].innerText){
    event.stopImmediatePropagation();
    if(!confirm('Class may not be active. Do you wish to proceed ?'))
    {
        event.preventDefault();
    }
    }
    }
    else
    {
        event.stopImmediatePropagation();
        if(!confirm('Class may not be active. Do you wish to proceed ?'))
        {
        event.preventDefault();
        }
    }

});