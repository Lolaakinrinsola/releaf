const User=require('../Model/userModel')

exports.getAllUsers=async(req,res)=>{
    try {
        const queryObj= req.query.q 
        const regex =new RegExp(queryObj,'i')
        const query= User.find({
            $or: [
              { firstname: regex },
              { lastname: regex },
              { address: regex },
            ],
          })

        const users=await query
        if (users.length === 0) {
            // No matches found, handle the case
            return res.status(404).json({
                status: 'fail',
                message: 'No match',
                data:{
                    suggestions:users
                }
            });
        }
         res.status(200).json({
             status:'success',
             data:{
                 suggestions:users
             }
         })
    } catch (error) {
        res.status(500).json({
            status:'fail',
            message:error
        })
    }
}