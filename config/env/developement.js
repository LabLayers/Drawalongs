'use strict';

module.exports = {
    db: "mongodb://apple-the-pie-952:edefAKJOBIraet@ds027519.mongolab.com:27519/coder-the-coder-200",
    app: {
        name: "Drawalongs"
    },
    deviantart: {
        clientID: "60",
        clientSecret: "be6c2e6ea6855630cada48a6a8ec405f",
        callbackURL: "http://localhost:3000/auth/deviantart/callback"
    },
    facebook: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "6bo9xdyNsWO36tILRC9a5g",
        clientSecret: "VdJ96Z54beb6arUZncp58JrgUS0dEurSsfVzKp1Apiw",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "f615c861e4888633d7de",
        clientSecret: "92151fedac5cf062ab0ec862c958b9e5a0a54e13",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "782868735274-7e3rue8se1vrik08lluto6a7qn1jf2aq",
        clientSecret: "N7Qke22sZ4RIjr6wKizXDjf6",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}