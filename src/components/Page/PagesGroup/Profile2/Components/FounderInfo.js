import React from "react";
import {
  GrTwitter,
  GrFacebookOption,
  GrGithub,
  GrLinkedinOption,
} from "react-icons/gr";
const socialLinksData = [
  {
    id: 1,
    title: "Twitter",
    link: "https://twitter.com/nahean19",
    icon: <GrTwitter />,
  },
  {
    id: 2,
    title: "Facebook",
    link: "https://www.facebook.com/AlNahean19/",
    icon: <GrFacebookOption />,
  },
  {
    id: 3,
    title: "Github",
    link: "https://github.com/AlNahean",
    icon: <GrGithub />,
  },
  {
    id: 4,
    title: "linked In",
    link: "https://www.linkedin.com/in/nahean-fardous-30b8a9238/",
    icon: <GrLinkedinOption />,
  },
];

const FounderInfo = () => {
  return (
    <>
      {" "}
      <div className=" card mb-3">
        {" "}
        <div className=" card-body">
          <div className="basic-info d-flex flex-column align-items-center">
            <img
              src="/images/users/avatar-1.jpg"
              alt=""
              className=" avatar-lg rounded-circle img-thumbnail"
            />
            <h4 className=" text-muted">Nahean Fardous</h4>
            <p className=" text-muted">Founder</p>
            <div className=" d-flex">
              <button className=" btn btn-sm btn-success">Follow</button>
              <button className=" btn btn-sm btn-danger ms-1">Messaage</button>
            </div>
          </div>
          <div className=" profile-about-info text-muted mt-4">
            <h6 className=" text-uppercase">About Me:</h6>
            <p className=" small mb-4">
              Hi I'm Johnathn Deo,has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>

            <p>
              <strong>Full Name: </strong>
              <span>Md. Nahean Fardous</span>
            </p>
            <p>
              <strong>Mobile: </strong>
              <span>01XXXXXXX</span>
            </p>
            <p>
              <strong>Email: </strong>
              <span>Nahean.fardous@gmmail.com</span>
            </p>
            <p>
              <strong>Location: </strong>
              <span>Mymensingh, Bangladesh</span>
            </p>
          </div>

          <div className=" w-100 center m-2">
            {socialLinksData.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                  className="center bg-primary rounded-circle p-2 m-2 text-decoration-none text-white"
                  style={{ fontSize: "1.2rem" }}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderInfo;
