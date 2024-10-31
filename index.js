import express from "express";
import connect from "./db.js";
import rootRoutes from "./src/routes/rootRoutes.js";


// tạo object tổng của express

const app = express();

// thêm middleware để convert string về json với api post , put
app.use(express.json());

app.use(rootRoutes)


app.listen(8080, ()=>{
    console.log("BE strating with port 8080")
}); 

