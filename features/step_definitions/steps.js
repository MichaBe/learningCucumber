const Person = require("../../src/shouty")
const { Given, When, Then } = require("@cucumber/cucumber")
const { assertThat, contains } = require("hamjest")

Given("MrX is located {int} metres from MrY", function(distance){
    console.log(distance)
    this.MrX = new Person
    this.MrY = new Person
    this.MrX.locateAt(distance)
})

When("MrY shouts {string}", function(message){
    this.MrY.shout(message, new Array(this.MrX))
    this.message = message
})

Then("MrX can hear MrY\'s message", function() {
    assertThat(this.MrX.messagesHeard(), contains(this.message))
})