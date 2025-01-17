import {Avatar, Button, Paper, Container, Typography, styled} from '@mui/material';
import React, {useState, useContext} from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import {AuthContext} from '../../context/auth'
const StyledAvatar = styled(Avatar)({
  margin: 0,
  backgroundColor: "#B64955"
});

const StyledPaper = styled(Paper)({
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'normal',
    padding: 0,
    justifyContent: 'center',
    
  });

const Post = ({recipe}) => {
  const like = () =>{
    console.log(isLiked);
    setIsLiked(true);
  }
  const unlike = () =>{
    console.log(isLiked);
    setIsLiked(false);
    isLiked = false;
  }
  let [isLiked, setIsLiked] = useState(false);
  const {user}= useContext(AuthContext);
  return (
    <Container component="post" maxWidth='md'>
      <StyledPaper elevation={2}>
        <Typography sx={{ml: 0, mr: 0}} variant='h5'>Title: {recipe.name}</Typography>
        <p className="description">Description: {recipe.description}</p>
        <p className="ingredients">Ingredients: {recipe.ingredients}</p>
        <p className="steps">Steps: {recipe.steps}</p>
        <Typography sx={{ml: 0, mr: 0}} variant='body1'>Date Created: {recipe.createdAt}</Typography>
        <Typography sx={{ml: 0, mr: 0}} variant='body1'>By: {recipe.createdBy}</Typography>
        {user ? <div>
        {isLiked ? 
          <Button variant="outlined" color='secondary' onClick={unlike}>
              Unlike
              <ThumbUpAltIcon/>
            1
          </Button> :
          <Button variant="outlined" color='secondary' onClick={like}>
              Like
              <ThumbUpOffAltIcon/>
            1
          </Button>
        } </div>
        : <div></div>}
        </StyledPaper>
    </Container>
  )
}

export default Post;