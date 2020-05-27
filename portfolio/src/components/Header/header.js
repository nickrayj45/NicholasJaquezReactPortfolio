import React from "react";
import "../Header/header.css"

function header() {
    return (
      <div className="header">
          <tr>
              <td to="www.google.com">Home</td>
              <td>Projects</td>
              <td>Contact</td>
          </tr>
      </div>
    );
  }
  
  export default header;