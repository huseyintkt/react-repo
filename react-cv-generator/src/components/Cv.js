import React from 'react'
import Skills from './Skills'
import Works from './Works'

class Cv extends React.Component {
    render() {
      return (
        <div>
          <Skills></Skills>
          <Works></Works>
        </div>
      );
    }
}

export default Cv;