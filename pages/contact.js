export default function AboutPage() {
    const teamMembers = [
      {
        name: "Husam Obeidat",
        role: "Full Stack Developer",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png",
      },
      {
        name: "Hasan Alrawaqa",
        role: "Full Stack Developer",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png", // Replace with the actual image URL
        url : "https://github.com/hasanalrawaqa"
        },
      {
        name: "Narmeen Alkatab",
        role: "Full Stack Developer",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png", // Replace with the actual image URL
      },
      {
        name: "Aseel Bdoor",
        role: "Full Stack Developer",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png", // Replace with the actual image URL
      },
      {
        name: "Abdallah Toughoj",
        role: "Full Stack Developer",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png", // Replace with the actual image URL
      },
      {
        name: "Muhammad Alsa'ad",
        role: "Full Stack Developer",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png", // Replace with the actual image URL
      },
    ];
  
    return (
      <>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
        <section id="team" class="pb-5">
          <div >
            <h5 class="section-title h1">OUR TEAM</h5>
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
      </>
    );
  }
  