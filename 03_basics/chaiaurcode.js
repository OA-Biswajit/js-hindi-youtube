function One() {
    console.log("One")
    Two()
}
function Two() {
    console.log("Two")
    Three()
}
function Three() {
    console.log("Three")
}
One()
Two()
Three()

// This is how call stack works. By debugging in brouser snippet you can understant clearly