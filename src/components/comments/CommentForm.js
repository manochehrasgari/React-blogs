import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useMutation } from '@apollo/client'
import { SEND_COMMENT } from '../../graphQL/mutation'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({slug}) => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [text,setText] = useState('')
    const [pressed,setPressed] = useState(false)


    const [sendComment , {loading,data,error}] = useMutation(SEND_COMMENT,{
        variables:{name,email,text,slug}
    })

    const sendHandler =()=>{
        if(name && email && text) {
            sendComment()
            setPressed(true)
        }else {
            toast.warn('تمام فیلدها به درستی پر نشده است',{position:'top-center'})
        }
        setName('')
        setEmail('')
        setText('')
    }

    if (data && pressed) {
        toast.success('کامنت شما با موفقیت ارسال شد و منتظر تایید میباشد',{position:'top-center'})
        setPressed(false)
    }
    


  return (
    <Grid container 
    sx={{
        boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius:4,
        py:1,
        mt:5
    }}>
        <Grid item xs={12} m={2}>
                <Typography component='p' variant='h6' fontWeight={700} color='primary'>
                    ارسال کامنت
                </Typography>
        </Grid>
        <Grid item xs={12} m={2}>
                <TextField value={name} onChange={(e)=>setName(e.target.value)} sx={{width:'100%'}} id="outlined-basic" label="نام کاربری" variant="outlined" />
        </Grid>
        <Grid item xs={12} m={2}>
                <TextField value={email} onChange={(e)=>setEmail(e.target.value)} sx={{width:'100%'}} id="outlined-basic" label="ایمیل" variant="outlined" />
        </Grid>
        <Grid item xs={12} m={2}>
                <TextField minRows={4} multiline value={text} onChange={(e)=>setText(e.target.value)} sx={{width:'100%'}} id="outlined-basic" label="متن کامنت" variant="outlined" />
        </Grid>
        <Grid item xs={12} m={2}>
           {
            loading ?  <Button onClick={sendHandler} variant="contained" disabled>در حال ارسال ...</Button> :
                       <Button onClick={sendHandler} variant="contained">ارسال کامنت </Button>
           }
        </Grid>  
        <ToastContainer />
    </Grid>
  )
}

export default CommentForm