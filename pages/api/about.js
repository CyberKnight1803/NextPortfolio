import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
    let client = await clientPromise;
    const db = client.db("portfolio");

    switch(req.method){
        case "POST":
            break;
        
        case "GET":
            const userInfo = await db.collection("about").find({}).toArray();
            res.json({ status: 200, userInfo: userInfo});
            break;
    }
};

export default handler;