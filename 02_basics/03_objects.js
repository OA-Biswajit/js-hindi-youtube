// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function() {
    console.log(`HEllo JS user`);
}
// freeze karne par function nahi chalega

// console.log(JsUser.greeting());
// console.log(JsUser.greeting);

JsUser.greetingTwo=function() {
    console.log(`HEllo JS user Two ${this.name}`);
    // console.log(`HEllo JS user Two ${JsUser.name}`);
}

JsUser.greeting()
JsUser.greetingTwo()



