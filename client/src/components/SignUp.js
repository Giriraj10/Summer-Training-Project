import React, {useState}  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import signpic from '../assets/img/signup.svg';

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
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

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();

        // I need to change the data to res 
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
             window.alert(" Registration Successfull ");
            console.log("Successfull Registration");

            history.push("/login");
        }
    }


    return (
        <div>
        <div>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title">Sign up</h1>
                            <form method="POST" className="register-form" id="register-form">
                                
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autocomplete="off"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder="Your Name"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Your Email"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        placeholder="Your Phone"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                        value={user.work}
                                        onChange={handleInputs}
                                        placeholder="Your Profession"
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder="Your Password"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        placeholder="Confirm Your Password"
                                    />
                                </div>
                               
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="Register" onClick={PostData}
                                     
                                    />
                                </div>

                            </form>
                        </div>
                        
                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} alt="registration pic" height="500" width="500" />
                                </figure>
                                <NavLink to="/login" className="signup-image-link">Already registered ? SignIn Here</NavLink>
                            </div>
                       
                    </div>
                </div>
           </section>
           </div>


        </div>
        
    )
}

export default Signup
