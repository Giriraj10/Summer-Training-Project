import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';

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
 
    displayBlogPost = (posts) => {
        
      if (!posts.length) return null;
      return posts.map((post, index) => (
         <div key={index}>
        <Grid container >
        <Grid item><div  className="timeline_info_item">            
          <div>
              <div>Organisation : {post.orgname}</div>
              <div>Jobtitle : {post.jobtitle}</div>
              <div>Stipend : {post.salary}</div>
              <div>Location : {post.location}</div>
              <div className="form-group form-button">
                  <input type="submit" name="post" id="post" className="form-submit"
                      value="Apply"
                  />
              </div>
          </div>   
          </div>
          </Grid>
          </Grid>
          </div>
                           
        
      ));
    };
  
    render() {
  
      //JSX
      return(
        <div>
          {this.displayBlogPost(this.state.posts)} 
       </div>
     
      );
    }
  }


