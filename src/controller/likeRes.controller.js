import { where } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const likeResByResId = async  (req, res ) => {
    try {
        let {res_id} = req.params ;
       let likeRes = await model.like_res.findAll({
        where : {
            res_id
        }
       })
        return res.status(200).json(likeRes);
        
    } catch (error) {
        return res.status(500).json({message: "inter"})
    }
}

const likeResByUserId = async (req, res) =>{
    try {
        let {user_id} = req.params;
    let likeResByUser = await model.like_res.findAll({
        where: {user_id}
    })
    return res.status(200).json(likeResByUser)
    } catch (error) {
        return res.status(500).json({message: "erorr like res by uers"})
    }

}

const likeRes = async (req,res) => {
    try {
    let {res_id} = req.body ;
     await model.like_res.create({
          res_id 
     })
    return res.status(201).json({message: "likeRes"});
    } catch (error) {
     return res.status(500).json({message: "erorr like res"})   
    }
}
const dislikeRes = async (req, res) =>{
    try {
        let {res_id , user_id} = req.params; 
        await model.like_res.destroy({
            where: { res_id,user_id}
        })
        return res.status(200).json({message: "dislike success"})
    } catch (error) {
        return res.status(500).json({message: "erorr delete like"})
    }
}   
export {
    likeResByResId,likeResByUserId,likeRes,dislikeRes
}