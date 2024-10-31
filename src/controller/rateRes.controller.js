import { where } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const rateResByRes = async (req, res) => {
    try {
        let {res_id} = req.params ;
        let rateRes = await model.rate_res.findAll ({
            where : {
                res_id
            }
        })
        
    return res.status(200).json(rateRes);
    } catch (error) {
        return res.status(500).json({message: "erorr"})
    }
}

const rateResByUser = async (req, res) => {
    try {
        let {user_id} = req.params ;
        let rateResbyuser = await model.rate_res.findAll ({
            where : {
                user_id
            }
        })
        
    return res.status(200).json(rateResbyuser);
    } catch (error) {
        return res.status(500).json({message: "erorr"})
    }
}

const rateRes = async (req, res) => {
    try {
        let {user_id , res_id , amount } = req.body ;
        await model.rate_res.create({
            user_id , res_id , amount
        })
        return res.status(201).json({message: "success"})
    } catch (error) {
        return res.status(500).json({message: "erorr order"})
   
    }
}

export {
    rateResByRes,
    rateResByUser,
    rateRes,
}