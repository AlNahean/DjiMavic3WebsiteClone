import React from "react";
import {
  GrTwitter,
  GrFacebookOption,
  GrGithub,
  GrLinkedinOption,
  GrSkype,
} from "react-icons/gr";
import { AiFillInstagram, AiOutlineSave } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa";
const Settings = () => {
  return (
    <div className=" text-muted">
      <h5 className=" bg-primary w-100 mt-3 mb-3 p-3 d-flex align-items-center text-white">
        {" "}
        <span className=" me-2">
          <BsPersonCircle />
        </span>{" "}
        Personal Info
      </h5>{" "}
      <div className=" row">
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="firstName" className=" form-label">
              First Name
            </label>
            <input
              type="text"
              className=" form-control"
              placeholder="Enter your first name"
            />
          </div>
        </div>
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="firstName" className=" form-label">
              Last Name
            </label>
            <input
              type="text"
              className=" form-control"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        {/* Text Area */}
        <div className=" col-12 col-lg-12">
          <div className=" mb-3">
            <label htmlFor="bio" className=" form-label">
              Bio
            </label>
            <textarea
              name="bio"
              cols="10"
              rows="6"
              className=" form-control"
            ></textarea>
          </div>
        </div>
        {/* Auth */}
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="email" className=" form-label">
              Email
            </label>
            <input
              type="email"
              className=" form-control"
              placeholder="Enter your email"
            />
            <small className=" ms-2">
              If you want to change email please
              <span className=" text-primary ms-2">click</span> here.
            </small>
          </div>
        </div>
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="password" className=" form-label">
              Password
            </label>
            <input
              type="text"
              className=" form-control"
              placeholder="Enter your password"
            />
            <small className=" ms-2">
              If you want to change password please
              <span className=" text-primary ms-2">click</span> here.
            </small>
          </div>
        </div>
      </div>
      <h5 className=" bg-primary w-100 mt-3 mb-3 p-3 d-flex align-items-center text-white">
        <span className=" me-2">
          <FaBuilding />
        </span>
        Company Info
      </h5>
      <div className=" row">
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="company name" className=" form-label">
              Company name
            </label>
            <input
              type="text"
              className=" form-control"
              placeholder="Enter company name"
            />
          </div>
        </div>
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="company name" className=" form-label">
              Website Url
            </label>
            <input
              type="url"
              className=" form-control"
              placeholder="Enter Url"
            />
          </div>
        </div>
      </div>
      <h5 className=" bg-primary w-100 mt-3 mb-3 p-3 d-flex align-items-center text-white">
        <span className=" me-2">
          <BiWorld />
        </span>
        Social
      </h5>
      <div className=" row">
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="" className=" form-label">
              Facebook
            </label>
            <div className=" input-group ">
              <span className=" input-group-text border-0 bg-primary text-white">
                <GrFacebookOption />
              </span>
              <input type="url" className=" form-control" placeholder="Url" />
            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="" className=" form-label">
              Twitter
            </label>
            <div className=" input-group ">
              <span className=" input-group-text border-0 bg-primary text-white">
                <GrTwitter />
              </span>
              <input type="url" className=" form-control" placeholder="Url" />
            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="" className=" form-label">
              Instagram
            </label>
            <div className=" input-group ">
              <span className=" input-group-text border-0 bg-primary text-white">
                <AiFillInstagram />
              </span>
              <input type="url" className=" form-control" placeholder="Url" />
            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="" className=" form-label">
              Linkedin
            </label>
            <div className=" input-group ">
              <span className=" input-group-text border-0 bg-primary text-white">
                <GrLinkedinOption />
              </span>
              <input type="url" className=" form-control" placeholder="Url" />
            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="" className=" form-label">
              Skype
            </label>
            <div className=" input-group ">
              <span className=" input-group-text border-0 bg-primary text-white">
                <GrSkype />
              </span>
              <input type="url" className=" form-control" placeholder="Url" />
            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-6">
          <div className=" mb-3">
            <label htmlFor="" className=" form-label">
              Github
            </label>
            <div className=" input-group ">
              <span className=" input-group-text border-0 bg-primary text-white">
                <GrGithub />
              </span>
              <input type="url" className=" form-control" placeholder="Url" />
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-end m-3">
        <button className=" btn btn-success center ">
          <AiOutlineSave />
          <span className=" ms-2">Save</span>
        </button>
      </div>
    </div>
  );
};

export default Settings;
