$(".SE").attr("href", "http://meet.google.com/zca-hgss-qos"); 
$(".CN").attr("href", "https://meet.google.com/lookup/cn7qapcsoa"); 
$(".DAA").attr("href", "http://meet.google.com/nsk-kawh-zgv");
$(".ITC").attr("href", "https://meet.google.com/zkn-kubc-enj");
$(".DBMS").attr("href", "http://meet.google.com/kad-tzjp-sek"); 
$(".CRY").attr("href", "https://meet.google.com/lookup/d7ghplms6c"); 
$(".DBMS-LAB").attr("href", "http://meet.google.com/kad-tzjp-sek");
$(".ALGO-LAB").attr("href", "http://meet.google.com/nsk-kawh-zgv");
$(".CN-LAB").attr("href", "https://meet.google.com/lookup/cn7qapcsoa");

const date = new Date();
var hr=date.getHours();
const row=date.getDay();
const col=hr-8; 

if(row>0 && row<6)
{
    $("tbody tr")[row-1].classList.add("day");
    if(col>0 && col<10)
    {
        if($("tbody tr")[row-1].children[col].firstChild!="")
        {
            $("tbody tr")[row-1].children[col].classList.add("time");
        }
    }
}

$("a").click(function(event){
    if(!confirm('Class may not be active. Do you wish to proceed ?'))
    {
        location.href=self.location;
    }
});