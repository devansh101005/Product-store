import arcjet,{tokenBucket,shield,detectBot} from "@arcjet/node";

import "dotenv/config";

export const aj =arcjet({
    key:process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules:[
        //shield dprotects our app from common attacks like sql injection,xss,csrf attacks
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            //blocks all botsexcept serach engine
            allow:[
                "CATEGORY:SEARCH_ENGINE",
                //there are multiple bots which we can see on arcjet
            ],
        }),
        //Rate limiting
        tokenBucket({
      mode: "LIVE",
      refillRate: 30, // Refill 5 tokens per interval
      interval: 5, // Refill every 10 seconds
      capacity: 20, // Bucket capacity of 10 tokens
    }),

    ]
})