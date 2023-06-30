import React from 'react'

import { useQuery } from '@apollo/client'
import { GET_AUTHORS_INFO } from '../../graphQL/queries'
import { Avatar, Divider, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Loader from '../../shared/Loader'

const Authors = () => {

 const {loading,data,error} = useQuery(GET_AUTHORS_INFO)

 if(loading) return <h2><Loader/></h2>

 if(error) return <h2>{error.message}</h2>

  return (
    <>
      <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px",borderRadius:4,padding:'10px'}}>
            {data.authors.map((item,index) => (
              <React.Fragment key={item.id}>
              <Grid item xs={12}>
                    <Link to={`/authors/${item.slug}`} style={{display:'flex',color:'#000',alignItems:'center',textDecoration:'none'}}>
                      <Avatar src={item.avatar.url} sx={{marginLeft:2}}/>
                      <Typography component="p" variant='p'>{item.name}</Typography>
                    </Link>
              </Grid>
              {index !== data.authors.length -1 && (
                <Grid item xs={12}>
                    <Divider variant='middle' sx={{margin:"10px"}}/>
                </Grid>

                  )}
              </React.Fragment> 
             
            ))}
      </Grid>
    </>
  )
}

export default Authors