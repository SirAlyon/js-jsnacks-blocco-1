const myNumber = 2
let result
for (let i=1; i < Infinity; i++){
    let power = i
    result = Math.pow(myNumber, power)
    console.log(result)
    if (result>511){
        break
    }
}

