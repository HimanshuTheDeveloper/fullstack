import Topbar from "../Components/Topbar";

const Services = () => {
    return (
        <div className="Services">
            <Topbar />
            <section id="services" class="services">
                <div class="container">

                    <div class="section-title">
                        <h2>Services</h2>
                        <p>My Services</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div class="icon-box px-0 pt-1">
                                <video width="320" height="240" controls>
                                    <source src="assets/video/video.mp4" type="video/mp4" autoplay/>
                                    Your browser does not support the video tag.
                                </video>
                                <h4><a href="">Project name</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );


}

export default Services;