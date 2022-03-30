import React, {useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { HashLink as Link } from 'react-router-hash-link';
const useStyles = makeStyles((theme) => ({
 //https://www.elegantthemes.com/layouts/services/dog-walker-home-page/live-demo
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
 
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));
const Home = () => {
  
  const [send, setsent] = useState (false)
  const [response, setResponse] = useState(null);
  const SITE_KEY = "6LchJioaAAAAADlyrXnpBEQZckXkhjS4kGz6rkuC";
  const [contactform, setcontactform] = useState({
    name: undefined,
    email: undefined,
    phone: undefined,
    message: undefined
  })
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    }

    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
      console.log("Script loaded!");
    });
  }, []);

  const handleOnClick = e => {
    e.preventDefault();
   
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
        submitData(token);
      });
    });
  }

  const submitData = token => {
    // call a backend API to verify reCAPTCHA response
    fetch('/verify', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": contactform.email,
        "g-recaptcha-response": token
      })
    }).then(res => res.json()).then(res => {
   
      setResponse(res);
      console.log(res)
      if(res.success)
      letsGo()

    });
  }
  const changeHandler = (e) => {
    setcontactform((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


const letsGo = ()=>{
  setsent(true)
axios.post('contactform/sendEmailContact/',contactform)
.then((res)=>{ 
 
  console.log(res)
})

}
  const classes = useStyles();
  return (
    <React.Fragment>
      <div id="et-main-area">
        <div id="main-content">
          <article
            id="post-226599"
            className="post-226599 page type-page status-publish hentry"
          >
            <div className="entry-content">
              <div id="et-boc" className="et-boc">
                <div className="et-l et-l--post">
                  <div className="et_builder_inner_content et_pb_gutters3">
                    <div className="et_pb_section et_pb_section_0 et_pb_section_parallax et_pb_with_background et_section_regular">
                    <span className="et_parallax_bg_wrap"><span className="et_parallax_bg" style={{backgroundImage: 'url(images/dog-walker-10-3-background.png)'}} /></span>
                    <div className="et_pb_row et_pb_row_0">
                      <div className="et_pb_column et_pb_column_3_5 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough">
                        <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
                          <div className="et_pb_text_inner">
                            <h1>Tails and Trails Stouffville <br></br>Dog Walking</h1>
                            <p>Only the Best for Our Best Friends</p>
                          </div>
                        </div>
                        <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper  et_pb_module ">
                          <a className="et_pb_button et_pb_button_0 et_pb_bg_layout_dark" href data-icon="$">Learn How it Works</a>
                        </div>
                      </div>
                      <div className="et_pb_column et_pb_column_2_5 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
                        <div className="et_pb_with_border et_pb_module et_pb_image et_pb_image_0">
                          <span className="et_pb_image_wrap has-box-shadow-overlay"><div className="box-shadow-overlay" /><img width={800} height={800} src="https://www.elegantthemes.com/layouts/wp-content/uploads/2019/08/dog-walker-42.jpg" alt="" title srcSet="https://www.elegantthemes.com/layouts/wp-content/uploads/2019/08/dog-walker-42.jpg 800w, https://www.elegantthemes.com/layouts/wp-content/uploads/2019/08/dog-walker-42-254x254.jpg 254w, https://www.elegantthemes.com/layouts/wp-content/uploads/2019/08/dog-walker-42-533x533.jpg 533w, https://www.elegantthemes.com/layouts/wp-content/uploads/2019/08/dog-walker-42-400x400.jpg 400w, https://www.elegantthemes.com/layouts/wp-content/uploads/2019/08/dog-walker-42-510x510.jpg 510w, https://www.elegantthemes.com/layouts/wp-content/uploads/2019/08/dog-walker-42-100x100.jpg 100w" sizes="(max-width: 800px) 100vw, 800px" className="wp-image-226568" /></span>
                        </div>
                      </div>
                    </div>
                    <div className="et_pb_row et_pb_row_1">
                      <div className="et_pb_column et_pb_column_1_3 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et_pb_column_empty">
                      </div>
                      <div className="et_pb_column et_pb_column_1_3 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough">
                        <div className="et_pb_module et_pb_image et_pb_image_1">
                          <span className="et_pb_image_wrap has-box-shadow-overlay"><div className="box-shadow-overlay" />
                          <img loading="lazy" width={400} height={400} src="images/IMG_2082.jpg" alt="" title srcSet="images/IMG_2082.jpg 400w, images/IMG_2082.jpg 254w, images/IMG_2082.jpg 100w" sizes="(max-width: 400px) 100vw, 400px" className="wp-image-226569" /></span>
                        </div>
                      </div>
                   
                    </div>
                    </div>{" "}
                    <div className="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_2">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>
                                What Exactly Does Dog Walking Include and
                                Entail?
                              </h2>
                              <p>
                                With our daily dog walking, you can give
                                your dog the daily exercise they require to stay
                                fit and live a long, healthy life. We cater to your schedule, using our online booking system you can rest
                                assured that your pets will receive all the
                                individual attention they need when you need it :)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_3">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2 id="howitworks">How it Works</h2>
                            </div>
                          </div>{" "}
                          <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module ">
                           
                          </div>
                        </div>
                      </div>{" "}
                      <div className="et_pb_with_border et_pb_row et_pb_row_4 et_pb_gutters2">
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_0 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_off et-pb-icon et-pb-icon-circle">
                                    <i className="fa fa-comment"></i>
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Step One: ContacT Us</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p>
                                    Let's get in touch! We'd love to meet your
                                    dog and get to know them so we can plan lots
                                    of walks and adventures together!.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_button_alignment_center et_pb_module ">
                            <a
                              className="et_pb_button et_pb_custom_button_icon et_pb_button_2 et_pb_bg_layout_dark"
                              href="#contact"
                              data-icon="&#x1f43e;"
                            >
                              Send a Message 
                            </a>
                          </div>
                        </div>{" "}
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_1 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_off et-pb-icon et-pb-icon-circle">
                                    <i className="fa fa-users"></i>
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Step Two: Meet Tay and A</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p>
                                    We love all things dog! Everything we do is
                                    based on our mission that “a well-walked dog
                                    is a happier dog.” Through regular exercise
                                    we believe every dog will become a more
                                    fulfilled and better behaved member of their
                                    family.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="et_pb_button_module_wrapper et_pb_button_3_wrapper et_pb_button_alignment_center et_pb_module ">
                            <a
                              className="et_pb_button et_pb_custom_button_icon et_pb_button_3 et_pb_bg_layout_dark"
                              href="#contact"
                              data-icon="&#x1f43e;"
                            >
                              Learn More 
                            </a>
                          </div>
                        </div>{" "}
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_2 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_off et-pb-icon et-pb-icon-circle">
                                    <i className="fa fa-calendar"></i>
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Step Three: Schedule a Date!</span>
                                </h4>
                                <div className="et_pb_blurb_description">
                                  <p>
                                    Our site offers online booking of available
                                    times and online payment if needed. Life is
                                    busy let us help! We are only a click away!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_center et_pb_module ">
                            <a
                              className="et_pb_button et_pb_custom_button_icon et_pb_button_4 et_pb_bg_layout_dark"
                              href="/BookAppointment"
                              data-icon="&#x1f43e;"
                            >
                              Schedule Online 
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider">
                      <div className="et_pb_row et_pb_row_5">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2 id="services">Our Services</h2>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="et_pb_row et_pb_row_6">
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_2">
                            <span className="et_pb_image_wrap has-box-shadow-overlay">
                              <div className="box-shadow-overlay"></div>
                              <img
                                src="images/dog-walker-20.jpg"
                                alt=""
                                title=""
                                height="auto"
                                width="auto"
                                srcset="images/dog-walker-20.jpg 400w, images/dog-walker-20-254x254.jpg 254w, images/dog-walker-20-100x100.jpg 100w"
                                sizes="(max-width: 400px) 100vw, 400px"
                                className="wp-image-226574"
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3>Dog Walking</h3>
                              <p>
                                30 or 45 minute walk - Around your neighbourhood or a
                                nearby park. Additional dog add $5.00. Available
                                7 days a week. We also offer puppy check in and bathroom breaks.
                              </p>
                            </div>
                          </div>{" "}
                          <div className="et_pb_module et_pb_text et_pb_text_5  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                            <p>
                                <strong style={{ fontSize: "25px" }}>
                                  $30
                                </strong>
                                /45min/walk/dog
                              </p>
                              <p>
                                <strong style={{ fontSize: "25px" }}>
                                  $25
                                </strong>
                                /30min/walk/dog
                              </p>
                              <p>
                                <strong style={{ fontSize: "25px" }}>
                                  $15
                                </strong>
                                /check-in and bathroom break/10-15mins
                              </p>
                            </div>
                          </div>{" "}
                          <div className="et_pb_button_module_wrapper et_pb_button_5_wrapper et_pb_button_alignment_tablet_center et_pb_module ">
                            <a
                              className="et_pb_button et_pb_custom_button_icon et_pb_button_5 et_pb_bg_layout_dark"
                              href="/#"
                              data-icon="&#x1f43e;"
                            >
                              Book Now 
                            </a>
                          </div>
                        </div>{" "}
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_3">
                            <span className="et_pb_image_wrap has-box-shadow-overlay">
                              <div className="box-shadow-overlay"></div>
                              <img
                                src="./images/dog-walker-25.jpg"
                                alt=""
                                title=""
                                height="auto"
                                width="auto"
                                srcset="./images/dog-walker-25.jpg 400w, ./images/dog-walker-25-254x254.jpg 254w, ./images/dog-walker-25-100x100.jpg 100w"
                                sizes="(max-width: 400px) 100vw, 400px"
                                className="wp-image-226575"
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_6  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3>Dog Park Day</h3>
                              <p>
                                Let's goto the park! A trip to the park for
                                30 minutes with friends! Price includes pick
                                up drop off and a cool down period before we
                                leave.
                              </p>
                            </div>
                          </div>{" "}
                          <div className="et_pb_module et_pb_text et_pb_text_7  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <strong style={{ fontSize: "30px" }}>
                                  $55
                                </strong>
                                /day/dog
                              </p>
                              
                            </div>
                          </div>{" "}
                          <div className="et_pb_button_module_wrapper et_pb_button_6_wrapper et_pb_button_alignment_tablet_center et_pb_module ">
                            <a
                              className="et_pb_button et_pb_custom_button_icon et_pb_button_6 et_pb_bg_layout_dark"
                              href="/#"
                              data-icon="&#x1f43e;"
                            >
                              Book Now 
                            </a>
                          </div>
                        </div>{" "}
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_13  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_image et_pb_image_4">
                            <span className="et_pb_image_wrap has-box-shadow-overlay">
                              <div className="box-shadow-overlay"></div>
                              <img
                                src="./images/dog-walker-24.jpg"
                                alt=""
                                title=""
                                height="auto"
                                width="auto"
                                srcset="./images/dog-walker-24.jpg 400w, ./images/dog-walker-24-254x254.jpg 254w, ./images/dog-walker-24-100x100.jpg 100w"
                                sizes="(max-width: 400px) 100vw, 400px"
                                className="wp-image-226576"
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_8  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3>Dog Sitting</h3>
                              <p>
                                Heading our for the night? Need someone you can
                                trust? Our dog sitting price includes meals lots
                                of walks and a ton of love.
                              </p>
                            </div>
                          </div>{" "}
                          <div className="et_pb_module et_pb_text et_pb_text_9  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>
                                <strong style={{ fontSize: "30px" }}>
                                  $200
                                </strong>
                                /day(24 hours)/dog
                              </p>
                              <p>
                                <strong style={{ fontSize: "30px" }}>
                                  $125
                                </strong>
                                /day(8 hours)/dog
                              </p>
                            </div>
                          </div>{" "}
                          <div className="et_pb_button_module_wrapper et_pb_button_7_wrapper et_pb_button_alignment_tablet_center et_pb_module ">
                            <a
                              className="et_pb_button et_pb_custom_button_icon et_pb_button_7 et_pb_bg_layout_dark"
                              href="/#"
                              data-icon="&#x1f43e;"
                            >
                              Book Now 
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_bottom_inside_divider et-no-transition"></div>
                    </div>{" "}
                    <div className="et_pb_section et_pb_section_4 et_pb_with_background et_section_specialty section_has_divider et_pb_bottom_divider">
                      <div className="et_pb_row">
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_14    et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_10  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Why Us?</h2>
                              <p>
                                The relationships we form with our Clients and
                                their Furkids are at the heart of what makes us
                                successful. We recognize that caring for the
                                family dog is a privilege that comes with great
                                responsibility, and we continually strive to
                                offer an experience that promotes their
                                well-being, and your peace of mind.{" "}
                              </p>
                            </div>
                          </div>{" "}
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_3  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_off et-pb-icon">
                                    &#x52;
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Trained / Insured</span>
                                </h4>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_4  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_off et-pb-icon">
                                    &#x52;
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Local</span>
                                </h4>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="et_pb_module et_pb_blurb et_pb_blurb_5  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
                            <div className="et_pb_blurb_content">
                              <div className="et_pb_main_blurb_image">
                                <span className="et_pb_image_wrap">
                                  <span className="et-waypoint et_pb_animation_off et-pb-icon">
                                    &#x52;
                                  </span>
                                </span>
                              </div>
                              <div className="et_pb_blurb_container">
                                <h4 className="et_pb_module_header">
                                  <span>Trusted</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="et_pb_column et_pb_column_2_3 et_pb_column_15   et_pb_specialty_column  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_row_inner et_pb_row_inner_0">
                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_inner et_pb_column_inner_0">
                              <div className="et_pb_module et_pb_image et_pb_image_5">
                                <span className="et_pb_image_wrap ">
                                  <img
                                    src="./images/dog-walker-23.jpg"
                                    alt=""
                                    title=""
                                    height="auto"
                                    width="auto"
                                    srcset="./images/dog-walker-23.jpg 400w, ./images/dog-walker-23-254x254.jpg 254w, ./images/dog-walker-23-100x100.jpg 100w"
                                    sizes="(max-width: 400px) 100vw, 400px"
                                    className="wp-image-226585"
                                  />
                                </span>
                              </div>
                            </div>{" "}
                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_inner et_pb_column_inner_1 et-last-child">
                              <div className="et_pb_module et_pb_image et_pb_image_6">
                                <span className="et_pb_image_wrap has-box-shadow-overlay">
                                  <div className="box-shadow-overlay"></div>
                                  <img
                                    src="./images/dog-walker-21.jpg"
                                    alt=""
                                    title=""
                                    height="auto"
                                    width="auto"
                                    srcset="./images/dog-walker-21.jpg 400w, ./images/dog-walker-21-254x254.jpg 254w, ./images/dog-walker-21-100x100.jpg 100w"
                                    sizes="(max-width: 400px) 100vw, 400px"
                                    className="wp-image-226586"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>{" "}
                          <div className="et_pb_row_inner et_pb_row_inner_1">
                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_inner et_pb_column_inner_2">
                              <div className="et_pb_module et_pb_image et_pb_image_7">
                                <span className="et_pb_image_wrap has-box-shadow-overlay">
                                  <div className="box-shadow-overlay"></div>
                                  <img
                                    src="./images/dog-walker-26.jpg"
                                    alt=""
                                    title=""
                                    height="auto"
                                    width="auto"
                                    srcset="./images/dog-walker-26.jpg 400w, ./images/dog-walker-26-254x254.jpg 254w, ./images/dog-walker-26-100x100.jpg 100w"
                                    sizes="(max-width: 400px) 100vw, 400px"
                                    className="wp-image-226587"
                                  />
                                </span>
                              </div>
                            </div>{" "}
                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_inner et_pb_column_inner_3 et-last-child et_pb_column_empty"></div>
                          </div>{" "}
                          <div className="et_pb_row_inner et_pb_row_inner_2">
                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_inner et_pb_column_inner_4">
                              <div className="et_pb_module et_pb_image et_pb_image_8">
                                <span className="et_pb_image_wrap ">
                                  <img
                                    src="images/dog-walker-28.jpg"
                                    alt=""
                                    title=""
                                    height="auto"
                                    width="auto"
                                    srcset="./images/dog-walker-28.jpg 400w, ./images/dog-walker-28-254x254.jpg 254w, ./images/dog-walker-28-100x100.jpg 100w"
                                    sizes="(max-width: 400px) 100vw, 400px"
                                    className="wp-image-226569"
                                  />
                                </span>
                              </div>
                            </div>{" "}
                            <div className="et_pb_column et_pb_column_1_3 et_pb_column_inner et_pb_column_inner_5 et-last-child">
                              <div className="et_pb_module et_pb_image et_pb_image_9">
                                <span className="et_pb_image_wrap has-box-shadow-overlay">
                                  <div className="box-shadow-overlay"></div>
                                  <img
                                    src="./images/dog-walker-29-1.jpg"
                                    alt=""
                                    title=""
                                    height="auto"
                                    width="auto"
                                    srcset="./images/dog-walker-29-1.jpg 400w, ./images/dog-walker-29-1-254x254.jpg 254w, ./images/dog-walker-29-1-100x100.jpg 100w"
                                    sizes="(max-width: 400px) 100vw, 400px"
                                    className="wp-image-226588"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="et_pb_bottom_inside_divider et-no-transition"></div>
                    </div>{" "}
                    <div className="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_7">
                        <div className="et_pb_column et_pb_column_2_5 et_pb_column_16  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_10">
                            <span className="et_pb_image_wrap ">
                              <img
                                src="./images/dog-walker-15.png"
                                alt=""
                                title=""
                                height="auto"
                                width="auto"
                                srcset="./images/dog-walker-15.png 884w, ./images/dog-walker-15-254x356.png 254w, ./images/dog-walker-15-533x748.png 533w, ./images/dog-walker-15-510x715.png 510w"
                                sizes="(max-width: 884px) 100vw, 884px"
                                className="wp-image-226571"
                              />
                            </span>
                          </div>
                        </div>{" "}
                        <div className="et_pb_column et_pb_column_3_5 et_pb_column_17  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_11  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Back To Work Special</h2>
                              <h3>1st Walk Free!</h3>
                              
                            </div>
                          </div>{" "}
                          <div className="et_pb_button_module_wrapper et_pb_button_8_wrapper  et_pb_module ">
                            <a
                              className="et_pb_button et_pb_custom_button_icon et_pb_button_8 et_pb_bg_layout_dark"
                              href="#contact"
                              data-icon="&#x1f43e;"
                            >
                              Get Started 
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="et_pb_section et_pb_section_6 et_section_regular">
                      <div className="et_pb_row et_pb_row_8">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_18  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_12  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Dog Owner Reviews</h2>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="et_pb_row et_pb_row_9">
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_19  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_13  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              “Taylor has walked my puppy for a couple of weeks now and it's gone really well. Her feedback is great and my puppy has a fun time and always comes home happy. Keep up the great walks.”
                            </div>
                          </div>
                        </div>{" "}
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_20  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_14  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                            “They are gentle but fun. They take my dogs on nice long walks and usually somewhere nice. Very trustworthy and reliable.”
                            </div>
                          </div>
                        </div>{" "}
                        <div className="et_pb_column et_pb_column_1_3 et_pb_column_21  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_15  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              
                            “I was so satisfied by her service she was so patient and kind to my dog, I’ll recommend her for sure , she is an animal lover with a big kind heart.”
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="et_pb_section et_pb_section_7 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_10">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_22  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_16  et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2>Looking For A Professional?</h2>
                              <p>
                              Your dog is part of your family, so while in our care, they’re a part of ours. We have incorporated safety measures into every aspect of our services, whether out on a walk or in overnight care, so that while your pup is having fun, you can have peace of mind.
                              </p>
                            </div>
                          </div>{" "}
                          <div className="et_pb_button_module_wrapper et_pb_button_9_wrapper et_pb_button_alignment_center et_pb_module ">
                            <a
                              className="et_pb_button et_pb_custom_button_icon et_pb_button_9 et_pb_bg_layout_dark"
                              href="#contact"
                              data-icon="&#x1f43e;"
                            >
                              Get Started Today 
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="et_pb_row et_pb_row_11">
                        <div className="et_pb_column et_pb_column_3_5 et_pb_column_23  et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_11">
                            <span className="et_pb_image_wrap has-box-shadow-overlay">
                              <div className="box-shadow-overlay"></div>
                              <img
                                src="./images/dog-walker-29.jpg"
                                alt=""
                                title=""
                                height="auto"
                                width="auto"
                                srcset="./images/dog-walker-29.jpg 800w, ./images/dog-walker-29-254x158.jpg 254w, ./images/dog-walker-29-533x332.jpg 533w, ./images/dog-walker-29-510x317.jpg 510w"
                                sizes="(max-width: 800px) 100vw, 800px"
                                className="wp-image-226573"
                              />
                            </span>
                          </div>
                        </div>{" "}
                        <div className="et_pb_column et_pb_column_2_5 et_pb_column_24  et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_17  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3 id="contact">Get in Touch By Phone Or Email</h3>
                              <p>
                      <form className={classes.form} noValidate>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"     
                        onChange={changeHandler}     
                        onClick = {()=>{setsent(false)}}             
                       
                      />      
                      
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"     
                        onChange={changeHandler}     
                        onClick = {()=>{setsent(false)}}             
                       
                      />                     
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="phone"
                        label="Phone Number"
                        type="phone"
                        id="phone"
                        autoComplete="phone"
                        onChange={changeHandler}      
                        onClick = {()=>{setsent(false)}}             
                      />
                       <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="message"
                        label="Message"
                        type="message"
                        id="message"
                        autoComplete="message"
                        onChange={changeHandler}      
                        multiline
                        rows={4}
                        onClick = {()=>{setsent(false)}}             
                      />
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleOnClick}
                       
                      >
                        Let's Chat!
                      </Button>
                    </form>
                    {send?('Thanks! We will get back to you ASAP!'):null}
                              </p>
                            </div>
                          </div>{" "}
                          {/* <div className="et_pb_module et_pb_text et_pb_text_18  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3>Phone</h3>
                              <p>(245) 426-3523</p>
                            </div>
                          </div>{" "} */}
                          {/* <div className="et_pb_module et_pb_text et_pb_text_19  et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3>Email</h3>
                              <p>
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="197a766d78777a6d597d706f707d767e6e7875727c6b377a7674"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                              5 5 5 5 5 5 5 5 5 5 5
                            </div> */}
                          {/* </div> */}
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

export default Home;
