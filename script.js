// Ticket quantity handler
function handleTicketChange(ticketClass, isTicketIncrease){
    const ticketInput = getInput(ticketClass);
    let  ticketNewCount = ticketInput;
    if(isTicketIncrease == true && ticketNewCount>=0)
    {
        ticketNewCount = ticketInput+1;
    }
    else if(isTicketIncrease == false && ticketNewCount>0){
        
        ticketNewCount = ticketInput-1;
    }
    document.getElementById(ticketClass +"-TicketCount").value = ticketNewCount;
    calculateTotalPrice();
   
}

//Calculation of ticket price
function calculateTotalPrice(){
   const firstClassTicketCount = getInput("firstClass");
   const economyClassTicketCount = getInput("economyClass");
   const subTotalPrice = firstClassTicketCount*150 + economyClassTicketCount*100;
   document.getElementById("sub-totalPrice").innerText = "$"+subTotalPrice;
    const tax = subTotalPrice *0.1;
    document.getElementById("tax").innerText = "$"+ tax;
    const totalPrice = subTotalPrice+tax;
    document.getElementById("totalPrice").innerText="$"+ totalPrice;
  
}

//Get input for ticket
function getInput(ticketClass)
{
    const setInput = document.getElementById(ticketClass +'-TicketCount');
    const setCount = parseInt(setInput.value);
    return setCount;
}


//Showing information about booking.
document.getElementById("bookingBtn").addEventListener("click",function(){
    alert="Are you sure?";
    document.getElementById("bookingMainPage").style.display="none";
    document.getElementById("bookingInfoPage").style.display="block";
    document.getElementById("totalFirstClassTicket").innerText = document.getElementById("firstClass-TicketCount").value;
    document.getElementById("totalEconomyClassTicket").innerText = document.getElementById("economyClass-TicketCount").value;
    document.getElementById("subTotalTicketsPrice").innerText = document.getElementById("sub-totalPrice").innerText;
    document.getElementById("totalTaxInfo").innerText = document.getElementById("tax").innerText;
    document.getElementById("totalTaxInfo").innerText = document.getElementById("tax").innerText;
    document.getElementById("totalPriceOfTicket").innerText = document.getElementById("totalPrice").innerText;

})



