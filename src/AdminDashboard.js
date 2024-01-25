import React from 'react'
import { useState, useEffect } from 'react';
import "./AdminDashboard.css"
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase"

function AdminDashboard() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "subscribers"));
        const subscriberData = [];
        querySnapshot.forEach((doc) => {
          subscriberData.push({ id: doc.id, ...doc.data() });
        });
        setSubscribers(subscriberData)
      } catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[]);

  const handleDelete = async (subscriberId) => {
    try {
      await deleteDoc(doc(db, "subscribers", subscriberId));
      setSubscribers((prevSubscribers) => prevSubscribers.filter((subscriber) => subscriber.id !== subscriberId));
    }catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='AdminDashboard'>
      <Link to="/AddSubscriber" className="addNewSubscriber">Add subscriber</Link>
        <div className="subscribers">
            <h2>Subscribers contact list</h2>
            <div className="label"><span className='sn'>S/N</span> <span className='emailAdd'>Email address</span><span className='phoneNo'>Phone no.</span><span className='name'>name</span></div>
            <ul>
              {subscribers.map((subscriber, index) => (
                <li key={subscriber.id}>
                  <span className='sn'>{index + 1}</span> <span className='emailAdd'>{subscriber.email}</span><span className='phoneNo'>{subscriber.phoneNo}</span><span className='name'>{subscriber.name}</span><button className='delBtn' onClick={()=> handleDelete(subscriber.id)}>Delete</button>
                </li>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default AdminDashboard;