import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const NewsDetails = () => {
  const LoderData = useLoaderData();
  const navigate = useNavigate();

  const {
    heading,
    subDescription,
    authorProfilePic,
    authorName,
    date,
    category,
    newsImage,
    description,
  } = LoderData;
  console.log(LoderData);

  const [Data, setData] = useState([]);

  useEffect(() => {
    axios(
      'https://employee-management-server-site-ashy.vercel.app/latest-news'
    ).then(res => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="py-32 w-11/12 lg:w-10/12 mx-auto relative">
      <button
        onClick={handleBack}
        className="absolute top-24 lg:top-28 md:-left-8 lg:-left-32"
      >
        <i class="fa-solid fa-arrow-left"></i>Back
      </button>

      <div className="w-full  md:flex md:gap-10 lg:gap-16">
        <div className="w-full md:w-2/4 lg:w-3/4  h-full ">
          <div className=" space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              {heading}
            </h2>
            <p className="">{subDescription}</p>

            <div className="w-full h-[400px] lg:h-[500px]">
              <img className="h-full w-full" src={newsImage} alt="" />
            </div>

            <div className="md:flex items-center gap-5 md:gap-10">
              <div className="flex items-center gap-3">
                <img
                  className="w-14 h-14 rounded-full border"
                  src={authorProfilePic}
                  alt="Author Profile Pic"
                />
                <h6 className="font-bold text-xl md:text-2xl">{authorName}</h6>
              </div>

              <div className="mt-3 md:mt-0 flex justify-between items-center gap-5">
                <p className="font-bold">{category}</p>
                <p className="">{date}</p>
              </div>
            </div>

            <p>{description}</p>
          </div>

          <div className="mt-5 md:mt-10 space-y-3 md:space-y-4">
            <h5 className="text-lg font-bold">
              Post your comments on this news
            </h5>

            <textarea
              className="textarea textarea-bordered h-[150px] w-full"
              placeholder="Comment"
            ></textarea>

            <div className="md:flex items-center gap-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full md:w-1/2"
              />

              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full md:w-1/2 mt-3 md:mt-0"
              />
            </div>

            <button className="btn  rounded-none ">Post Comment</button>
          </div>
        </div>

        <div className="w-full md:w-2/4 lg:w-1/4 border h-full my-10 md:my-0 p-5">
          <h6 className="text-2xl font-bold mb-5  text-gray-400 text-center">
            Latest Posts
          </h6>
          <div className="grid grid-cols-1 gap-5 md:gap-7">
            {Data.map(News => (
              <Link to={`/NewsDetails/${News._id}`}>
                <div key={News._id} className="flex gap-5 h-[100px] border-b ">
                  <div className="w-1/3 h-full">
                    <img
                      className="w-full h-full"
                      src={News.newsImage}
                      alt="News Image"
                    />
                  </div>
                  <div className="flex flex-col w-2/3">
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

export default NewsDetails;
