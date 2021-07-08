 import React, {useEffect, useState} from 'react'
import axios from 'axios';
const Timeline = () => {
    // const history = useHistory();
    const [userData, setUserData] = useState({name:"",posts:[] });

    const callAboutPost = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData({...userData, name:data.name, posts:data.posts });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            // history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPost();
    }, []);


//    state={
//        posts:[]
//     }
   
// componentDidMount=()=>{
//        this.getpost();
//    };


//     getpost = ()=>{
//         axios.get('/getdata')
//         .then(()=>{
//           const data = response.data;
//           this.setState({posts:data});
//           console.log(' fetching data for posts')
//         })
//         .catch(()=>{
//         alert('error retrieving data');
//         });
//         }

return (
<div>
<div className="contact_info">
     <div className="container-fluid">
         <div className="row">
             <div className="col-lg-10 offset-lg-1">
                 <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                         <div className="contact_info_image">
                         <i class="zmdi zmdi-phone zmdi-hc-2x"></i></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title">Phone</div>
                             <div className="contact_info_text">+91 88777622220</div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                         <div className="contact_info_image"><i class="zmdi zmdi-email-open zmdi-hc-2x"></i></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title">Email</div>
                             <div className="contact_info_text">contact@Achiles.com</div>
                         </div>
                     </div> 
                     <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                         <div className="contact_info_image"><i class="zmdi zmdi-home zmdi-hc-2x"></i></div>
                         <div className="contact_info_content">
                             <div className="contact_info_title">Address</div>
                             <div className="contact_info_text">Jodhpur, Rajasthan, India</div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
</div>

<div>
    <h1>posts</h1>
    <div>
        <h2>
            {/* posts.map((e) =>  */}
            {/* <h1>{e.email}</h1>) */}
        </h2>
    </div>
</div>


</div>
)

}

export default Timeline