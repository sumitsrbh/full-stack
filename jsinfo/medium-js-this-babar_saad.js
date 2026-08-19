#! usr/bin/env node

class Counter{
	constructor(button){
		this.count=0
		this.button=button
	}
	increment(){
		this.count++
		console.log(`Count is now ${this.count}`)
	}
	attachTo(button){
		


