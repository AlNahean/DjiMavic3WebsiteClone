import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Custom = ({
  isHeader,
  groupSectionHeader = "Group Section Title",
  groupHeader = "Grpup Title",
  showNavGroup,
  setShowNavGroup,
  leftNavData,
}) => {
  return (
    <div>
      <div className=" d-flex flex-column w-100 ">
        {isHeader && (
          <h5 className=" mt-4">
            <small>{groupSectionHeader.toUpperCase()}</small>
          </h5>
        )}
        {/* NavGroupSwitcher----Dashboard */}
        <div
          className="card-section-grid collapse-header p-2"
          onClick={() => {
            setShowNavGroup(!showNavGroup);
          }}
        >
          <div className="center" style={{ fontSize: "1.2rem" }}>
            <AiOutlineHome />
          </div>
          <h5 className=" mb-0">{groupHeader}</h5>
          <span className=" center" style={{ fontSize: "1.6rem" }}>
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>

        {/* NavGroupItems-- */}
        {showNavGroup && (
          <ul className=" list-unstyled left-nav-collapse text-muted">
            {leftNavData.map((item) => {
              return (
                <li className=" " key={item.id}>
                  <Link
                    to={`/${item.link}`}
                    className="card-section-grid text-decoration-none ct-hover"
                    onClick={() => {}}
                  >
                    <div></div>
                    <div>
                      <h5>
                        <small>{item.title}</small>
                      </h5>
                    </div>
                    <span className=" badge bg-danger center">
                      {item.isNew && "New"}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Custom;
