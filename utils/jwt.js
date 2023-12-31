const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY } = require("../constants")


function createAccessToken (user) {
    const expirationToken = new Date()
    expirationToken.setHours(expirationToken.getHours() + 3)

    const payLoad = {
        token_type: "access",
        user_id: user._id,
        lat: Date.now(),
        exp: expirationToken.getTime()

    }
    return jwt.sign(payLoad, JWT_SECRET_KEY)
}

function createRefreshToken (user) {
    const expirationToken = new Date()
    expirationToken.getMonth(expirationToken.getMonth() + 1)

    const payLoad = {
        token_type: "refresh",
        user_id: user._id,
        lat: Date.now(),
        exp: expirationToken.getTime()

    }
    return jwt.sign(payLoad, JWT_SECRET_KEY)
}

function decoded(token){
    return jwt.decode(token, JWT_SECRET_KEY, true)
}

module.exports = {
createAccessToken,
createRefreshToken,
decoded,
}