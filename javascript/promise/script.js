console.log(1);
console.log(2);
setTimeout(() => console.log(3), 1000);
setTimeout(() => console.log(5), 100);
console.log(4);


function add1000() {
    let result = 0
    for (let i = 1; i <= 900000000; i++) {
        result += i
    }
    return result
}

function add1000later(){
    return new Promise((resolve)=>resolve(add1000()));
}

console.log("some processes");
add1000later()
    .then((result)=>{
        console.log(result);
        return "Successfully completed";
    })
    .then(result=>{
        console.log(result);
    });
console.log("more processes");

