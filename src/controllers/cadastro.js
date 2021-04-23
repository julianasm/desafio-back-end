const models = require('../models');
const Users = models.users;

const cadastroController = {
    get: async (req, res) => {
    try {
        const result = await Users.findAll();
        return res.json(result)
        
    } catch (e) {
        return res.json({err: e}).status(400);
    }
    },
    store: async (req, res) => {
        try {
            console.log(req.body)
            const result = await Users.create(req.body) 
            if (!result){
                res.json({err: "Nao foi possivel criar usuario"}).status(400);
            } 
            return res.json(result.dataValues);
        } catch (e) {
            console.log(e)
            return res.json({err: e}).status(400)
        }
    },
}


module.exports = cadastroController