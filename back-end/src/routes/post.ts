import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono"
import { verify } from "hono/jwt";
import {createPostBody,updatePostBody}  from '@sparta1/blogit-common'

export const postRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string       
    }
    Variables:{
        userId: string
    }
}>();

//middleware function

postRouter.use('/*', async (c,next) =>{
    const authHeader = c.req.header("Authorization") || "";

    try{
        const decoded = await verify(authHeader,c.env.JWT_SECRET)
        if(decoded){
    
            c.set("userId",decoded.id)
            await next();
        }
        else {
            c.status(403);
            c.json({
                msg: "User not looged in"
            })
        }
    }catch(e){
        c.status(403);
        return c.json({
            msg: "Authentication failed"
        })
    }
 
    
})

//creating new post
postRouter.post('/', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const authourId = c.get("userId")

    const body = await c.req.json();

    const success  = createPostBody.safeParse(body);

    if(!success){
        c.status(411)
        return c.json({
            message: 'Invalid inputs'
        })
    }
try{
    const post = await prisma.post.create({
        data:{
            title: body.title,
            writeup: body.writeup,
            authourId: authourId
        }
    })

    return c.json({
        postId: post.Id
    })
} catch(e){
    c.status(411);
    console.log(e);
    c.json({
        message: "Error while creating"
    })
}
  })
  

  //updating post
  postRouter.put('/', async (c) => {

    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const success = updatePostBody.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message: "Invalid inputs"
        })
    }
try{
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

} catch(e){
    c.status(411);
    console.log(e);
    c.json({
        message: "Error while updating"
    })

}
    
  })


    //get all post
  
    postRouter.get('/bulk',async (c) => {
        const prisma  = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())
    
    
        try{
            const bulk = await prisma.post.findMany({
                select:{
                    Id:true,
                    title: true,
                    writeup: true,
                    authourId: true,
                    authour:{
                        select:
                        {
                            firstName: true,
                            lastName: true
                        }
                    }
                }
            });
    
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
  
  //getting a post with id param
  postRouter.get('/:id', async (c) => {

    const id =  c.req.param('id');

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
try{
    const getPost = await prisma.post.findFirst({
        where:{
            Id: id
        },
        select:{
            Id:true,
            authourId:true,
            title: true,
            writeup: true,
            authour:{
                select:{
                    firstName:true,
                    lastName:true
                }
            }
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


  