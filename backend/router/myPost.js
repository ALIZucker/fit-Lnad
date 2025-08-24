const express=require('express');
const {usePost}=require('./../model/usePost');
const router=express.Router();




router.get('/',(req,res)=>{

    const newPost=new usePost({
        post: {
                situation: '2',
                dateOrder:'1 آبان 1403',
                codeOrder:'874521',
                pay:'2.800.000 تومان',
                offPay:'25.000 تومان',
                images:['http://127.0.0.1:8080/images/Rectangle 1167 (5).png','http://127.0.0.1:8080/images/Rectangle 1167 (6).png'],


            }

    })
    newPost.save()
        .then(() => res.json({massage: "Post saved successfully!"}))
        .catch(err => res.json({massage: err}));
})

router.get('/show',(req,res)=>{

    usePost.find({})
        .then(posts => {
            res.json({massage:posts })
        })
        .catch(err => {
            console.error("Error fetching posts:", err);
        });
})

module.exports={
    myRouter:router,
};