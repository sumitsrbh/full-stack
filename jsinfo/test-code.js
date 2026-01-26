let calculator={
    read(){
        let a =prompt("Enter first value")
        let b =prompt("Enter second value")
        return {
            a,b
        }
    },
    sum(){
        return this.a +this.b
    },
    mul(){
        return this.a*this.b
    }

}