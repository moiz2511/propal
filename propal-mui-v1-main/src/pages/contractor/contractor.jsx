import background from "../../gigImage.jpg";
import myGigs from "../../assets/myGigs.png";
import job from "../../assets/job.jpg";
import { Link, useNavigate } from 'react-router-dom';


import './contractor.css'
export default function Contractor() {
    const navigate = useNavigate();
    const contractor=JSON.parse(localStorage.getItem('contractor'));
    console.log("check")
    console.log(contractor)

    return(
        <div className="card" >
            <h1>Welcome {contractor.data.username}!</h1>
            <div style={{ backgroundImage: `url(${background})`}} className="gig" onClick={()=>navigate("/addGig")}> 
               <h1>Add a GIG</h1>
               <h2>Send your resume to propal users</h2>
               <h4>Start Earning today!</h4>
            </div>
            <div style={{ backgroundImage: `url(${myGigs})`}} className="gig2" onClick={()=>navigate("/myGigs")}>
            </div>
            <div style={{ backgroundImage: `url(${job})`}} className="gig2" onClick={()=>navigate("/findJob")}>
            </div>
        </div>
    )
}