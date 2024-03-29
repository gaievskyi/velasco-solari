import { Link } from "react-router-dom"

import "./navigation.css"

export const Navigation = () => (
  <div className="navigation">
    <div className="logo">
      <div>
        <Link to="/">Vincenzo solari</Link>
      </div>
    </div>
    <div className="links">
      <div>
        <Link to="/work">work</Link>
      </div>
      <div>
        <Link to="/overview">overview</Link>
      </div>
      <div>
        <Link to="/mustang">mustang</Link>
      </div>
      <div>
        <Link to="/info">info</Link>
      </div>
    </div>
  </div>
)
