const names =['abule','babul','cabul','dabul','ebul','babul','abul','kabul','gabul','cabul','babul','abul','abul'];

function remotedeuplicate(names){
    const unique =[];
    for(let i =0;i<names.length;i++){
        const name = names[i];
        if(unique.includes(name)==false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = remotedeuplicate(names);
console.log(uniqueName);