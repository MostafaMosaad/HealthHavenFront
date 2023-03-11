import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {

  return (
      <div id="footerBar"
        className="text-center p-4">
        © 2023 Copyright:
        <Link  to="/" className="text-reset fw-bold" >
         Health Haven.com
         </Link>
      </div>
  );
}
