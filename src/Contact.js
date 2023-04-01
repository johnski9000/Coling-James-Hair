import axios from "axios";
import React, { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function Contact() {
    const [name, setName] = useState(null)
    const [number, setNumber] = useState(null)
    const [email, setEmail] = useState(null)
    const [service, setService] = useState(null)
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const server = "https://sarah-server.vercel.app"
    const serverTest = "https://sarah-server-e88urpxco-johnski9000.vercel.app"


    function handleChange(event) {
        console.log(event.target.value)
        if (event.target.id === "name") {
            setName(event.target.value)
        } else if (event.target.id === "number") {
            setNumber(event.target.value)
        } else if (event.target.id === "email") {
            setEmail(event.target.value)
        } else if (event.target.id === "service") {
            setService(event.target.value)
        } else if (event.target.id === "message") {
            setMessage(event.target.value)
        }
    }
            

    function formSubmit(event) {
        event.preventDefault()
        setLoading(true)
        axios.post("https://sarah-server-kepcgwceh-johnski9000.vercel.app/send_email", {
            name: name,
            email: email,
            number: number,
            service: service,
            message: message
          })
        // axios.get("https://sarah-server-7jiv3o47z-johnski9000.vercel.app/", {})
          .then(function (response, error) {
            if (response.status === 200) {
                console.log("email sent")
                setLoaded(true)
            }
            if (error) {
                console.log(error)
                setLoading(false)
                setError(true)
            }
          })
    }
    const loading_animation = loading === true && loaded === false
    const loading_complete = loading === true && loaded === true
    const loading_error = loading === true && error === true
  return (
    <div 
    >
      <NavBar />
      <div className="contact_top_img">
        <h2>Contact</h2>
      <div></div>
      
      </div>
      <div className="contact_container">
        {loading === false && <div className="contact_form">
              <h2>Get in touch</h2>
            <div className="opening_hours">
                <h3>Opening Hours</h3>
                <div>Monday - Friday : 10AM - 6:30PM</div>
                <div>Saturday : 10AM - 6PM Saturday: 11AM - 4PM</div>
            </div>
          <form>
            <div>
              <input type="name" id="name" placeholder="Name" onChange={(event) => handleChange(event)}/>
            </div>
            <div>
              <input type="number" id="number" placeholder="Contact Number" onChange={(event) => handleChange(event)}/>
            </div>
            <div>
              <input type="email" id="email" placeholder="Email" onChange={(event) => handleChange(event)}/>
            </div>
            <div>
              <select onChange={(event) => handleChange(event)} id="service">
                <option value="/" >Select Service</option>
                <option value="asd">asd</option>
                <option value="asd">asd</option>
                <option value="asd">asd</option>   
              </select>
            </div>
            <div>
              <textarea placeholder="Message" onChange={(event) => handleChange(event)} id="message"/>
            </div>
            <button onClick={(event) => formSubmit(event)}>Send Request</button>
          </form> 
         
        </div>}
         {loading_animation && 
            <div className="contact_loading">
              <img src="https://jpl.a.bigcontent.io/v1/static/spinner-1s-200px-9064981b80e59f1b663c17fab41563c9" alt="ads"/>
              </div>}
              {loading_complete === true && 
            <div className="contact_loaded">
              We'll be in touch!
              </div>}
              {loading_error && 
              <div className="contact_loaded">
              There was an error!
              </div>
              }
      </div>
      <Footer/>
      <div className="copyright" style={{backgroundColor: "#045959", textAlign:"center", color:"#ffffff"}}>Copyright © 2023 Beauty Nails</div>
    </div>
  );
}

export default Contact;
