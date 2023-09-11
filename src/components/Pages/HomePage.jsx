import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";
import Layout from "../Layout/layout";
import Headline from "../Sections/Headline";
import Lamela from "../Sections/Lamela";
import Benefits from "../Sections/Benefits";
import Iskustvo from "../Sections/Iskustvo";

const HomePage = () => {
  return (
    <Layout>
      <div className="relative z-10">
        <Carousel
          className="w-full h-screen"
          autoplay={true}
          autoplayDelay={5000}
          loop={true}>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="1"
              className="h-full w-full object-cover"
            />
            <div className="absolute translate-x-2/4 translate-y-full  inset-0 grid h-1/3 w-1/2 place-items-center bg-teal-900/75">
              <div className="w-full text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  NAJPOVOLJNIJI STANOVI U GRADU
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="2"
              className="h-full w-full object-cover"
            />
            <div className="absolute translate-x-2/4 translate-y-full  inset-0 grid h-1/3 w-1/2 place-items-center bg-teal-900/75">
              <div className="w-full text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  NA ATRAKTIVNOJ LOKACIJI
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="3"
              className="h-full w-full object-cover"
            />
            <div className="absolute translate-x-2/4 translate-y-full  inset-0 grid h-1/3 w-1/2 place-items-center bg-teal-900/75">
              <div className="w-full text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  STANOVI ODMAH USELJIVI
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
        <Headline />
        <Lamela />
        <Iskustvo />
        <Benefits />
      </div>
    </Layout>
  );
};

export default HomePage;
