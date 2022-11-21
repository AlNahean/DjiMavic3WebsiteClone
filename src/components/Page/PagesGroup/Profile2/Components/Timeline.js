import React from "react";
import { GoLocation } from "react-icons/go";
import { AiFillCamera } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
const Timeline = () => {
  return (
    <div>
      <div className=" comment-area-box  mt-3">
        <textarea
          name="post"
          id=""
          cols="20"
          rows="4"
          className=" form-control"
          placeholder="Write Something..."
        ></textarea>
        <div className=" d-flex justify-content-between align-items-center p-2">
          <div className=" d-flex center">
            <div className=" m-2">
              <BsPersonCircle />
            </div>
            <div className="m-2 ">
              <GoLocation />
            </div>
            <div className="m-2 ">
              <AiFillCamera />
            </div>
            <div className="m-2 ">
              <FaSmile />
            </div>
          </div>
          <div>
            <button className=" btn btn-dark">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
