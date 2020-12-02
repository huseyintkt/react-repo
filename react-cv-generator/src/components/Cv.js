import React from 'react'
import ProfileSummary from './ProfileSummary'
import WorkExperience from './WorkExperience'
import Certificates from './Certificates'
import Education from './Education'
import PersonalProjects from './PersonalProjects'
import ProfileDetail from './ProfileDetail'
import Skills from './Skills'
import Languages from './Languages'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Cv extends React.Component {
    render() {
      return (
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-3">
              <ProfileDetail />
              <Skills />
              <Languages />
            </div>
            <div className="col-9">
              <ProfileSummary />
              <WorkExperience />
              <Certificates />
              <Education />
              <PersonalProjects />
            </div>
          </div> 
        </div>
      );
    }
}

export default Cv;