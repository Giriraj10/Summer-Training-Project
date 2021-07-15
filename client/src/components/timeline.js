import React from 'react';
import axios from 'axios';

// import './App.css';

class timeline extends React.Component {

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
        <div key={index} className="contact_info_items d-flex flex-row align-items-center justify-content-start">
                      
        <div className="contact_info_content">
                              <div className="contact_info_text">{post.orgname}</div>
                              <div className="contact_info_text">{post.jobtitle}</div>
                              <div className="contact_info_text">{post.salary}</div>
                              <div className="contact_info_text">{post.location}</div>
                          </div>   
                          </div>
      
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div>
        <h2>POSTS</h2>
        <div className="container-fluid">
             <div className="col-lg-10 offset-lg-1">
                 <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                         {this.displayBlogPost(this.state.posts)}
                     </div> 
                 </div>
            
         </div>
     </div>
    );
  }
}


export default timeline;


