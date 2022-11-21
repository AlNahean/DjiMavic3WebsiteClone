import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

import {
  BsCurrencyBitcoin,
  BsCurrencyEuro,
  BsCurrencyPound,
  BsCurrencyYen,
} from "react-icons/bs";
import { BiRuble } from "react-icons/bi";
import { SiEthereum } from "react-icons/si";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

const MyWtchlistData = [
  {
    id: 1,
    title: "Bitcoin (BTC)",
    value: 48665,
    progress: 10,
    icon: <BsCurrencyBitcoin />,
  },
  {
    id: 2,
    title: "Ethereum",
    value: 3665,
    progress: -12,
    icon: <SiEthereum />,
  },
  {
    id: 3,
    title: "Pound",
    value: 1.13,
    progress: 15,
    icon: <BsCurrencyPound />,
  },
  {
    id: 4,
    title: "Yen",
    value: 129.24,
    progress: 11,
    icon: <BsCurrencyYen />,
  },
  {
    id: 5,
    title: "Ruble",
    value: 0.014,
    progress: -10,
    icon: <BiRuble />,
  },
  {
    id: 6,
    title: "Bitcoin (BTC)",
    value: 48665,
    progress: 18,
    icon: <BsCurrencyBitcoin />,
  },
];
const MyWatchlist = () => {
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  const getState = (progress) => {
    let f = Math.sign(progress);
    if (f === 1) {
      return true;
    } else if (f === -1) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <div className=" card mb-3 .box-h">
        {getCardHeader("My Watchlist")}
        <div
          className=" card-body custom-scrollbar-sm"
          style={{ maxHeight: " 425px", overflow: "auto" }}
        >
          {/* sdsadasf */}
          {MyWtchlistData.map((item) => {
            let isPositive = getState(item.progress);
            return (
              <div
                className=" d-flex justify-content-between align-items-center  p-4 border-bottom ct-hover "
                style={{ opacity: "0.9" }}
                key={item.id}
              >
                <div className=" d-flex align-items-center">
                  <div
                    className={` watchlist-icon avatar-sm center  me-2 border-2 solid rounded-circle border ${
                      isPositive
                        ? "border-success text-success bg-success-lighten"
                        : "border-danger text-danger bg-danger-lighten"
                    }   `}
                    style={
                      {
                        // borderRadius: "50%",
                        // border: "1px solid red",
                        // color: "red",
                        // backgroundColor: "#ff00004d",
                      }
                    }
                  >
                    {item.icon}
                  </div>
                  <div className=" text-muted">
                    <h5
                      className={` mb-0 ${
                        isPositive ? "text-success" : "text-danger"
                      }`}
                    >
                      {item.title}
                    </h5>
                    <p className=" mb-0 text-muted">${separator(item.value)}</p>
                  </div>
                </div>
                <div
                  className={`d-flex  ${
                    isPositive ? "text-success" : "text-danger"
                  }`}
                  style={{}}
                >
                  <div className=" center me-2">
                    {isPositive ? (
                      <BiTrendingUp className="" />
                    ) : (
                      <BiTrendingDown className="" />
                    )}
                  </div>
                  {item.progress}%
                </div>
              </div>
            );
          })}

          {/* sdkgfbsdjkgd */}
        </div>
      </div>
    </>
  );
};

export default MyWatchlist;
