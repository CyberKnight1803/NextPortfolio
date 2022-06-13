import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
    let client = await clientPromise;
    const db = client.db("portfolio");

    switch(req.method){
        case "POST":
            break;
        
        case "GET":
            const projectData = await db.collection("projects").find({}).toArray()
            res.json({ status: 200, projectData: projectData});
            break;
    }
};

export default handler;