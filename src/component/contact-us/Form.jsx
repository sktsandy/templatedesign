import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const inputChange = (event) =>{
        const {name, value} = event.target;
      
       // console.log(name, value);

       setData({...data, [name]:value});
       
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        toast.success( `your name is: ${data.name} 
        your Email is: ${data.email} 
        your subject is: ${data.subject}
        you went to say: ${data.message}`,{
            position: "bottom-right",
            autoClose: 5900,});

    }

    return (
        <>
        <form onSubmit={onSubmit}>
             <input type="text" placeholder="Your Name" name="name"  
             onChange={inputChange} required/> <br />

             <input type="email" placeholder="Enter Email" name="email" 
             onChange={inputChange} required/> <br />

            <input type="text" placeholder="Your Subject" name="subject"
             onChange={inputChange} required/> <br />


            <textarea placeholder="Message" name="message"
             onChange={inputChange} /> 

             <button className="contact_btn" type="submit"> Send Message </button>
        </form>      

          <ToastContainer />      
        </>
    )
}

export default Form;
