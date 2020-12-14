const Product = require('../models/product');
const Review = require('../models/review');
const User = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    console.log('http://localhost:3001/api/');
    res.send({title: 'hello react!!'});
});

router.post('/create', function(req, res, next){
    console.log("post success");
    console.log(req.body.name,req.body.category,req.body.price, req.body.url, req.body.contactInfo, req.body.description);

    const product = new Product({
        name : req.body.name,
        category: req.body.category,
        price: req.body.price,
        url: req.body.url,
        contactInfo: req.body.contactInfo,
        description: req.body.description,
        liking: 'false',
        writer: req.body.writer
    });
    product.save((err)=>{
        console.log("db save!");
    });
});

router.get('/product', function(req, res){
    
    Product.find({}).then( (product)=>{
        res.json(product);
        
        console.log("product: "+product);
    }).catch((err)=>{
        console.log("error");
    });
});

router.get('/product/detail/:id', function(req, res){
    console.log("sucess");
    Product.findById(req.params.id).then( (product)=>{
        res.json(product);
        //res.redirect('/editmovie'); //error
        });
});

router.post('/product/delete/:id', function(req, res){

    Product.deleteOne({ _id: req.params.id}).then((result)=>{
        console.log("delete product");
    }).catch((err)=>{
        console.log("error");
    });
})

router.post('/product/edit/:id', function(req, res){
    console.log(req.body);
    Product.findByIdAndUpdate(req.params.id, req.body, (err, product)=>{
        console.log("edit product");
    });
})

router.get('/review', function(req, res){
    console.log("sucess");
    Review.find({}).then( (review)=>{
        res.json(review);
        console.log("review: "+ review);
    }).catch((err)=>{
        console.log("error");
    });
});

router.post('/review/create', function(req, res){

    const review = new Review({
        title : req.body.title,
        content: req.body.content,
        recommend: req.body.recommend,
        writer: req.body.writer
    });
    review.save((err)=>{
        console.log("db save!");
    });

});

router.post('/review/delete/:id', function(req, res){

    Review.deleteOne({ _id: req.params.id}).then((result)=>{
        console.log("delete review");
    }).catch((err)=>{
        console.log("error");
    });
})

router.get('/wishList', function(req, res){
    console.log("wishList");
    Product.find({ liking: true}).then( (product)=>{
        res.json(product);
        console.log("wishList: "+product);
    }).catch((err)=>{
        console.log("error");
    });
});

router.post('/join', function(req, res){
    const user = new User({
        id : req.body.id,
        password: req.body.password,
    });
    user.save((err)=>{
        console.log("db save (Join)!");
    });
})

router.get('/login', function(req, res){
    User.find({ state: true }).then( (user)=>{
        res.json(user);
    }).catch((err)=>{
        console.log("error");
    });

})

router.get('/login/:id/:password', function(req, res){
    console.log(req.params.id, req.params.password);
    User.find({id: req.params.id , password: req.params.password}).then( (user)=>{
        res.json(user);
        
        console.log("find user: "+user);
    }).catch((err)=>{
        console.log("error");
    });
})

router.post('/login/edit/:id', function(req, res){
    //console.log(req.body);
    User.findByIdAndUpdate(req.params.id, req.body, (err, product)=>{
        console.log("update login state");
    });
})


module.exports = router;
