import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const CardEL = ({title,slug,coverPhoto,author}) => {
    
  return (
    <>
        <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px",borderRadius:4}}>
          {author && (
            <CardHeader 
                avatar={<Avatar sx={{marginLeft:2}} 
                src={author.avatar.url}/>}
                title={<Typography fontWeight={500}>{author.name}</Typography>}
            />
          )}

            <CardMedia component='img' image={coverPhoto.url} height="150" alt={slug}/>
            <CardContent>
              <Typography component="h3" variant="h6" color="text.primary" fontWeight={500}>
                  {title}
              </Typography>
              </CardContent>
            <Divider variant='middle' sx={{margin:"10px"}}/>
            <CardActions >
              <Link to={`/blogs/${slug}`} style={{textDecoration:'none',width:'100%'}}>
                    <Button sx={{width:'100%'}} size='small' href={`/blogs/${slug}`} variant="outlined">مطالعه مقاله</Button>
              </Link>
            </CardActions>
        </Card>
    </>
  )
}

export default CardEL