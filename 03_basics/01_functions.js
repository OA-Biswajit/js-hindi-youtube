function sayMyname() {
    
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyname()

// function AddTwhoNumbers(number1,number2) {
    
// console.log(number1 + number2);
// }
//  AddTwhoNumbers(3,4)

function AddTwhoNumbers(number1,number2) {
    return number1 + number2
    }
    const result= AddTwhoNumbers(3,4)
    // console.log("result" , result);

    function loginUserMaessage(username = "sam") {
        if (!username) {
            console.log("please enter your username");
            return 
        }
        return `${username} just logged in`
    }
    // console.log(loginUserMaessage("hitesh"))

    function calculateCartPrice(val1,val2, ...num1) {
        return num1
    }

    // console.log(calculateCartPrice(200,400,500));

    const user ={
        user:"hitesh",
        price:199
    }

    function handleObject(anyobject) {
     console.log(`usename is ${anyobject.username} and the price is ${anyobject.price}`);   
    }

    // handleObject({user})
    handleObject({
        user:"hitesh",
        price:199
    })

    const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
    