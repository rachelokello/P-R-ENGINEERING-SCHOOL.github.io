import './footer.css';
import React from "react";


const Footer = () => {
return (
<div className="footer">	
	<div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#web">Web design</a></li>
                            <li><a href="#dev">Development</a></li>
                            <li><a href="#hos">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#comp">Company</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#leg">Legacy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li><a href="#job">Job openings</a></li>
                            <li><a href="#emp">Employee success</a></li>
                            <li><a href="#ben">Benefits</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="#icon"><i class="icon ion-social-facebook"></i></a><a href="#icon"><i class="icon ion-social-twitter"></i></a><a href="#icon"><i class="icon ion-social-snapchat"></i></a><a href="#icon"><i class="icon ion-social-instagram"></i></a>
                        <p class="copyright">Company Name © 2018</p>
                    </div>
                </div>
            </div>
        
</div>
);
};
export default Footer;
