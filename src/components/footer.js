import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import acicfooter from "../assets/acicfooter.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Column,
  Container,
  FooterLink,
  Heading,
  Row,
} from "./footerStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { pink, red } from "@mui/material/colors";
import CallIcon from "@mui/icons-material/Call";
const Footer = () => (
  <div className="footer">
    <div className="image"></div>
    <Box>
      <img src={acicfooter} height="160px" align="left" />

      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "-50px",
        }}
      >
        Feel free to reach out to us :
      </h1>
      <br />
      <Container>
        <Row>
          <Column>
            <FooterLink href="https://www.google.com/maps/place/BML+Munjal+University+(BMU)/@28.2476758,76.8114382,17z/data=!3m1!4b1!4m5!3m4!1s0x390d478e1d59b7fb:0xb1787ccb5563c223!8m2!3d28.2476758!4d76.8136269">
              <LocationOnIcon sx={{ color: red[500], fontSize: 99 }} />
              <a href="https://www.google.com/maps/place/BML+Munjal+University+(BMU)/@28.2476758,76.8114382,17z/data=!3m1!4b1!4m5!3m4!1s0x390d478e1d59b7fb:0xb1787ccb5563c223!8m2!3d28.2476758!4d76.8136269">
                <div className="mcd">BML Munjal University</div>
              </a>
            </FooterLink>
          </Column>
          <Column>
            <Heading></Heading>
            <FooterLink href="#">
              <CallIcon sx={{ fontSize: 90 }} />
              123456789
            </FooterLink>
          </Column>
          <Column>
            <Heading></Heading>
            <FooterLink href="mailto:acic@bmu.edu.in">
              <MailOutlineIcon sx={{ fontSize: 90 }} />
              <a href="mailto:acic@bmu.edu.in">
                <div className="mcd">acic@bmu.edu.in</div>
              </a>
            </FooterLink>
          </Column>
          <Column>
            <Heading></Heading>
            <FooterLink href="https://www.instagram.com/acicbmu/">
              <InstagramIcon sx={{ fontSize: 90 }} />
              <a href="https://www.instagram.com/acicbmu/" color="#fff">
                <div className="mcd">@acicbmu</div>
              </a>
            </FooterLink>
          </Column>
          <Column>
            <Heading></Heading>
            <FooterLink href="https://mobile.twitter.com/acic_bmu">
              <TwitterIcon sx={{ fontSize: 90 }} />
              <a href="https://mobile.twitter.com/acic_bmu">
                <div className="mcd">@acic_bmu</div>
              </a>
            </FooterLink>
          </Column>
          <Column>
            <Heading></Heading>
            <FooterLink href="#">
              <FacebookIcon sx={{ fontSize: 90 }} />
            </FooterLink>
          </Column>
        </Row>
        <br />
        <div className="trademark">@ACIC-BMUFOUNDATION2021</div>
      </Container>
    </Box>
  </div>
);

export default Footer;
