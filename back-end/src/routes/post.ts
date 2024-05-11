import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono"

export const postRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,       
    }
}>();

//creating new post
postRouter.post('/', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const post = await prisma.post.create({
        data:{
            title: body.title,
            writeup: body.writeup,
            authourId: '1'
        }
    })

    return c.json({
        postId: post.Id
    })
  })
  

  //updating post
  postRouter.put('/', async (c) => {

    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.post.update({
        where:{
            Id: body.id
        },
        data:{
            title: body.title,
            writeup: body.writeup
        }
    })

    return c.json({
        id: blog.Id,
        msg: 'Updated sucessfully'
    })
    
  })
  
  //getting a post with id param
  postRouter.get('/:id', async (c) => {

    const id = await c.req.param('id');

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
try{
    const getPost = await prisma.post.findFirst({
        where:{
            Id: id
        }
    })

    return c.json({
        msg:"Fetched succesfully",
        getPost
    })
    
}catch(e){

    c.status(411)
    console.log(e);
    c.json({
        msg: "Error while fetching"
    })

}
    
  })

  //get all post
  
  postRouter.get('/bulk',async (c) => {
    const prisma  = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())


    try{
        const bulk = await prisma.post.findMany();

        return c.json({
            msg: "Fetch sucessfull",
            bulk
        })

    }catch(e){
        c.status(411);
        console.log(e);
        c.json({
            msg: 'Error while fetching'
        })
        
    }

  })
  