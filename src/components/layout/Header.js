import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

        <AppBar position='sticky'>
          <Container maxWidth="lg">
            <Toolbar>
                <Typography textAlign="right" component="h1" variant='h5' fontWeight='bold' flex={1}>
                  <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
                      وبلاگ هم اندیشی
                  </Link>
                </Typography>
                <BookIcon/>
            </Toolbar>
          </Container>
        </AppBar>
    </div>
  )
}

export default Header