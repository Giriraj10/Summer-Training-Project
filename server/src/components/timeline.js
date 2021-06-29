import React, {useState, useEffect} from 'react'
import {useHistory } from "react-router-dom";

const Timeline = () => {
   
     const history = useHistory();
     const [userData, setUserData] = useState([]);
      

    const callInfo = async () => {
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
        callInfo();

     },);

const cardInfo=[
    {orgname:userData.name,jobtitle:userData.email,salary:userData.salary,location:userData.location}
    ];
    const renderCard = (card , index) =>{
        return(<div className="timeline_info_item d-flex flex-row align-items-center justify-content-start" key={index}>
                            <div className="contact_info_content">
                                <div className="contact_info_title">{card.jobtitle}</div>
                                <div className="contact_info_text">{card.orgname}</div>
                                <div className="contact_info_text">{card.location}</div>
                                <div className="contact_info_text">{card.salary}</div>
                            </div>
                        </div> 
                        )
                        }


    return (
        <>
            <div>
                 {/* <h1>{cardInfo.map(renderCard)}</h1> 
     */}
     <div><h1>{userData.name}</h1></div>
            </div>
        </>
    )
}

export default Timeline
