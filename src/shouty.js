class Person {
    position = 0
    messages = new Array()

    locateAt(position) {
        this.position = position
    }
    shout(message, persons){
        for (const person of persons) {
            if(person.distanceTo(this) < 50) {
                person.messages.push(message)
            }
        }
    }
    distanceTo(OtherPerson) {
        return Math.abs(OtherPerson.position-this.position)
    }
    messagesHeard() {
        return this.messages
    }

}

module.exports = Person