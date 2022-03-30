const myNumber = 2
let result
let power
for (let i=1; i < Infinity; i++){
    power = i
    result = Math.pow(myNumber, power)
    console.log(result)

    if (result>1000){
        break
    }
}

 