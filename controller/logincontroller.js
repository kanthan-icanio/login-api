const usercontroller = require("../modul/loginschema")

module.exports = {
    sigin : async (req, res) => {
        const user =  new usercontroller({
            username: req.body.username,
            password: req.body.password,
        })

        try{
            const value = await usercontroller.findOne({username: req.body.username,password: req.body.password})
            if(value){
                res.status(500).json({ message: "pls try another username or password" })
            }else{
               const a1 = await user.save()
            if(a1){
                // console.log("success")
                res.status(500).json({ message: " created" , data: a1})
            }else{ 
                console.log(Error)
                res.status(500).json({ message: "not created "})
            } 
            }
            
        }catch (err) {
            res.status(500).json({ message: "Error " })
            console.log(err)
        }
    },
    user : async (req , res) =>{
        try{
        const user = await usercontroller.find()
        if(user){
            // console.log(user)
            res.status(500).json({ message: "success" , data : user })
        }else{
            res.status(500).json({ message: "null" })        
        }
        }catch (err){
            res.status(500).json({ message: "Error " })
        }
    },
    login : async (req , res) =>{
        const user =  new usercontroller({
            username: req.body.username,
            password: req.body.password,
        })
        const value = await usercontroller.findOne({username: req.body.username,password: req.body.password})
        // const username = value.username
        // const password = value.password
        // console.log(user.password)
        const user1 = user.username
        const password1 = user.password
        const user2 = value.username
        const password2 = value.password
        if(user1 == user2 && password1 == password2){
            res.status(200).json({ message: "login"})
        }else{
            res.status(500).json({ message: "invalid" })

        }
    }
}