import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()

const prisma = new PrismaClient({
  datasourceUrl:env.DATABASR_URL,
}).$extends(withAccelerate())

app.post('/api/v1/signup', (c) => {
  return c.text('SignUp Route')
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

export default app
