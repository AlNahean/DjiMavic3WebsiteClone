import React, { useState, useEffect, useRef } from "react";

import { IoSettingsSharp } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { BiCommentDots } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { HiMenu } from "react-icons/hi";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../Context";

<div className=" col">
  <Link to="/">
    <img src="../../../../../public/images/brands/" alt="" />
    <span>Dribble</span>
  </Link>
</div>;

const dropdownMoreMenuData = [
  {
    id: 1,
    img: "/images/brands/dribbble.png",
    title: "Dribble",
    link: "",
  },
  {
    id: 2,
    img: "/images/brands/bitbucket.png",
    title: "Bitbucket",
    link: "",
  },
  {
    id: 3,
    img: "/images/brands/g-suite.png",
    title: "G-suite",
  },
  {
    id: 4,
    img: "/images/brands/github.png",
    title: "Github",
    link: "",
  },
  {
    id: 5,
    img: "/images/brands/dropbox.png",
    title: "Dropbox",
    link: "",
  },
  {
    id: 6,
    img: "/images/brands/slack.png",
    title: "Slack",
    link: "",
  },
];

let isDropdownListening = false;

const MainNavbar = () => {
  const {
    showLeftNav,
    setShowLeftNav,
    showTopNavDropdown,
    setShowTopNavDropdown,
    showSettings,
    setShowSettings,
    boxCustomize,
    setBoxCustomize,
    isDarkMode,
    setISDarkmode,
  } = useGlobalContext();
  // const [showSettings, setShowSettings] = useState(false);
  // const [boxCustomize, setBoxCustomize] = useState(false);
  // const [isDarkMode, setISDarkmode] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const cancelTopNavDropDown = () => {
    setShowTopNavDropdown({
      flags: false,
      nottification: false,
      more: false,
    });
  };

  useEffect(() => {
    // console.log(showLeftNav);
    var element = document.getElementById("bodyH");

    if (!showLeftNav) {
      console.log(element);
      element.setAttribute("data-left-nav", "hide");
      localStorage.setItem("data-left-nav", "hide");
    } else {
      element.setAttribute("data-left-nav", "show");
      localStorage.setItem("data-left-nav", "show");
    }
    return () => {};
  }, [showLeftNav]);

  const getPosition = (e) => {
    let windowWidth = window.innerWidth;
    let posX = e.target.getBoundingClientRect().x;
    let overflow = posX - 330;
    let isOverflow = overflow > 0;
    if (isOverflow) {
      // console.log(overflow, "overflow");
      setPositionX(0);
    } else {
      setPositionX(overflow * -1 - 20);
      // console.log(overflow, "overflow");
    }
    // console.log(posX, "posX", overflow * -1);
  };

  const dropdownControlEvent = (e) => {
    let dropdownWrapperParent = document.querySelector(
      ".top-nav-dropdown-parent"
    );
    let inside = dropdownWrapperParent.contains(e.target);

    if (inside) {
    } else {
      document.removeEventListener("click", dropdownControlEvent);
      isDropdownListening = false;
      setShowTopNavDropdown({
        flags: false,
        nottification: false,
        more: false,
      });
    }
    console.log(inside);

    const isAnyDropdownOpen = () => {
      let isTrue = Object.values(showTopNavDropdown).some((val) => val);
      if (isTrue) {
        return true;
      } else {
        return false;
      }
    };
  };

  const controlDropdown = (e, type) => {
    //current Work
    // document.addEventListener("click", dropdownControlEvent);
    // isAnyDropdownOpen();
    if (isDropdownListening === false) {
      document.addEventListener("click", dropdownControlEvent);
      isDropdownListening = true;
    }
  };
  return (
    <>
      <div className="custom-navbar-wrapper">
        <nav
          className="navbar custom-navbar "
          style={{
            zIndex: 1000,
            // display: "flex",
            // width: "100%",
            // alignItems: "center",
            // zIndex: 1000,
            // display: "flex",
            // width: "auto",
            // alignItems: "center",
            // justifyContent: "space-between",
            // width: "100%",
          }}
        >
          {/* <div className=" w-100"> */}
          {/* <div
            className=" aaa"
            style={{ display: "flex", width: "100%", alignItems: "center" }}
            // className={boxCustomize ? "container" : "container"}
          > */}
          <button
            className="navbar-toggler m-2"
            onClick={() => {
              // alert("ss");
              var element = document.getElementById("bodyH");

              if (showLeftNav) {
                console.log(element);
                element.setAttribute("data-left-nav", "hide");
              } else {
                element.setAttribute("data-left-nav", "show");
              }
              setShowLeftNav(!showLeftNav);
              cancelTopNavDropDown();
            }}
          >
            <div className="icon">
              <HiMenu />
            </div>
          </button>

          <div
            className="app-search d-none d-lg-block me-auto"
            onClick={() => {
              cancelTopNavDropDown();
            }}
          >
            <form>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  id=""
                  className="form-control"
                />
                <div className="input-group-text bg-primary btn-primary text-white">
                  Search
                </div>
              </div>
            </form>
          </div>

          <ul className="nav topbar-menu top-nav-dropdown-parent">
            <li className="nav-item center">
              <div
                className="icon"
                onClick={(e) => {
                  if (showTopNavDropdown.nottification === false) {
                    setShowTopNavDropdown({
                      flags: false,
                      nottification: true,
                      more: false,
                    });
                  } else {
                    setShowTopNavDropdown({
                      flags: false,
                      nottification: false,
                      more: false,
                    });
                  }

                  getPosition(e);
                  controlDropdown(e);
                }}
              >
                <IoIosNotificationsOutline />
              </div>
              {showTopNavDropdown.nottification && (
                <div
                  className="notification-dropdown"
                  style={{
                    transform: `translate(${positionX}px, ${100}%)`,
                  }}
                >
                  <div className="dropdown-notification-wrapper">
                    <div className="card h-100">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <p>Notifications</p>
                        <p>clear all</p>
                      </div>
                      <div className="card-body overflow-scroll">
                        {" "}
                        <div className="" style={{ minHeight: "600px" }}>
                          <p>
                            <small>Today</small>
                          </p>
                          <div className="single-notification">
                            <div>
                              <div className="icon">
                                <BiCommentDots />
                              </div>
                              <div style={{ overflow: "hidden" }}>
                                <p className="nt-header">
                                  Datacorp <small>1 min ago </small>
                                </p>
                                <p className="nt-body">
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="single-notification">
                            <div>
                              <div className="icon">
                                <BiCommentDots />
                              </div>
                              <div style={{ overflow: "hidden" }}>
                                <p className="nt-header">
                                  Datacorp <small>1 min ago </small>
                                </p>
                                <p className="nt-body">
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" card-footer d-flex justify-content-center">
                        View All
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item center">
              <div
                className="icon"
                onClick={(e) => {
                  if (showTopNavDropdown.more === false) {
                    setShowTopNavDropdown({
                      flags: false,
                      nottification: false,
                      more: true,
                    });
                  } else {
                    setShowTopNavDropdown({
                      flags: false,
                      nottification: false,
                      more: false,
                    });
                  }
                  getPosition(e);
                  controlDropdown(e);
                  //current Work
                }}
              >
                <CgMenuGridO />
                {showTopNavDropdown.more && (
                  <div
                    className="more-dropdown "
                    style={{
                      transform: `translate(${positionX}px, ${100}%)`,
                    }}
                  >
                    <div className="dropdown-more-wrapper">
                      <div className=" p-4">
                        <div className=" row g-0">
                          {dropdownMoreMenuData.map((item) => {
                            return (
                              <div
                                className=" col-4 more-dropdown-item"
                                key={item.id}
                              >
                                <Link to="/">
                                  <img src={item.img} alt="" />
                                  <span>{item.title}</span>
                                </Link>
                              </div>
                            );
                          })}
                          {/* <div className=" col">
                            <Link to="/">
                              <img src="./images/brands/dribbble.png" alt="" />
                              <span>Dribble</span>
                            </Link>
                          </div>
                          <div className=" col">
                            <Link to="/">
                              <img src="./images/brands/dribbble.png" alt="" />
                              <span>Dribble</span>
                            </Link>
                          </div>
                          <div className=" col">
                            <Link to="/">
                              <img src="./images/brands/dribbble.png" alt="" />
                              <span>Dribble</span>
                            </Link>
                          </div>
                        </div>
                        <div className=" row g-0">
                          <div className=" col">
                            <Link to="/">
                              <img src="./images/brands/dribbble.png" alt="" />
                              <span>Dribble</span>
                            </Link>
                          </div>
                          <div className=" col">
                            <Link to="/">
                              <img src="./images/brands/dribbble.png" alt="" />
                              <span>Dribble</span>
                            </Link>
                          </div>
                          <div className=" col">
                            <Link to="/">
                              <img src="./images/brands/dribbble.png" alt="" />
                              <span>Dribble</span>
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      {/* <div className=" container h-100">
                          <div className="row h-50 w-100">
                            <div className="col-4">
                              <img src="./images/brands/dribbble.png" alt="" />
                              <small>Dribble</small>
                            </div>
                            <div className="col-4">
                              <img
                                src="../../../../../public/images/brands/dribbble.png"
                                alt=""
                                srcset=""
                              />
                            </div>
                            <div className="col-4">
                              <img
                                src="../../../../../public/images/brands/dribbble.png"
                                alt=""
                                srcset=""
                              />
                            </div>
                          </div>
                          <div className="row h-50 w-100">
                            <div className="col-4">
                              <img
                                src="../../../../../public/images/brands/dribbble.png"
                                alt=""
                                srcset=""
                              />
                            </div>
                            <div className="col-4">
                              <img
                                src="../../../../../public/images/brands/dribbble.png"
                                alt=""
                                srcset=""
                              />
                            </div>
                            <div className="col-4">
                              <img
                                src="../../../../../public/images/brands/dribbble.png"
                                alt=""
                                srcset=""
                              />
                            </div>
                          </div>
                        </div> */}
                    </div>
                  </div>
                )}
              </div>
            </li>

            <li className="nav-item center">
              <div
                className="icon"
                onClick={() => {
                  setShowSettings(!showSettings);
                }}
              >
                <IoSettingsSharp />
              </div>

              {showSettings && (
                <div className="settings-modal-container">
                  <div className="settings-modal">
                    <div className="card w-100 h-100">
                      <div
                        className="card-header center d-flex justify-content-between align-content-center bg-primary text-white"
                        style={{ height: "70px" }}
                      >
                        <div className="">Settings</div>
                        <div
                          className="icon"
                          onClick={() => {
                            setShowSettings(!showSettings);
                          }}
                        >
                          <ImCross />
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="alert alert-warning ">
                          boxCustomize the overall color scheme, sidebar menu,
                          etc.
                        </div>

                        <h5 className=" text-muted mb-0">
                          <small>Color Scheme</small>
                          <hr />
                        </h5>
                        <form>
                          <div className="form-check form-switch">
                            <label
                              // htmlFor="#modeSwitcher"
                              className="form-check-label"
                              // id="modeSwitcherLabel"
                            >
                              Light
                            </label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="modeSwitcher"
                              checked={!isDarkMode}
                              onChange={(e) => {}}
                              onClick={(e) => {
                                console.log("boxCustomize", boxCustomize);
                                // console.log(e.target.checked);

                                var element = document.getElementById("bodyH");

                                if (e.target.checked) {
                                  element.setAttribute(
                                    "data-layout-color",
                                    "light"
                                  );
                                  setISDarkmode(!e.target.checked);
                                } else {
                                  element.setAttribute(
                                    "data-layout-color",
                                    "dark"
                                  );
                                  setISDarkmode(!e.target.checked);
                                }
                              }}
                            />
                          </div>{" "}
                        </form>
                        <form>
                          <div className="form-check form-switch">
                            <label
                              // htmlFor="#modeSwitcher"
                              className="form-check-label"
                              // id="modeSwitcherLabel"
                            >
                              Dark
                            </label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="modeSwitcher"
                              checked={isDarkMode}
                              onChange={(e) => {}}
                              onClick={(e) => {
                                console.log("boxCustomize", boxCustomize);
                                // console.log(e.target.checked);

                                var element = document.getElementById("bodyH");

                                if (e.target.checked) {
                                  element.setAttribute(
                                    "data-layout-color",
                                    "dark"
                                  );
                                  setISDarkmode(e.target.checked);
                                } else {
                                  element.setAttribute(
                                    "data-layout-color",
                                    "light"
                                  );
                                  setISDarkmode(e.target.checked);
                                }
                              }}
                            />
                          </div>{" "}
                        </form>

                        {/* Data Layout Width */}
                        <h5 className=" text-muted mb-0">
                          <small>Width</small>
                          <hr />
                        </h5>
                        <form>
                          <div className="form-check form-switch">
                            <label
                              // htmlFor="#modeSwitcher"
                              className="form-check-label"
                              // id="modeSwitcherLabel"
                            >
                              Fluid
                            </label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="modeSwitcher"
                              checked={!boxCustomize}
                              onChange={(e) => {
                                // console.log("boxCustomize", boxCustomize);
                                // // console.log(e.target.checked);
                                // var element =
                                //   document.getElementById("bodyH");
                                // if (e.target.checked) {
                                //   element.setAttribute(
                                //     "data-layout-mode",
                                //     "fluid"
                                //   );
                                //   setBoxCustomize(e.target.checked);
                                // } else {
                                //   element.setAttribute(
                                //     "data-layout-mode",
                                //     "boxed"
                                //   );
                                //   setBoxCustomize(!e.target.checked);
                                // }
                              }}
                              onClick={(e) => {
                                console.log("boxCustomize", boxCustomize);
                                // console.log(e.target.checked);

                                var element = document.getElementById("bodyH");

                                if (e.target.checked) {
                                  element.setAttribute(
                                    "data-layout-mode",
                                    "fluid"
                                  );
                                  setBoxCustomize(!e.target.checked);
                                } else {
                                  element.setAttribute(
                                    "data-layout-mode",
                                    "boxed"
                                  );
                                  setBoxCustomize(!e.target.checked);
                                }
                              }}
                            />
                          </div>{" "}
                        </form>

                        <form>
                          <div className="form-check form-switch">
                            <label
                              // htmlFor="#modeSwitcher"
                              className="form-check-label"
                              // id="modeSwitcherLabel"
                            >
                              Boxed
                            </label>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="modeSwitcher"
                              checked={boxCustomize}
                              onChange={(e) => {
                                // // console.log(e.target.checked);
                                // var element =
                                //   document.getElementById("bodyH");
                                // if (e.target.checked) {
                                //   element.setAttribute(
                                //     "data-layout-mode",
                                //     "boxed"
                                //   );
                                //   setBoxCustomize(e.target.checked);
                                // } else {
                                //   element.setAttribute(
                                //     "data-layout-mode",
                                //     "fluid"
                                //   );
                                //   setBoxCustomize(e.target.checked);
                                // }
                              }}
                              onClick={(e) => {
                                // console.log(e.target.checked);

                                var element = document.getElementById("bodyH");

                                if (e.target.checked) {
                                  element.setAttribute(
                                    "data-layout-mode",
                                    "boxed"
                                  );
                                  setBoxCustomize(e.target.checked);
                                } else {
                                  element.setAttribute(
                                    "data-layout-mode",
                                    "fluid"
                                  );
                                  setBoxCustomize(e.target.checked);
                                }
                              }}
                            />
                          </div>{" "}
                        </form>
                        <h5 className=" text-muted mt-4">
                          <small>Left Sidebar</small>
                          <hr />
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="settings-modal-canceler"
                    onClick={() => {
                      setShowSettings(false);
                    }}
                  ></div>
                </div>
              )}
            </li>
            <li
              className="nav-item center"
              onClick={() => {
                cancelTopNavDropDown();
              }}
            >
              <Link to="/" className="account-user-info-container">
                <span className="account-user-avatar">
                  <img
                    src="/images/users/avatar-1.jpg"
                    alt=""
                    // srcset=""
                    // style={{ height: "20px", width: "20px" }}
                  />
                </span>
                <span className="account-user-info">
                  <span className="account-user-name">
                    <small>Nahean Fardous</small>
                  </span>
                  <span className="account-user-position">
                    <small>Founder</small>
                  </span>
                </span>
              </Link>
            </li>
          </ul>
          {/* </div> */}
        </nav>
      </div>
    </>
  );
};

export default MainNavbar;
