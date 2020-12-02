import React, { Component } from 'react'

class Certificates extends Component {
    render() {
        return (
            <div className="p-4">
                <h2 className="text-info">CERTIFICATES</h2>
                <hr className="line" />
                <div className="certificate-item pb-4">
                    <div className="overflow-auto">
                        <h4 className="float-left">Full Stack Web Programming Course</h4>
                        <span className="float-right font-italic">01/2020 - 08/2020</span>
                    </div>
                    <div className="overflow-auto">
                        <h5 className="float-left">HiCoders</h5>
                        <span className="float-right font-italic">Online</span>
                    </div>                
                    <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting and typesetting and.</p>
                </div>
                <div className="certificate-item">
                    <div className="overflow-auto">
                        <h4 className="float-left">Front-End Web UI Frameworks and Tools Bootstrap 4</h4>
                        <span className="float-right font-italic">01/2020 - 08/2020</span>
                    </div>
                    <div className="overflow-auto">
                        <h5 className="float-left">The Hong Kong University Of Science And Technology</h5>
                        <span className="float-right font-italic">Online</span>
                    </div>                
                    <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting and typesetting and.</p>
                </div>
            </div>
        )
    }
}

export default Certificates;