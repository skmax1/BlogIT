import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.post('/api/v1/signup', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

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

    return c.json({
      msg: 'Error while creating user'
    })

  }
})

app.post('/api/v1/sigin',(c) => {
  return c.text('SignIn route')
})

app.post('/api/v1/blog', (c) => {
  return c.text("Blog Post route")
})

app.put('/api/v1/blog', (c) => {
  return c.text("Blog put route")
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text("Blog get route")
})

app.get('/api/v1/blog/bulk')

export default app
