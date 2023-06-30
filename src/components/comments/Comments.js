import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_POSTS_COMMENTS } from '../../graphQL/queries'
import { Avatar, Box, Grid, Typography } from '@mui/material'

const Comments = ({slug}) => {

    
  const {loading,data,error} = useQuery(GET_POSTS_COMMENTS,{
    variables : {slug}
  })

  if(loading) return null
  
  if(error) return <h2>{error.message}</h2>

  const {comments} = data


  return (
    <Grid container 
    sx={{
        boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius:4,
        py:1,
        mt:5
    }}>
      <Grid item xs={12} p={2} m={2}>

          <Typography component='p' variant='h6' color='primary' fontWeight={700}>کامنت ها</Typography>
          
          {comments.map((comment)=>{
            return <Grid  key={comment.id} item xs={12} p={2} m={2} borderRadius={1} sx={{border:'1px solid #ccc'}}>
                      <Box component='div' display='flex' alignItems='center'>
                          <Avatar>{comment.name[0]}</Avatar>
                          <Typography mr={2} component='span' variant='p' fontWeight={700}>{comment.name}</Typography>
                      </Box>
                      <Typography marginTop={3} component='p' variant='p'>{comment.text}</Typography>
                  </Grid>
          })}

      </Grid>
    </Grid>

  )
}

export default Comments

