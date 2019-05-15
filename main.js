class User {
  constructor(email, password) {
    this.email = email
    this.password = password
    this.inbox = []
  }

  sendMessage(rec) {
    let msg = new Message()
    rec.inbox.push(msg)
  }
}

class Message {
  constructor(content) {
    this.content = prompt('Enter a message')
  }
}

user1 = new User('ayoo@mail.com', '9723')

user2 = new User('whatup@mail.com', 'asdfgh')
