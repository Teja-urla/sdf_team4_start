import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <section class="header">
        <nav>
          <img src="images/logo1.png" />
          <div class="nav-links">
            <i class="fa fa-times"></i>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">COURSE</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
          <i class="fas fa-bars"></i>
        </nav>

        <div class="text-box">
          <h1>IITH SURVEY SYSTEM</h1>
        </div>
        <div class="heading">
          <form>
            <div class="content1">
              <label class="label3"> Enter The Name</label> <br /> <br />
              <input
                type="name"
                name="name"
                placeholder="Enter your Name"
                class="box"
              />
              <br />
              <br />
              <label class="label1">Enter Your Email(registered in IIT)</label>
              <br /> <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your E-mail"
                class="box"
              />
              <br />
              <br />
              <label class="label2"> Password</label> <br /> <br />
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                class="box"
              />
              <br />
              <br />
              <label class="label4"> Category</label> <br /> <br />
              <select class="option1">
                <option class="Category">Select your role</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </form>
        </div>
      </section>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-br/and" to="/">
          {props.title}
        </Link> */}
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
