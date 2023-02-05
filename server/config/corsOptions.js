const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    origin: (origin, callback) => {    
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            const origin_check = allowedOrigins.indexOf(origin)
            callback(new Error(`Not allowed by CORS and the origin is: ${origin}  ${origin_check} ${allowedOrigins}`))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 