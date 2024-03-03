const UserModel =require('../models/UserModel')

// ***********************User Create start*************************
exports.createUser = async(req,res)=>{
    const data = req.body;
    try {
        const result= await UserModel.create(data);
        res.status(201).json({status:"success", message:"User create successfully", data: result});
    }
    catch (error) {
        res.status(400).json({status:"Failed", message:error.message})

    }
    
};
//  ***********************User Create End**************************

// ***********************Read Start**************************

exports.getAllUser=async(req,res)=>{
    try{
         const query={};
          const project={_id:1, userName:1, email:1, password:1,};
         const result= await UserModel.find(query,project);
         res.status(200).json({status:"success", message:"User fatch successfully", data: result});

    }
    catch (error) {
        res.status(400).json({status:"Failed", message:error.message})

    }

     
}

// ***********************Read end**************************

// ***********************User update start**************************

exports.updateUser= async(req,res)=>{

const userId= req.params.id ;
const updateData=req.body;
const query={_id: userId };
try {
    const result= await UserModel.updateOne(query,updateData);
    res.status(200).json({status:"success", message:"User update successfully", data: result});
}
catch (error) {
    res.status(400).json({status:"Failed", message:error.message})

}
}

// ***********************User update end**************************

// ***********************User delete start**************************
exports.deleteUser= async(req,res)=>{

    const userId= req.params.id ;
    const query={_id: userId };
    try {
        const result= await UserModel.deleteOne(query);

        if(result.deletedCount>0){
            res.status(200).json({status:"success", message:"User delete successfully",});
        }
        else{
            res.status(404).json({status:"failed", message:"User not found",});
        }
       
    }
    catch (error) {
        res.status(400).json({status:"Failed", message:error.message})
    
    }
    }

// ***********************User delete end**************************