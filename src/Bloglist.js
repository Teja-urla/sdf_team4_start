// import React from "react";
// import { ReactPropTypes } from "prop-types";
export default function Bloglists(props) {
  return (
    <div className="bloglist">
      <div class="blog-preview" key={props.id}>
        <h2>{props.title}</h2>
        <p>Written by {props.author}</p>
      </div>
    </div>
  );
}
