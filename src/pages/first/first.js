import React from "react";
import "./first.css";
import SideBar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/navbar";
import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";

// import Buttons from "../../components/buttons/button";
// import ProgressB from "../../components/progress/progress";
// import WithHeaderExample from "../../components/card/card";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
const Home = () => {
  const [value, onChange] = useState(new Date());

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Culnary skills",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "cookery class",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Photography club",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Cooking class",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "coding class",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Nature club",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Sports club",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Gardening",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Adventure club",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "cycling",
    },
  ];
  return (
    <>
      <div className="home">
        <SideBar />
        <div className="homeContainer">
          <NavBar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="calender">
            <Calendar onChange={onChange} value={value} />
            <ImageList sx={{ width: 500, height: 450 }}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar title={item.title} position="below" />
                </ImageListItem>
              ))}
            </ImageList>
          </div>

          {/*  <div className="chf">
            <div className="charts">
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>
            <div className="feature">
              <Featured />
            </div>
          </div>
          <div className="PW">
            <div className="pro">
              Latest Transactions
              <ProgressB />
            </div>
            <div className="with">
              <WithHeaderExample />
            </div>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Buttons />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
