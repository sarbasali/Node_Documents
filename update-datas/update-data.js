const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://sarbas:vL2IiHzb5MI2EKP6@cluster0.5ubfepr.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);
 
 // Reference the database to use
 const dbName = "gettingStarted";
                      
 async function run() {
    try {
        // Connect to the Atlas cluster
         await client.connect();
         const db = client.db(dbName);

         // Reference the "people" collection in the specified database
         const col = db.collection("people");

         // Create a new document                                                                                                                                           
        //  let personDocument = {
        //      "name": { "first": "Alan", "last": "Turing" },
        //      "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
        //      "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
        //      "contribs": [ "Turing machine", "Turing test", "Turingery" ],
        //      "views": 1250000
        //  }

        let person=[
            {
                     "name": { "first": "sarbas", "last": "Turing" },
                     "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
                     "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
                     "contribs": [ "Turing machine", "Turing test", "Turingery" ],
                     "views": 1250000
                 },
                 {
                    "name": { "first": "sarbas1", "last": "Turing" },
                    "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
                    "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
                    "contribs": [ "Turing machine", "Turing test", "Turingery" ],
                    "views": 1250000
                },
                {
                    "name": { "first": "sarbas2", "last": "Turing" },
                    "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
                    "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
                    "contribs": [ "Turing machine", "Turing test", "Turingery" ],
                    "views": 1250000
                },
                {
                    "name": { "first": "sarbas3", "last": "Turing" },
                    "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
                    "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
                    "contribs": [ "Turing machine", "Turing test", "Turingery" ],
                    "views": 1250000
                }
        ]

        

         // update and find return the document
         const filter = { "name.first": "sarbas" };

         const document = await col.updateOne(filter,{$set:{"name.last":"ali"}}).then(async()=>{
           const find=await col.findOne({"name.last":"ali"})
         console.log("Document found:\n" + JSON.stringify(find));

         })

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);
