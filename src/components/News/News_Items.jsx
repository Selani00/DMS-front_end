import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import image from "../../assets/Footer.png";
import image2 from "../../assets/about.png";
import defaulf_image from "../../assets/News.png"
import axios from 'axios';



const news_list = [
    {
      id: 1,
      heading: "This is news heading 1",
      Auther: "Auther",
      date: "31 Dec 2023",
      time: "8AM",
      image: image,
      news_body:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 2,
      heading: "This is news heading 2 dw  dwef  ew fcds fsdf sdfdssdfsdf fdsfsdfdsf fdsfds",
      Auther: "Auther 2",
      date: "31 Dec 2023",
      time: "8AM",
      image: image2,
      news_body:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 3,
      heading: "This is news heading 3",
      Auther: "Auther 3",
      date: "31 Dec 2023",
      time: "8AM",
      image: image,
      news_body:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 4,
      heading: "This is news heading 4",
      Auther: "Auther 4",
      date: "31 Dec 2023",
      time: "8AM",
      image: image2,
      news_body:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
        id: 5,
        heading: "This is news heading 4",
        Auther: "Auther 4",
        date: "31 Dec 2023",
        time: "8AM",
        news_body:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      },
  ];


const News_Items = ({onSelectedNews}) => {  
    const [newsSelected,setNewsSelected]=useState(news_list[0]);
    // const [newsList,setNewsList]=useState([]);

    // async function fetchNews(){
    //   const newsItems = await axios.post("http://localhost:5000/api/news/getNews");
    //   setNewsList(newsItems);
    //   setNewsSelected(newsItems.data[0]);
    // }

    const handleMouseClick = (news) => {
      setNewsSelected(news);
      onSelectedNews(news);// This will be a function to pass the selected news to the parent component
    };

    useEffect(()=>{
      // (async () => await fetchNews())();
      onSelectedNews(newsSelected);
    },[]);

    // useEffect(()=>{
    //   if(newsSelected) console.log("Selected News",newsSelected);
    // },[newsSelected]);


  return (
    <>
    <div className="px-2 py-2">
            <h1 className="text-primary font-bold md:text-2xl text-lg py-3">              
              More News
            </h1>

            {/* News item */}
            <div >
              {news_list.map((news) => (
                <div 
                key={news.id}
                className="flex items-center justify-start gap-2 bg-gray-200 h-20 my-2 cursor-pointer" 
                onClick={()=>handleMouseClick(news)}>
                  <div className="w-1/3   py-0 h-full">
                    <img
                      src={news.image? news.image : defaulf_image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mr-2 py-2">
                    <h1 className="font-semibold text-black text-base" >
                      {news.heading.slice(0,35)}
                    </h1>

                    <div className=" mt-3 flex justify-between text-xs">
                      <p className="text-black">{news.Auther}</p>
                      <p className="text-gray-800">{news.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-3">
              <button
                type="button"
                className="text-white w-full bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-sm text-base px-5 py-2 me-2 mb-2  focus:outline-none "
              >
                View More
              </button>
            </div>
          </div>
      
    </>
  )
}

export default News_Items
