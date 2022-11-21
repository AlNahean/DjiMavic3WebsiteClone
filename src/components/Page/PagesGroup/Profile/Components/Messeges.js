import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

const MessegesData = [
  {
    id: 1,
    name: "Tomalasu",
    msg: "I've finished it! See you so...",
    img: "/images/users/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Nahean",
    msg: "I've finished it! See you so...",
    img: "/images/users/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Tomalasu",
    msg: "I've finished it! See you so...",
    img: "/images/users/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Tomalasu",
    msg: "I've finished it! See you so...",
    img: "/images/users/avatar-4.jpg",
  },
  {
    id: 5,
    name: "Tomalasu",
    msg: "I've finished it! See you so...",
    img: "/images/users/avatar-5.jpg",
  },
  // {
  //   id: 6,
  //   name: "Tomalasu",
  //   msg: "I've finished it! See you so...",
  //   img: "/images/users/avatar-1.jpg",
  // },
];

const Messeges = () => {
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Messeges")}
        <div className=" card-body">
          <div className=" d-flex flex-column ">
            {/* Map */}
            {MessegesData.map((item) => {
              return (
                <div
                  className=" d-flex align-content-center justify-content-between ps-2 pe-2 pt-3 pb-3 ct-hover"
                  key={item.id}
                >
                  <div className=" d-flex align-items-center">
                    <img
                      src={item.img}
                      alt=""
                      className=" avatar-sm rounded-circle"
                    />
                    <div className=" ms-2 text-muted">
                      <p className=" m-0">
                        <strong>{item.name}</strong>
                      </p>
                      <p className=" m-0 ">
                        <small>{item.msg}</small>
                      </p>
                    </div>
                  </div>
                  <div className=" text-info center">Reply</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messeges;
