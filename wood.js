function woodCalculator(chairQuantity, tablequantity, bedquantity){
    const perchairwood =3;
    const perTablewood =10;
    const perBedwood = 50;

    const chairwood = chairQuantity*perchairwood;
    const tablewood = tablequantity*perTablewood;
    const bedwood = bedquantity*perBedwood;

    const totalwood = chairwood+tablewood+bedwood;
    return totalwood;
}
const totalwood = woodCalculator(1,1,1);
console.log('total wood required:',totalwood);