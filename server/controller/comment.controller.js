import { request } from 'express';
import Comment from '../model/comment.js';

export const newComment=async(request,response)=>{


    try{

        const comment=await new Comment (request.body);
        comment.save();
        response.status(200).json({msg:'comment saved successfully'})

    }catch(error){
        response.status(500).json({error:error.message})

    }
}

export const getComments=async (request,response)=>{

    // console.log(request.query.id);
   
try{
   const comments= await Comment.find({postId:request.query.id})
   
  response.status(200).json(comments);

}catch(error){

    response.status(500).json({error:error.message});

}

}
export const deleteComment=async(request,response) => {
     
    console.log(request.params.id);
    
    try{
        const comment=await Comment.findByIdAndRemove(request.params.id);
        console.log(comment);

        // await comment.delete();

        response.status(200).json({msg:'comment deleted successfully'})
    }catch(error){
      
        response.status(500).json({error:error.message})
    }
}