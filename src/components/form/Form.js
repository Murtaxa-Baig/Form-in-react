import React from 'react'
import './Form.css' 
import Profile from '../../assets/profile.jpeg'

export default function Form() {
    return (
        <>
            <div id='div1'>

                <img src={Profile} alt="Profile picture" id="img" />

                <h1 className="h1">Doing The Right Thing, <br />At the Right Time </h1>
                <p className="pa"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, <br /> culpa quaerat
                        architecto iure fugit obcaecati!</p>


                <input type="text" className="input" placeholder="Enter your name" />
                <input type="text" className="input" placeholder="Enter your address" />
                <input type="email" className="input" placeholder="Enter your e-mail" />

                                <br />

                 <textarea name="comment" className="input" id="comment" cols="74" rows="4"
                                        placeholder="Enter your message here...!"></textarea>
            </div>
            <div>

                 <input id="input" type="checkbox" />
                <label> I accept the term services</label>
                 <br />
                <button className="input " id="button">Submit</button>

            </div>

         </>
  )
}


