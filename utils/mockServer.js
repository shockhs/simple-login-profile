const uuid = require('uuid')

const users = []

function getUser(username) {
    const user = users.find(u => u.username === username)
    if (!user) return null
    return user
}
function addUser(username) {
    const user = { username, id: uuid.v4(), email: `${username.toLowerCase()}@example.org` }
    users.push(user)
    return user
}


export default { getUser, addUser, users }