import React from "react";
import PageTitleBreadcrumb from "../../../Shared/Extra/PageTitleBreadcrumb";
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillQuestionCircle,
} from "react-icons/ai";

const FAQMainContent = () => {
  return (
    <div className=" page-main">
      <div className=" main-content container-fluid w-100">
        <PageTitleBreadcrumb title="FAQ" path="FAQ" />
        <div className=" card">
          <div className=" card-body">
            <div className=" center flex-column">
              <h1 className=" text-center">Frequently Asked Questions</h1>
              <p style={{ maxWidth: "700px" }} className=" text-center">
                Nisi praesentium similique totam odio obcaecati, reprehenderit,
                dignissimos rem temporibus ea inventore alias! Beatae animi nemo
                ea tempora, temporibus laborum facilis ut!
              </p>
              <div className=" d-flex">
                <button className=" btn btn-success center me-2">
                  <AiOutlineMail className=" me-2" />
                  <small>Email us your problem</small>
                </button>
                <button className=" btn btn-info text-white center">
                  <AiOutlineTwitter className=" me-2" />
                  <small>Send us a tweet</small>
                </button>
              </div>
            </div>
            <div className=" row mt-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return (
                  <div className=" col-12 col-md-6">
                    <div className=" d-flex p-2 ">
                      <div
                        className=" text-info me-3"
                        style={{ fontSize: "2rem" }}
                      >
                        <AiFillQuestionCircle className=" " />
                      </div>
                      <div>
                        <h5 className=" text-info">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.?
                        </h5>
                        <p className=" small ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur sed sit beatae non molestiae, corrupti
                          eius sapiente dolore et qui placeat ab similique
                          laboriosam nihil debitis. Maxime fugiat nihil neque.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQMainContent;
