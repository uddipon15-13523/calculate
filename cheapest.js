const phones =[
    {name:'samsung', camera:12,storage:'32g',price:36000,color:'sliver'},
    {name:'walton', camera:12,storage:'32g',price:36000,color:'sliver'},
    {name:'iphone', camera:12,storage:'32g',price:36000,color:'sliver'},
    {name:'xaomi', camera:12,storage:'32g',price:36000,color:'sliver'},
    {name:'oppo', camera:12,storage:'32g',price:36000,color:'sliver'},
    {name:'Nokia', camera:12,storage:'32g',price:36000,color:'sliver'},
    {name:'HTC', camera:12,storage:'32g',price:36000,color:'sliver'},
    
];
function cheapestphone(phones){
    for(let i =0;i<phones.length;i++){
        const phone =phones[i];
        console.log(phone);
    }
}
const mySelection = cheapestphone(phones);