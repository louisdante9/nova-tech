// @ts-nocheck
import React, { useState, useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Tooltip from "@mui/material/Tooltip";

const Section = styled(Box)({
	height: '100%',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
	transition: 'background 2s ease',
  padding: "50px 30px",
  "& h2, div": {
		textAlign: 'center',
    width: "50%",
    padding: "0 15px",
  },
});

export function Content() {

	
	const [scrollPosition, setScrollPosition] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleNavigation = (page: string) => {
    document
      .getElementById(`${page.toLowerCase()}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box
        component={"main"}
        sx={{
          maxWidth: "1240px",
          margin: "0 auto",
          "&>: nth-of-type(even)": {
            flexDirection: "row-reverse",
          },
        }}
      >
        <Fade in={trigger}>
          <Box
            sx={{
              position: "fixed",
              right: "20px",
              top: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Tooltip title="Who We Are" placement="left-start">
              <Fab
                color="success"
                sx={{ borderRadius: "10px", bgcolor: "#000" }}
                onClick={() => handleNavigation("Who We Are")}
              >
                <InfoIcon sx={{ color: "#fff" }} />
              </Fab>
            </Tooltip>
            <Tooltip title="Services" placement="left-start">
              <Fab
                color="warning"
                sx={{ borderRadius: "10px", bgcolor: "#000" }}
                onClick={() => handleNavigation("services")}
              >
                <DesignServicesIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="connect with us" placement="left-start">
              <Fab
                color="secondary"
                sx={{ borderRadius: "10px", bgcolor: "#000" }}
                onClick={() => handleNavigation("contact")}
              >
                <ConnectWithoutContactIcon />
              </Fab>
            </Tooltip>
          </Box>
        </Fade>
        <Section id="who we are" component={"section"} sx={{ ...(scrollPosition >= 400 && scrollPosition <= 1500 ? { bgcolor: '#000', color: '#fff', transition: 'background 5s ease' } : '')}}  >
          <Box component={"h2"}>Who We Are</Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 100 }}>
              At Nova-Tech, we are more than just a service provider — we're a
              team of passionate professionals dedicated to [core mission or
              purpose]. Our journey began with a shared vision: to [brief
              description of founding principles]. Since our inception, we've
              been committed to [key values or principles].
            </Typography>
          </Box>
        </Section>

        <Section id="our-mission" component={"section"} sx={{ ...(scrollPosition >= 1500 && scrollPosition < 2500? { bgcolor: '#000', color: '#fff', transition: 'background 2s ease' } : '' )}}  >
          <Box component={"h2"}>Our Mission</Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 100 }}>
              Our mission is simple: [state your mission clearly]. We believe in
              [core belief or philosophy], and every member of our team is
              aligned with this vision. It's not just about what we do; it's
              about [impact or change you aim to bring].
            </Typography>
          </Box>
        </Section>

        <Section id="our-approach" component={"section"} sx={{ ...(scrollPosition >= 2500 && scrollPosition < 3500? { bgcolor: '#000', color: '#fff', transition: 'background 2s ease' } : { bgcolor: '#fff', color: '#000', transition: 'background 2s ease' })}}>
          <Box component={"h2"}>Our Approach</Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 100 }}>
              What sets us apart is our [unique approach/methodology]. We don't
              just [describe the process]; we [highlight what makes your
              approach distinctive]. This commitment to excellence has earned us
              the trust of [number of clients served or any notable
              achievements].
            </Typography>
          </Box>
        </Section>

        <Section id="our-team" component={"section"} sx={{ ...(scrollPosition >= 3500 && scrollPosition < 4500? { bgcolor: '#000', color: '#fff', transition: 'background 2s ease' } : { bgcolor: '#fff', color: '#000', transition: 'background 2s ease' })}}>
          <Box component={"h2"}>Our Team</Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 100 }}>
              Behind every success story is a dedicated team, and we take pride
              in ours. Our team comprises [mention key roles or expertise], each
              bringing [brief highlight of their unique contributions].
              Together, we synergize to [key team objective].
            </Typography>
          </Box>
        </Section>

        <Section id="services" component={"section"} sx={{ ...(scrollPosition >= 4000 && scrollPosition < 5000? { bgcolor: '#000', color: '#fff', transition: 'background 2s ease' } : { bgcolor: '#fff', color: '#000', transition: 'background 2s ease' })}}>
          <Box component={"h2"}>Our Services</Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 100, pt: 2, pb: 2 }}>
              Unlock the full potential of your online presence with our
              comprehensive suite of services designed to elevate your brand and
              drive meaningful results.
            </Typography>
            <h3>Web Development:</h3>
            <Typography variant="h5" sx={{ fontWeight: 100, pt: 2, pb: 2 }}>
              Craft visually stunning and responsive websites tailored to your
              needs. Services include custom development, frontend/backend
              solutions, e-commerce, CMS, and maintenance.
            </Typography>

            <h3>Data Analysis:</h3>
            <Typography variant="h5" sx={{ fontWeight: 100, pt: 2, pb: 2 }}>
              Transform raw data into actionable insights using advanced
              analytics. Gain a strategic advantage with services like data
              visualization, predictive analytics, business intelligence, data
              mining, and performance metrics.
            </Typography>

            <h3>Social Media Marketing:</h3>
            <Typography variant="h5" sx={{ fontWeight: 100, pt: 2, pb: 2 }}>
              Navigate the dynamic world of social media with tailored
              strategies. From increasing brand awareness to driving engagement,
              our services cover social media strategy, content creation,
              campaign management, influencer marketing, and analytics.
            </Typography>
          </Box>
        </Section>

        <Section id="why-choose-us" component={"section"} sx={{ ...(scrollPosition >= 4800 && scrollPosition < 6000? { bgcolor: '#000', color: '#fff', transition: 'background 2s ease' } : { bgcolor: '#fff', color: '#000', transition: 'background 2s ease' })}}>
          <Box component={"h2"}>Why Choose Us</Box>
          <Box>
            <Box component="ul">
              <Typography
                component="li"
                variant="h6"
                sx={{ fontWeight: 100, pt: 2, pb: 2, listStyleType: "none" }}
              >
                <strong>Expertise:</strong> Benefit from our [years of
                experience/industry expertise].
              </Typography>
              <Typography
                component="li"
                variant="h6"
                sx={{ fontWeight: 100, pt: 2, pb: 2, listStyleType: "none" }}
              >
                <strong>Innovation:</strong> We thrive on [innovation/creative
                solutions], ensuring you stay ahead.
              </Typography>
              <Typography
                component="li"
                variant="h6"
                sx={{ fontWeight: 100, pt: 2, pb: 2, listStyleType: "none" }}
              >
                <strong>Client-Centric:</strong> Your success is our priority,
                and we go the extra mile to ensure satisfaction.
              </Typography>
              <Typography
                component="li"
                variant="h6"
                sx={{ fontWeight: 100, pt: 2, pb: 2, listStyleType: "none" }}
              >
                <strong>Results-Driven:</strong> We measure success by [key
                metrics/results], and we're committed to delivering.
              </Typography>
            </Box>
          </Box>
        </Section>
      <Box
        id="contact"
        component={"section"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 6,
          maxWidth: "1240px",
          margin: "0 auto",
          padding: 5,
					pb: 20
        }}
      >
        <Box component={"h2"} sx={{ pb: 3 }}>
          Join Us
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 100 }}>
          Whether you're [describe your target audience], we are here to [how
          you can assist]. Join us on this journey of [describe the journey] and
          let's [achieve a shared goal/mission].
        </Typography>
        <Box>
          <a href="#contact-us">Contact Us</a> /{" "}
          <a href="#explore-services">Explore Our Services</a> and experience
          the Nova-tech difference.
        </Box>
      </Box>
      </Box>
    </>
  );
}
