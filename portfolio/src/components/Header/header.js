import React from "react";
import "../Header/header.css"

function header() {
    return (
      <div className="header">
          <tr>
              <td a href="www.google.com">Home</td>
              <td>Projects</td>
              <td>Contacts</td>
          </tr>
      </div>
    );
  }
  
  export default header;