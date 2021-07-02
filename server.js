const express=require('express');
const next=require('next');

const port=3000;
const dev=process.env.NODE_ENV !=='production';
const app=next({dev});
const handle=app.getRequestHandler()

app.prepare().then(()=>{
    const server=express();
    server.get('/pages2',(req,res)=>{
        return app.render(req,res,'/pages2')
    })
    server.get('/pages3',(req,res)=>{
        return app.render(req,res,'/pages3')
    })
    server.get('*',(req,res)=>{
        return handle(req,res,'/pages4')
    })
    server.listen(port,(error)=>{
        if(error) throw error;
        console.log(`Ready on http://localhost:${port}`)
    })
})