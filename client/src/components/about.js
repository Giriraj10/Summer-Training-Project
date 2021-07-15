import React, {useEffect, useState}  from 'react';
import epic from "../assets/img/demo-image-01.jpg";
import aboutpic from "../assets/img/demo-image-01.jpg";
import {NavLink, useHistory } from "react-router-dom";

const About = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "appllication/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
        
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                            <img src={userData.name === "Giriraj Singh Tanwar" ? epic : aboutpic} alt="thapa" />
                            </div>
                          
                        </div>

                         <div className="col-md-6">
                            <div className="profile-head">
                                <h1>{userData.name}</h1>
                                <h3>{userData.work}</h3>
                                <p className="profile-rating mt-3 mb-5">RANKINGS: <span> 1/10 </span></p>


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                   <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                       <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">More Info</a>
                    
                                    </li>
                                </ul>
                           </div>
                        </div>

                        <div className="col-md-2">
                            <NavLink to="/post">
                            <div className="form-group form-button">
                                    <input type="submit" name="post" id="post" className="form-submit"
                                        value="POST"
                                    />
                                </div>
                            </NavLink>
                        </div>

                    </div>



                    <div className="row">
                        {/* left side url  */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p> WORK LINK</p>
                                <a href="https://www.youtube.com" target="gst">Youtube</a> <br />
                                <a href="https://www.instagram.com" target="gst">Instagram</a> <br />
                                <a href="https://in.linkedin.com/" target="gst">Linked In</a> <br />
                                <a href="https://www.github.com" target="gst">GitHub</a> <br />
                                <a href="https://www.google.com" target="gst">Google</a> <br />
                                <a href="https://www.facebook.com" target="gst">Facebook</a> <br />
                                <a href="https://www.twitter.com" target="gst">Twitter</a> <br />
                                
                            </div>
                        </div> 

                        {/* right side data toogle  */}

                     <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-pledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                               <p>User Id</p>
                                            </div>
                                            <div className="col-md-6">
                                            <p>{userData._id}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                            <p>Name</p>
                                            </div>
                                            <div className="col-md-6 ">
                                                <p>{ userData.name}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>Email</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.email}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>Phone</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>Profession</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userData.work}</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-pledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Experience</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>Part-time</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>Total Projects</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>English Level</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <p>Availability</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                              
                            </div>
                        </div>
                    </div>
                    </div>

                </form>
           </div>
        </>
    )
}

export default About
