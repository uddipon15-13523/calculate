function getSumOfAnArray(numbers){
    for(let i =0; i< numbers.lenght; i++){
        const index =i;
        const element = numbers[index]
        console.log(index,element);
    }
    
}
const myNumbers = [12,65,45,78,32,45,91];
getSumOfAnArray(myNumbers);