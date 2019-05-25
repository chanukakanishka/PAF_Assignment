const User = require('../models/userModel')

module.exports.getAllUsers=function(){
    return User.findAll().then(res=>{
        console.log(res)
        resopnse={
            code:0,
            result: res,
            message:''
        }
        return resopnse 
    })
    .catch((err)=>{
        console.log(err)
        resopnse={
            code:1,
            result: err,
            message:err
        }
        return resopnse 
      })

    
}
module.exports.deleteUser = function(id){
    return User.destroy({where:{
        id:id
    }}).then(res=>{
        console.log(res)
        resopnse={
            code:0,
            result: res,
            message:''
        }
        return resopnse 
    })
    .catch((err)=>{
        console.log(err)
        resopnse={
            code:1,
            result: err,
            message:err
        }
        return resopnse 
      })
}


module.exports.FindUserById=function(id){
    return User.find({
        where:{
            id:id
        }
    }).then(res=>{
        resopnse={
            code:0,
            result: res,
            message:''
        }
        return resopnse 

    })
    .catch((err)=>{
        console.log(err)
        resopnse={
            code:1,
            result: res,
            message:err
        }
        return resopnse 
      })
}

module.exports.UpdateUser=function(user,id){
    let{
     
    email,
    Name,
    Address,
    PhoneNumber,
    user_type,
    password
    }=user
    return User.update (
        {
     
            email,
          Name,
            Address,
            PhoneNumber,
            user_type,
            password
            },{where:{id:id}}
    ).then(res=>{
        console.log(res)
        resopnse={
            code:0,
            result: res,
            message:''
        }
        return resopnse 

    })
    .catch((err)=>{
        console.log(err)
        resopnse={
            code:1,
            result: res,
            message:err
        }
        return resopnse 
      })

}



module.exports.CreateUser=function(user){
    let{
     
    email,
    Name,
    Address,
    PhoneNumber,
    user_type,
    password
    }=user
    return User.create (
        {
     
            email,
          Name,
            Address,
            PhoneNumber,
            user_type,
            password
            }
    ).then(res=>{
        console.log(res)
        resopnse={
            code:0,
            result: res,
            message:''
        }
        return resopnse 

    })
    .catch((err)=>{
        console.log(err)
        resopnse={
            code:1,
            result: res,
            message:err
        }
        return resopnse 
      })

}
module.exports.ValidateUser=function(obj){
    return User.findAll({
        where:{
            email:obj.email,
            password:obj.password
        }
    }).then(res=>{
        console.log(res)
        resopnse={
            code:0,
            result: res,
            message:''
        }
        return resopnse 

    })
    .catch((err)=>{
        console.log(err)
        resopnse={
            code:1,
            result: res,
            message:err
        }
        return resopnse 
      })

}
