import React from 'react'
import { useQuery } from '@apollo/client'
import {useParams} from 'react-router-dom'
import {GET_AUTHOR_INFO} from '../../graphQL/queries'
import { Avatar, Container, Grid, Typography } from '@mui/material'
import CardEL from '../../shared/CardEL'
import sanitizeHtml from 'sanitize-html'
import Loader from '../../shared/Loader'



const AuthorPage = () => {


  const {slug} = useParams()
  

  const {loading,data,error} = useQuery(GET_AUTHOR_INFO,{
    variables : {slug}
  })

  
  if(loading) return <h2><Loader/></h2>
  
  if(error) return <h2>{error.message}</h2>
  
  const {author : {avatar,name,field,description,posts}} = data
  
  console.log("first")
  
  return (
    <Container maxWidth="lg">
        <Grid container mt={10}>
            <Grid  item xs={12} display="flex" alignItems='center' direction='column'>
                  <Avatar src={avatar.url} sx={{width:'250px' , height:'250px'}}/>
                  <Typography fontWeight={700} mt={4}  component='h3' variant='h5'>{name}</Typography>
                  <Typography component='p' variant='h5' my={2} color='text.secondary'>{field}</Typography>
            </Grid>
            <Grid item xs={12} mb={4}>
                  <div dangerouslySetInnerHTML={{__html : sanitizeHtml(description.html)}}></div>
            </Grid>
        </Grid>
        <Grid xs={12}>
          <Typography component='h3' variant='h5' fontWeight={700} my={4}>مقالات {name}</Typography>
          <Grid container spacing={2}>
                  {posts.map(post => {
                    return  <Grid item xs={12} sm={6} md={4} key={post.id}>
                                <CardEL  title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/>
                            </Grid>
                  })}
          </Grid>
        </Grid>
    </Container>
  )
}

export default AuthorPage