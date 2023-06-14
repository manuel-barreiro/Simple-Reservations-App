const Reserv = require('../models/reservation')

module.exports = {
    getRes: async (req,res)=>{
        console.log(req.user)
        try{
            const reservations = await Reserv.find({userId:req.user.id})
            res.render('mainPage.ejs', {res: reservations, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createRes: async (req, res)=>{
        try{
            await Reserv.create({people: req.body.people, fecha: req.body.fecha, horario: req.body.horario, completed: false, userId: req.user.id})
            console.log('Reservation added!')
            res.redirect('/reservations')
        }catch(err){
            console.log(err)
        }
    },
    deleteRes: async (req, res)=>{
        console.log(req.body.resIdFromJSFile)
        try{
            await Reserv.findOneAndDelete({_id:req.body.resIdFromJSFile})
            console.log('Deleted reservation')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    