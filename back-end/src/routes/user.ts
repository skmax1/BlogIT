import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { decode, jwt, sign, verify } from 'hono/jwt'
import { signInBody, signUpBody } from '../../../common/src/userzod'


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string  
    }
}>();

//sign up route

userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();

    const success =  signUpBody.safeParse(body)

    if(!success){
      
      c.status(411);
      return c.json({
        message: 'Invalid inputs'
      })
    }
  
    try{
  
     const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password
        }
      })
    
      const token = await sign({id: user.Id},c.env.JWT_SECRET)
  
      return c.json({
        token: token
      })
  
    }catch(e){
  
      c.status(411)
  
      return c.json({
        msg: 'Error while creating user'
      })
  
    }
  })


  //sign in route

  userRouter.post('/sigin', async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    const body = await c.req.json();

    const success = signInBody.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        message: 'Invalid inputs'
      })
    }
  
    try{
      const user  = await prisma.user.findFirst({
        where:{
          email: body.email,
          password: body.password
        }
      })
  
      if (!user){
        c.status(403) //auth error
        return c.json({
          msg: "Invalid credentials"
        })
      }
  
      const token = await sign({id: user.Id},c.env.JWT_SECRET)
  
      return c.json({
        msg: "Sigin in sucessful",
        token: token
      })
    } catch(e){
      console.log(e);
      c.status(411);
      return c.json({
        msg: "Error while siging in"
      })
  
    }
  })