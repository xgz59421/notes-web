var users = [
  { name: 'tom', email: 'tom@example.com' },
  { name: 'peter', email: 'peter@example.com' }
]

users
  .map(function(user) {
    // [ 'tom@example.com', 'peter@example.com' ]
    return user.email
  })
  .filter(function(email) {
    // [ 'tom@example.com']
    return /^t/.test(email)
  })
  .forEach(function(email) {
    // 'tom@example.com'
    console.log(email)
  })