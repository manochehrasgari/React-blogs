import React from 'react'

import { GET_BLOGS_INFO } from '../../graphQL/queries'
import {useQuery} from '@apollo/client'
import { Grid } from '@mui/material'
import CardEL from '../../shared/CardEL'
import Loader from '../../shared/Loader'

const Blog = () => {

  const {loading,data,error} = useQuery(GET_BLOGS_INFO)


  if(loading) return <h2><Loader/></h2>
  if(error) return <h2>{error.message}</h2>

  return (
    <>
      <Grid container spacing={2}>
           {data.posts.map(post => {
            return  <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <CardEL  {...post}/>
                    </Grid>
           })}
      </Grid>
    </>
  )
}

export default Blog