/*
1.if ticket numbers is less than 100, per ticket price:100
2.if ticket numbers is more than 100,but less than 200. First 100 tickets will be 100/ticket rest tickets will be 90 taka per piece
3.if you purchase more than 200 tickets
 first 100---> 100tk
 101-200---> 90 tk
 200+---> 70 tk
*/
function ticketPrice(ticketQuantity){
    const first100Rate =100;
    const second100Rate =90;
    const restTicketRate =70;
    if(ticketQuantity<= 100){
    const price = ticketQuantity*first100Rate;
    return price;
    }
    else if(ticketQuantity <=200){
        const first100price =100* first100Rate;
        const restTicketQuantity = ticketQuantity-100;
        const restTicketPrice = restTicketQuantity*second100Rate;
        const totalprice = first100price+restTicketPrice;
        return totalprice;
    }
    else{
        const first100Price = 100*first100Rate;
        const second100Price =100*second100Rate;
        const restTicketQuantity =restTicketQuantity-200;
        const restTicketPrice = restTicketQuantity*restTicketRate;
        const totalCost = first100Price+second100Price+restTicketPrice;
        return totalCost;
    }
}
const price = ticketPrice(120);
console.log('price',price);