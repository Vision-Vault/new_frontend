import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import PagesNav from "@/components/pagesnav";
import Footer from "@/components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';



const AboutPage = () => {
  return (
    <>
    <PagesNav/>
    <section  class="section_all bg-light" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title_all text-center">
                            <h3 class="font-weight-bold">Welcome To <span class="text-custom">Vision Vault</span></h3>
                            <p class="section_subtitle mx-auto text-muted">Empowering Dreams, Fueling Visions: Vision Vault – Where Ideas Shine</p>
                            <div class="">
                                <i class=""></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row vertical_content_manage mt-5">
                    <div class="col-lg-6">
                        <div class="about_header_main mt-3">
                            <div class="about_icon_box">
                            </div>
                            <h4 class="about_heading text-capitalize font-weight-bold mt-4">Fueling Dreams and Innovations Through Vision Vault.</h4>
                            <p class="text-muted mt-3">At Vision Vault, we are on a mission to empower dreamers and visionaries by bridging the gap between creators and those who believe in their ideas. Our platform is not just a crowdfunding website; it's a vibrant community where dreams come to life.</p>

                            <p class="text-muted mt-3"> reams with the world. We're committed to connecting these visionaries with passionate supporters who help turn their dreams into reality. Donors have the opportunity to explore a wide range of projects, support causes close to their hearts, and together, we create a synergy of creativity and generosity. Join us in building a brighter future, one project at a time, and together, let's unlock the potential of countless visions, making the world a better place, one dream at a time.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img_about mt-3">
                            <img src="/project_funding.jpg" alt="" class="img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fas fa-pencil-alt"> <FontAwesomeIcon icon={faShieldHalved} /></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Security</h5>
                                <p class="edu_desc mt-3 mb-0 text-muted">At Vision Vault, we take your security seriously. Protecting your data is our top priority. </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fab fa-angellist"><FontAwesomeIcon icon={faHandshake} /></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">Interactivity</h5>
                                <p class="edu_desc mb-0 mt-3 text-muted">At Vision Vault, we focus on enhancing interactivity for engaging user experiences.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="about_content_box_all mt-3">
                            <div class="about_detail text-center">
                                <div class="about_icon">
                                    <i class="fas fa-paper-plane"><FontAwesomeIcon icon={faPaperPlane} /></i>
                                </div>
                                <h5 class="text-dark text-capitalize mt-3 font-weight-bold">best platform </h5>
                                <p class="edu_desc mb-0 mt-3 text-muted">At Vision Vault, your premier crowdfunding platform for innovation and dreams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
</>
  )
};

export default AboutPage;
