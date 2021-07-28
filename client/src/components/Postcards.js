import React from 'react';
import axios from 'axios';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));
const Applied = async (e) => {
  e.preventDefault();
      window.alert("Applied Successfully");
}
export default class SpacingGrid extends React.Component {

    state = {
      posts: []
    };
  
    componentDidMount = () => {
      this.getBlogPost();
    };
  
  
    getBlogPost = () => {
      axios.get('/getpost')
        .then((response) => {
          const data = response.data;
          this.setState({ posts: data });
          console.log('Data has been received!!');
        })
        .catch(() => {
          alert('Error retrieving data!!!');
        });
    }

    render() {
  
      //JSX
      return(
        <div> 
          <h1/>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="row" spacing={2}>
        {this.state.posts.map((post, index) => (
          <Grid item xs={3} sm={4} md={4} key={index}>
               <Item><div>
                <div>Organisation : {post.orgname}</div>
                 <div>Jobtitle : {post.jobtitle}</div>
               <div>Stipend : {post.salary}</div>
                 <div>Location : {post.location}</div>
                 <div className="form-group form-button">
                     <input type="submit" name="post" id="post" className="form-submit"
                        value="Apply" onClick={Applied}
                     />
                 </div>
                  </div></Item>
          </Grid>
        ))}
      </Grid>
      
    </Box> 
      
      </div>
      
      );
    }
  }


