
import { where } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);


const order = async (req, res) => {
    try {
        let { food_id ,user_id , amount , arr_sub_id} = req.body ;
        await model.orders.create({
            food_id,
            user_id ,
            amount ,
            arr_sub_id  
        })
        return res.status(201).json({message: "order"})

    } catch (error) {
    return res.status(500).json({message: "erorr order"})
    }
}

export {
    order,
}