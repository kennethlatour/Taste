import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
      <div>
        <Link href="/taste">Tastes</Link>
        <Link href="/quiz">quiz</Link>
        <Link href="/result">quiz</Link>
     </div>
  )
}

export default Navigation;