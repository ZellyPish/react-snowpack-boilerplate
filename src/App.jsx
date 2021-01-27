/** @jsx jsx */
import React from 'react'
import { Link } from 'react-router-dom'
import { jsx, css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'

import 'tailwindcss/tailwind.css'

const App = () => (
  <React.Fragment>
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
    </div>
  </React.Fragment>
)

export default App
