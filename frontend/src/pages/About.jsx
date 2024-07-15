import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testimonialsResponse = await axios.get('http://localhost:5000/api/about/testimonials');
        const teamResponse = await axios.get('http://localhost:5000/api/about/team');
        setTestimonials(testimonialsResponse.data);
        setTeam(teamResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="container">
          {/* ... */}
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="testimonial-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div className="testimonial-slider">
                  {testimonials.map((testimonial, index) => (
                    <div className="item" key={index}>
                      <div className="row justify-content-center">
                        <div className="col-lg-8 mx-auto">
                          <div className="testimonial-block text-center">
                            <blockquote className="mb-5">
                              <p>{testimonial.content}</p>
                            </blockquote>
                            <div className="author-info">
                              <div className="author-pic">
                                <img src="images/truck.svg" alt={testimonial.author} className="img-fluid" />
                              </div>
                              <h3 className="font-weight-bold">{testimonial.author}</h3>
                              <span className="position d-block mb-3">{testimonial.position}, {testimonial.company}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>
          <div className="row">
            {team.map((member, index) => (
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0" key={index}>
                <img src={member.imageUrl} className="img-fluid mb-5" />
                <h3 className="">
                  <a href="#">
                    <span className="">{member.firstName}</span> {member.lastName}
                  </a>
                </h3>
                <span className="d-block position mb-4">{member.position}</span>
                <p>{member.bio}</p>
                <p className="mb-0">
                  <a href="#" className="more dark">
                    Learn More <span className="icon-arrow_forward" />
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
