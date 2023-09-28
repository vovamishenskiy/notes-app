// const mongoose = require('mongoose')

// module.exports = async (server) => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI)
//         console.log('connected to db')

//         await server.listen(process.env.PORT || 5000, () => {
//             console.log(`server is running on port ${process.env.PORT}`)
//         })
//     }
//     catch (error) {
//         console.log('mongo connection failed')
//         console.log(error)
//         process.exit(1)
//     }
// }