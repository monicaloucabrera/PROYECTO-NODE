const crypto = require("crypto")

const secret = crypto.randomBytes(32).toString("hex")

console.log(secret)//71b8b7236a031c1ef2acb749d59fcd295b06b3dc7c2905994c62763b9ed92564