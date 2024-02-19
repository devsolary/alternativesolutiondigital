import React, { useState } from 'react';
import "./AddSubscriber.css";
import { addDoc, collection} from "firebase/firestore"; 
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

function AddSubscriber() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const navigate = useNavigate()

  const handleAdd = async(e) => {
    e.preventDefault();

    try {
      const res = await addDoc(collection(db, "subscribers"), {
        email,
        phoneNo,
        name
      });
      navigate("/adminDashboard")
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className='AddSubscriber'>
        <div className="addSubscriberForm">
        <form onSubmit={handleAdd}>
                <input type="text" placeholder='Your Name' value={name} className='name' onChange={(e) => setName(e.target.value)}/>
                <input type="tel" placeholder='Your phone Number' value={phoneNo} className='number' onChange={(e)=> setPhoneNo(e.target.value)}/>
                <br />
                <input type="email" placeholder='Your Email Address' value={email} className='email' onChange={(e)=> setEmail(e.target.value)}/>
                <br />
                <button type='submit'> Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddSubscriber