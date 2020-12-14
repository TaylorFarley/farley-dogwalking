import React, { useEffect, useState, useContext } from "react";
import GoogleButton from "react-google-button";
import Calendar from "../Calendar";
import axios from "axios";
import UserContext from "../../context/UserContext";
import $ from "jquery";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TransitionsModal from "../Modal";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034)",
    boxShadow: "0 6.7px 5.3px rgba(0, 0, 0, 0.048)",
    boxShadow: "0 12.5px 10px rgba(0, 0, 0, 0.06)",
    boxShadow: "0 22.3px 17.9px rgba(0, 0, 0, 0.072)",
    boxShadow: "0 41.8px 33.4px rgba(0, 0, 0, 0.086)",
    boxShadow: "0 100px 80px rgba(0, 0, 0, 0.12)",
    margin: "1px auto",
    background: "white",
    borderRadius: "5px",
    border: "0.5px solid black",
    padding: "5%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const BookAppointment = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalState, setmodalState] = React.useState(false);
  const { userData, setUserData } = useContext(UserContext);
  useEffect(() => {
    const getgoogleinfo = axios.post("/auth/getgoogleinfo").then((res) => {
      console.log(res.data);

      setUserData(res.data);
    });
  }, []);
  const changeHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOpenGuest = () => {
    setOpen(true);
    setmodalState(true);
  };

  const handleOpenSignup = () => {
    setOpen(true);
    setmodalState(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const guestHandler = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              {modalState?(<h1>Guest</h1>):(<h1>Sign Up</h1>)}
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  {modalState ? (
                    <form className={classes.form} noValidate>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={changeHandler}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="address"
                        label="Address"
                        type="address"
                        id="address"
                        autoComplete="address"
                        onChange={changeHandler}
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
                      />

                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={guestHandler}
                      >
                        Continue
                      </Button>
                    </form>
                  ) : null}
                </div>
              </Container>
            </div>
          </Fade>
        </Modal>
      </div>
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
                              {userData.email ? (
                                <>
                                  <h1>Welcome! {userData.username}</h1>
                                  <h2>
                                    Please select an available date for booking!
                                  </h2>
                                  <p>
                                    <Calendar />
                                  </p>
                                </>
                              ) : (
                                <>
                                  <h1>Please Log In</h1>
                                  <Container component="main" maxWidth="xs">
                                    <CssBaseline />

                                    <div className={classes.paper}>
                                      <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={handleOpenGuest}
                                      >
                                        Continue As Guest
                                      </Button>
                                      <form className={classes.form} noValidate>
                                        <div class="separator">Or</div>

                                        <Typography
                                          component="h1"
                                          variant="h5"
                                          className
                                          align="left"
                                        >
                                          Sign in
                                        </Typography>
                                        <TextField
                                          variant="outlined"
                                          margin="normal"
                                          required
                                          fullWidth
                                          id="email"
                                          label="Email Address"
                                          name="email"
                                          autoComplete="email"
                                        />
                                        <TextField
                                          variant="outlined"
                                          margin="normal"
                                          required
                                          fullWidth
                                          name="password"
                                          label="Password"
                                          type="password"
                                          id="password"
                                          autoComplete="current-password"
                                        />

                                        <Button
                                          type="submit"
                                          fullWidth
                                          variant="contained"
                                          color="primary"
                                          className={classes.submit}
                                        >
                                          Sign In
                                        </Button>
                                        <Grid container>
                                          
                                          <Grid item>
                                            <p
                                              variant="body2"
                                              onClick={handleOpenSignup}
                                              style={{ cursor: "pointer" }}
                                            >
                                              Don't have an account? Sign Up
                                            </p>
                                          </Grid>
                                        </Grid>
                                        <div class="separator">Or</div>
                                        <div>
                                          <a href="http://localhost:4000/auth/google">
                                            <GoogleButton
                                              style={{ width: "100%" }}
                                            />
                                          </a>
                                        </div>
                                      </form>
                                    </div>
                                    <Box mt={8}></Box>
                                  </Container>
                                </>
                              )}
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
