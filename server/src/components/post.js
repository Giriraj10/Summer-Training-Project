import React, {useEffect, useState} from 'react'

const Post = () => {

    const [userData, setUserData] = useState({orgname:"", jobtitle:"", salary:"", location:""});
    
        const userPost = async () => {
            try {
                const res = await fetch('/getdata', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
    
                const data = await res.json();
                console.log(data);
                setUserData({...userData ,orgname:data.orgname, jobtitle:data.jobtitle, salary:data.salary ,location:data.location });
    
                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }
    
            } catch (err) {
                console.log(err);
            }
        }
    
        useEffect(() => {
            userPost();
        }, []);
    
        // we are storing data in states 
    
        const handleInputs = (e) => {
            const name = e.target.name;
            const value = e.target.value;
    
            setUserData({ ...userData, [name]:value });
        }   
    
       //  send the data to backend 
    
        const postForm = async (e) => {
            e.preventDefault();
    
            const { orgname,jobtitle ,salary ,location } = userData;
    
            const res = await fetch('/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    orgname,jobtitle ,salary ,location
                })
            });
    
            const data = await res.json();
    
            if (!data) {
                console.log("Post not sent ");
            } else {
                alert("Post Sent");
                setUserData({ ...userData,orgname:"", jobtitle:"", salary:"", location:""});
            }
    
        }
    return (

<div>
    {/* Post on portal (form)  */}
    <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                          
                        <div className="signin-form">
                            <h1 className="form-title">Post a JOB </h1>
                            <form method="POST" className="register-form" id="register-form">
                             

                                 <div className="form-group">
                                    <label htmlFor="org">
                                        <i className="zmdi zmdi-balance material-icons-name"></i>
                                    </label>
                                    <input type="name" name="orgname" id="org" autoComplete="off"
                                        value={userData.orgname}
                                        onChange={handleInputs} 
                                         placeholder="Name Of Your Organisation"
                                    />
                                </div>


                                 <div className="form-group">
                                    <label htmlFor="location">
                                        <i className="zmdi zmdi-pin material-icons-name"></i>
                                    </label>
                                    <input type="text" name="location" id="location" autoComplete="off"
                                        value={userData.location}
                                        onChange={handleInputs} 
                                        placeholder="Location"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="salary">
                                        <i className="zmdi zmdi-balance-wallet material-icons-name"></i>
                                    </label>
                                    <input type="number" name="salary" id="salary" autoComplete="off"
                                    value={userData.salary}            
                                        onChange={handleInputs}                                       
                                        placeholder="Salary per Anum"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="jobtitle">
                                        <i className="zmdi zmdi-case material-icons-name"></i>
                                    </label>
                                    <input type="text" name="jobtitle" id="jobtitle" autoComplete="off"
                                        value={userData.jobtitle}
                                        onChange={handleInputs}
                                        placeholder="Vacant Post Name"
                                    />
                                </div>
                              
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit"
                                        value="Post"
                                        onClick={postForm}
                                    />
                                </div>

                            </form>
                        </div>
                      
                    </div>
                </div>
           </section>

</div>
    )
}

export default Post
