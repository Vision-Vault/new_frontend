import Hhead from "@/components/Hhead";
import { useAuth } from "@/contexts/auth";
import Login from "./login";
import PagesNav from "@/components/pagesnav";
import Footer from "@/components/footer";

export default function AboutPage() {
  const { user, token } = useAuth()
  const teamMembers = [
    {
      name: "Husam Obeidat",
      role: "Full Stack Developer",
      image: "/images/Husam.png",
    },
    {
      name: "Hasan Alrawaqa",
      role: "Full Stack Developer",
      image: "/images/hasan.png",
      url: "https://github.com/hasanalrawaqa",
    },
    {
      name: "Narmeen Alkatab",
      role: "Full Stack Developer",
      image: "/images/nano.jpg",
    },
    {
      name: "Aseel Bdoor",
      role: "Full Stack Developer",
      image: "/images/aseel.jpg",
    },
    {
      name: "Abdallah Toughoj",
      role: "Full Stack Developer",
      image: "/images/abd.JPG",
    },
    {
      name: "Muhammad Alsa'ad",
      role: "Full Stack Developer",
      image: "/images/abd.jpg",
    },
  ];

  return (
    <>
      {user ? (
        <>
        <PagesNav/>
          <Hhead data={"Contact Us"} />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

          <link
            href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

          <section id="team" class="pb-5">
            <div >
              <h5 id="abouthead1 " class="section-title h1">OUR TEAM</h5>
              <div class="row">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    class="col-xs-12 col-sm-6 col-md-4"
                  >
                    <div class="image-flip">
                      <div class="mainflip flip-0">
                        <div class="frontside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p >
                                <img
                                  className="img-fluid img_container"
                                  src={member.image}
                                  alt={`${member.name}'s image`}
                                />
                              </p>
                              <h4 class="card-title">{member.name}</h4>
                              <p class="card-text">{member.role}</p>

                            </div>
                          </div>
                        </div>
                        <div class="backside">
                          <div class="card">
                            <div class="card-body text-center mt-4">
                              <h4 class="card-title">{member.name}</h4>
                              <p class="card-text">
                                This is basic card with image on top, title,
                                description, and button. This is
                              </p>
                              <ul class="list-inline">
                                <li class="list-inline-item">


                                  <a
                                    class="social-icon text-xs-center"
                                    target="_blank"
                                    href="#"
                                  >
                                    <i class="fa fa-facebook"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a
                                    class="social-icon text-xs-center"
                                    target="_blank"
                                    href='#'>
                                    <i class="fa fa-github"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a
                                    class="social-icon text-xs-center"
                                    target="_blank"
                                    href="#"
                                  >
                                    <i class="fa fa-google"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Footer/>
        </>
      ) : (
        <Login />
      )
      }
    </>
  );
}
