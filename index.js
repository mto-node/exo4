require('dotenv').config()
const Msg = process.env.MESSAGE
console.log(Msg)
console.log(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY }, and I love ${process.env.MY_LANGUAGE}`)
