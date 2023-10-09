const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://sarbas:vL2IiHzb5MI2EKP6@cluster0.5ubfepr.mongodb.net/?retryWrites=true&w=majority";

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    // try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    // } catch (err) {
    //     console.log(err.stack);
    // }
    // finally {
    //     await client.close();
    // }
}

run().catch(console.dir);