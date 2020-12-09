import React, { useEffect } from "react";
import GoogleButton from 'react-google-button'
import Calendar from "../Calendar"
import axios from 'axios'

const BookAppointment = () => {
  useEffect(() => {
   
    const getgoogleinfo = axios
      .post("/auth/getgoogleinfo")
      .then((res) => {
        console.log(res)
      });
  }, []);

  return (
    <React.Fragment>
      <div id="et-main-area">
        <div id="main-content">
          <article
            id="post-226599"
            class="post-226599 page type-page status-publish hentry"
          >
            <div class="entry-content">
              <div id="et-boc" class="et-boc">
                <div class="et-l et-l--post">
                  <div class="et_builder_inner_content et_pb_gutters3">
                    <div class="et_pb_section et_pb_section_0 et_pb_section_parallax et_pb_with_background et_section_regular">
                      <div class="et_parallax_bg_wrap">
                        {/* <div class="et_parallax_bg" style="background-image: url(https://www.elegantthemes.com/layouts/wp-content/uploads/2019/08/dog-walker-10-3.png);"></div> */}
                      </div>
                      <div class="et_pb_row et_pb_row_0">
                        <div class="et_pb_column et_pb_column_3_5 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough">
                          <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                            <div class="et_pb_text_inner">
                              <h1>Book Online</h1>
                              <p>Easy. Fast. Reliable.</p>
                            </div>
                          </div>{" "}
                        
                        </div>
                  
                      </div>
                    </div>{" "}
                    <div class="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular">
                      <div class="et_pb_row et_pb_row_2">
                        <div class="et_pb_column et_pb_column_4_4 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light">
                           {/* here */}
                            <div class="et_pb_text_inner">
                              <h2>
                              Please select an available date for booking!

                              <a href='http://localhost:4000/auth/google'>
                              <GoogleButton />
                             </a>

                              
                              <a href="http://localhost:4000/auth/google">Login with Google+</a>
                              </h2>
                              <p>
                               <Calendar />
                              </p>
                            </div>
                            {/* end here */}
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                   
                    
                   
                  
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
       
      </div>
    </React.Fragment>
  );
};

export default BookAppointment;
