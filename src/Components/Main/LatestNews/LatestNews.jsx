import React, { useEffect, useState } from 'react';
import SectionTitle from '../Title/SectionTitle';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const [Data, setData] = useState([]);

  const LatestThreeNews = Data.slice(0, 3);
  const foreNumberNews = Data.slice(4, 5);
  console.log(foreNumberNews);

  useEffect(() => {
    axios('http://localhost:3000/latest-news').then(res => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="h-full p-3 md:p-10">
      <SectionTitle
        subTitle="Explore some of the latest trends"
        mainTitle="Latest News"
      ></SectionTitle>

      <div className=" w-full h-full lg:flex gap-16 p-5">
        <div className="w-full lg:w-9/12   md:flex gap-5 md:gap-10 lg:gap-16">
          <div className="md:w-1/3  grid grid-cols-1 gap-10">
            {LatestThreeNews.map(threeNews => (
              <Link to={`/NewsDetails/${threeNews._id}`}>
                <div key={threeNews._id}>
                  <div className="h-[180px] w-full">
                    <img
                      className="w-full h-full rounded-md"
                      src={threeNews.newsImage}
                      alt="News Image"
                    />
                  </div>
                  <div className="mt-3 space-y-2">
                    <h6 className=" font-bold">{threeNews.heading}</h6>
                    <p>{threeNews.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className=" md:w-2/3 my-10 md:my-0">
            <div>
              {foreNumberNews.map(ForeNews => (
                <div key={ForeNews._id}>
                  <div className="h-[250px] md:h-[300px] w-full">
                    <img
                      className="h-full w-full"
                      src={ForeNews.newsImage}
                      alt="News Images"
                    />
                  </div>

                  <div className="mt-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-14 h-14 rounded-full border"
                          src={ForeNews.authorProfilePic}
                          alt="Author Profile Pic"
                        />
                        <h6 className="font-bold text-xl">
                          {ForeNews.authorName}
                        </h6>
                      </div>
                      <small className="">{ForeNews.date}</small>
                    </div>
                    <h6 className="text-2xl md:text-4xl font-bold ">
                      {ForeNews.heading}
                    </h6>

                    <p className="mt-5 text-gray-500">
                      {ForeNews.subDescription}
                    </p>

                    <Link to={`/NewsDetails/${ForeNews._id}`}>
                      <button className="btn btn-outline btn-sm rounded-none uppercase mt-5">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="border bg-gray-50 mt-10 py-5 md:p-10 flex flex-col justify-center items-center space-y-3">
              <h5 className="text-xl md:text-2xl font-bold">
                Subscribe to our Newsletter
              </h5>
              <p className="p-3 text-center">
                Get the latest news and content tailored to your interests.
              </p>

              <div className="join">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-cyan-400 text-white md:text-lg md:font-bold join-item">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/12 ">
          <h6 className="text-2xl font-bold mb-5  text-gray-400 text-center">
            Latest Posts
          </h6>

          <div className="grid grid-cols-1 gap-5 md:gap-7">
            {Data.map(News => (
              <Link to={`/NewsDetails/${News._id}`}>
                <div key={News._id} className="flex gap-5 h-[100px] border-b">
                  <div className="w-1/3 h-full">
                    <img
                      className="w-full h-full"
                      src={News.newsImage}
                      alt="News Image"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-2/3">
                    <h6 className="text-sm font-bold">{News.heading}</h6>
                    <small>{News.date}</small>
                    <small className="text-gray-400">
                      By {News.authorName}
                    </small>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
