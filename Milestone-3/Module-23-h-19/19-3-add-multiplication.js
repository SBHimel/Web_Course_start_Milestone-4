function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairwood = 3;
    const perTableWood =10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairwood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalwood = bedQuantity * perBedWood;
    
    const totalWood = chairTotalWood + tableTotalWood + bedTotalwood;

    return totalWood;
}
const wood = woodQuantity(0,0,3);
console.log('wood needed:', wood);

/* ----------------market-----------------
* shirt price --> 500
*pant price --> 300
*shoe price --> 900
*/

function market (shirt, pant, shoe){
    const shirtPerPrice = 500;
    const pantPerPrice = 300;
    const shoePerPrice = 900;

    const shirtPrice = shirt * shirtPerPrice;
    const pantPrice = pant * pantPerPrice;
    const shoePrice = shoe * shoePerPrice;

    const totalMarket = shirtPrice+pantPrice+shoePrice;
    return totalMarket;
}
console.log(market(2,0,0))