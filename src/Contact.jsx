import React from 'react'
import "./ContactStyle.css"

// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = '';
//   e.target.elements.email.value = '';
//   e.target.elements.message.value = '';
// });


const Contact = ({theme}) => {
  return (
    <div className="lala" style={{backgroundColor:theme=="dark"?"black":"rgb(245, 232, 199)",}} >
     <section id="contact">
  
  <h1 className="section-header" style={{color:theme=="dark"?"white":"black"}}>Contact</h1>
  
  <div className="contact-wrapper">
  
  {/* <!-- Left contact page -->  */}
    
    <form id="contact-form" className="form-horizontal" role="form">
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required/>
        </div>
      </div>

      <div className="form-group" >
        <div className="col-sm-12">
          <input   type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
        </div>
      </div>

      <textarea  className="form-control" rows="10" placeholder="MESSAGE" name="message" required ></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND" style={{backgroundColor:"black", }}>
        <div className="alt-send-button">
          <i className="fa fa-paper-plane"></i><span className="send-text" >SEND</span>
        </div>
      
      </button>
      
    </form>
    
  {/* <!-- Left contact page -->  */}
    
      <div className="direct-contact-container" >

        <ul className="contact-list">
          <li className="list-item"style={{color:theme=="dark"?"white":"black"}}><i className="fa fa-map-marker fa-2x"><span className="contact-text place" style={{color:theme=="dark"?"white":"black"}}>Gwalior, (M.P)</span></i></li>
          
          <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"style={{color:theme=="dark"?"white":"black"}}><a  style={{color:theme=="dark"?"white":"black"}}href="tel:7566442245" title="Give me a call">7566442245</a></span></i></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email" style={{color:theme=="dark"?"white":"black"}}>arpitjainmits@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul className="social-media-list">
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr/>
        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>  
    </div>
  )
}

export default Contact