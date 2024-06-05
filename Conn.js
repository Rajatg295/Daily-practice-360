const mongoose=require('mongoose');

const conn = async (req, res) => {
    try{
        
        // mongoose.connect(`mongodb+srv://goel85749:Rajat@1997@cluster0.mvbvjwe.mongodb.net/rajat?retryWrites=true&w=majority&appName=Cluster0`)
        mongoose.connect(`mongodb+srv://goel85749:${encodeURIComponent('Rajat@1997')}@cluster0.mvbvjwe.mongodb.net/rajat?retryWrites=true&w=majority&appName=Cluster0`)
        .then(()=> {
            console.log("Database Connected");
        })   
    }catch{

        console.log("Database not connected");
    }
}

conn();
