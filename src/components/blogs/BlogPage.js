import React from 'react'
import { useQuery } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_POST_DATA} from '../../graphQL/queries'
import Loader from '../../shared/Loader'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CommentForm from '../comments/CommentForm'
import Comments from '../comments/Comments'




const BlogPage = () => {


  const {slug} = useParams()
  const navigate = useNavigate()
  

  const {loading,data,error} = useQuery(GET_POST_DATA,{
    variables : {slug}
  })

  

  

  if(loading) return <h2><Loader/></h2>
  
  if(error) return <h2>{error.message}</h2>
  
  // const {author : {avatar,name,field,description,posts}} = data


  return (
    <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} mt={8} display='flex' justifyContent='space-between'>
              <Typography component='h2' variant='h4' fontWeight={700} color='primary'>{data.post.title}</Typography>
              <ArrowBackRoundedIcon onClick={()=>navigate(-1)} style={{cursor:'pointer'}}/>
          </Grid>
          <Grid item xs={12} mt={8} sx={{textAlign:'center'}}>
            <img  src={data.post.coverPhoto.url} alt={data.post.slug} width="70%" height='450px' />
          </Grid>
          <Grid item xs={12} mt={8} display='flex' alignItems='center'>
              <Avatar src={data.post.author.avatar.url} sx={{width:'80px',height:'80px',marginLeft:2}}/>
              <Box component="div"  >
                <Typography component='p' variant='h5' fontWeight={700}>{data.post.author.name}</Typography>
                <Typography component='p' variant='p' fontWeight={600} color='text.secondary'>{data.post.author.field}</Typography>
              </Box>
          </Grid>
          <Grid item xs={12} mt={8}>
              <Typography component='div' variant='div'>{data.post.content}</Typography>
          </Grid>
          <Grid item xs={12} mt={8}>
              <CommentForm slug={slug}/>
          </Grid>
          <Grid item xs={12} mt={8}>
            <Comments slug={slug}/>
          </Grid>
        </Grid>
    </Container>
  )
}

export default BlogPage