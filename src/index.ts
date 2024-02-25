import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client' 
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify ,sign } from 'hono/jwt'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    SECRET:string
	}
}>()

//middleware
app.use('/message/*',async(c, next)=>{
  const authorization = await c.req.header('Authorization')
  const token = authorization?.split(" ")[1]
  if(!token){
    c.status(400)
    return c.json({error:"Invalid Token"})
  }
  const decode = await verify(token,c.env.SECRET)
  if(decode.id){
    await next() 
  } else {
    return c.json({error:"Invalid Token"})
  }
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//signup
app.post('/api/v1/signup', async(c) => {
try {
  const primsa = await new PrismaClient({
    datasourceUrl:c.env?.DATABASE_URL
  }).$extends(withAccelerate())
  const body = await c.req.json()
  const user = await primsa.user.create({
    data:{
      name:body.name,
      email:body.name,
      password:body.name
    }
  })
  const token = await sign({id:user.id},c.env.SECRET)
  c.status(200)
  return c.json({
    token 
  })
} catch (e) {
  c.status(400)
  console.log(e)
  return c.json({
    error:"error while signing up" 
  })
}
})

//signin
app.post('/api/v1/signin', async(c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const { email } = await c.req.json()
    const user = await prisma.user.findFirst({where:email})
    if(!user){
      c.status(400)
      return c.json({
        error:"User does not exist"
      })
    }
    const token = await sign({id:user.id},c.env.SECRET)
    c.status(200)
    return c.json({
      token
    })
  } catch (error) {
    c.status(400)
    return c.json({error:"Error occured while signing in"})
  }
})


app.post('/api/v1/blog', async(c) => {
try {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())
  const { title, description, published , userID } = await c.req.json()
  const blog = await prisma.posts.create({
    data:{
      title:title,
      description:description,
      published:published,
      authorID:userID
    }
  })
  c.status(201)
  return c.json({
    blog
  })
} catch (error) {
  c.status(400)
  return c.json({
    error:"Error occured while creating blog post"
  })
}
})

// API to update BLOG Post
app.put('/api/v1/blog', async(c) => {
 try {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())
  const { blogID ,title,description,published } = await c.req.json()
  const updateBlog = await prisma.posts.update({
    where:blogID,
    data:{
        title,
        description,
        published
    } 
  })
  c.status(200)
  return c.json({
    updateBlog
  })
 } catch (error) {
  c.status(400)
  return c.json({error:"Something went wrong updating blog post"})
 }

})

// Get all BLOG post
app.get('/api/v1/blog', async(c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const blogs = await prisma.posts.findMany()
    if(!blogs){
      c.status(400)
      return c.json({error:"Something went wrong"})
    }
    c.status(200)
    return c.json({blogs})
  } catch (error) {
    c.status(400)
    return c.json({error:"Something went wrong"})
  }

})

export default app
