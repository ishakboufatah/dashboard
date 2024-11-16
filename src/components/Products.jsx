import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <p>this is product page</p>
      <Link to="/">go to dashboard</Link>
    </div>
  );
}
