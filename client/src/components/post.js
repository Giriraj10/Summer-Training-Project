import React, {useEffect, useState} from 'react'

const Post = () => {
    const [user, setUser] = useState({
        orgname: "", jobtitle: "", salary: "", location: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        
        setUser({...user, [name]:value});
    

    }


    const PostData = async (e) => {
        e.preventDefault();

        const { orgname,jobtitle,salary,location } = user;

        const res = await fetch("/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                orgname, jobtitle,salary,location
            })
        });

        const data = await res.json();

        // I need to change the data to res 
        if (data.status === 422 || !data) {
            window.alert("Invalid Data");
            console.log("Invalid Registration");
        } else {
             window.alert(" Job Is Posted Successfully !");
            console.log("Successfull post");

        }
    }


    return (

<div>
    <div>
        <h1/>
        <div className="h12">Post a Job</div>
        <br/>
                <div className="postformcontainer">
                            <form method="POST" className="register-form" id="register-form">
                             

                                 <div className="form-group">
                                    <label htmlFor="org">
                                        <i className="zmdi zmdi-balance material-icons-name"></i>
                                    </label>
                                    <input type="name" name="orgname" id="org" autoComplete="off"
                                        value={user.orgname}
                                        onChange={handleInputs} 
                                         placeholder="Name Of Your Organisation"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="jobtitle">
                                        <i className="zmdi zmdi-case material-icons-name"></i>
                                    </label>
                                    <input type="text" name="jobtitle" id="jobtitle" autoComplete="off"
                                        value={user.jobtitle}
                                        onChange={handleInputs}
                                        placeholder="Job Title"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="location">
                                        <i className="zmdi zmdi-pin material-icons-name"></i>
                                    </label>
                                    <input type="text" name="location" id="location" autoComplete="off"
                                        value={user.location}
                                        onChange={handleInputs} 
                                        placeholder="Location"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="salary">
                                        <i className="zmdi zmdi-balance-wallet material-icons-name"></i>
                                    </label>
                                    <input type="number" name="salary" id="salary" autoComplete="off"
                                    value={user.salary}            
                                        onChange={handleInputs}                                       
                                        placeholder="Salary per Anum"
                                    />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit"
                                        value="Post"
                                        onClick={PostData}
                                    />
                                </div>

                            </form>
                        </div>
       
</div>
</div>

    )
}

export default Post
