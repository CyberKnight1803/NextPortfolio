import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
    let client = await clientPromise;
    const db = client.db("portfolio");

    switch(req.method){
        case "POST":
            break;
        
        case "GET":
            const expData = await db.collection("experience").find({}).toArray();
            res.json({status: 200, expData: expData});
            break;
    }
};

export default handler;