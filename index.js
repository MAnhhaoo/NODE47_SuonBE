import express from "express";
import connect from "./db.js";


// tạo object tổng của express

const app = express();

// thêm middleware để convert string về json với api post , put
app.use(express.json());

// viết API hello world

app.get("/hello-world" , (req, res)=>{
    res.send("hello world")
})

app.get("/anhhao",(req,res)=>{
    res.send("toi la anh hao")
})

// lấy thông tin data từ params , query string , headers , body 
// http://localhost:8080/get-user/1
app.get("/get-user/:id/:hoten",(req,res)=>{
    // lấy id từ url
    // define 1 biến từ id thì phải lấy id từ params
    let {id,hoten} = req.params;
    let {queryString} = req.query; 
    let {token} = req.headers;
    res.send({id,hoten , queryString , token});
})


// lấy body từ API post (create) và put (update)
app.post("/creat-user" , (req,res)=>{
    let body = req.body;
    res.send(body);
})

// khi call tới data , fb , gg thì phải dùng tới async await
app.get("/get-user-db" , async (req ,res )=> {
   const [data] = await connect.query(
    `
    select * from users
    `
   ) 
   res.send(data);

})

app.post("/creat-user-db" , async (req, res) => {
    const query = `
        insert into user (full_name , email , password) values (? , ? , ?)
    `
    let body = req.body
    let {full_name , email , password} =body;
     const [data]  = await connect.execute(query, [full_name , email , password])
        
        return res.send(data);
    })


// define port cho cho BE 
app.listen(8080, ()=>{
    console.log("BE strating with port 8080")
}); 

