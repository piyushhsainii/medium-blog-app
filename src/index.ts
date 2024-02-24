import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client' 
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', async(c) => {

  const primsa = await new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  })
  const body = await c.req.json()
  const user = primsa.user.create({
    data:{
      name:body.name,
      email:body.name,
      password:body.name
    }
  })
  return c.json({
    user:user
  })
})

app.post('/api/v1/signin', (c) => {
  return c.text('Hello Hono!')
})
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

export default app
