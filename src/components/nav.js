import { Link } from "gatsby"
import React from "react"

const Nav = () => (

    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1rem 0`,
        backgroundColor: `white`
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            padding: `0 1.0875rem 0 0`,
          }}
        >
          home
        </Link>
        <Link
          to="/resume/"
          style={{ color: `black`, textDecoration: `none`, padding: `0 1.0875rem 0 0`,
          }}
        >
          resume
        </Link>
        <Link
          to="/portfolio/"
          style={{ color: `black`, textDecoration: `none`, padding: `0 1.0875rem 0 0`,
          }}
        >
          portfolio
        </Link>
      </h4>
    </nav>

)



export default Nav
