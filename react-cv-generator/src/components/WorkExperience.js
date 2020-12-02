import React, { Component } from 'react'

class WorkExperience extends Component {
    render() {
        return (
            <div className="p-4">
                <h2 className="text-info">WORK EXPERIENCE</h2>
                <hr className="line" />
                <div className="work-experience-item pb-4">
                    <div className="overflow-auto">
                        <h4 className="float-left">Junior Web Developer</h4>
                        <span className="float-right font-italic">11/2010-11/2012</span>
                    </div>
                    <div className="overflow-auto">
                        <h5 className="float-left">Y Firmasi</h5>
                        <span className="float-right font-italic">Izmir/Turkiye</span>
                    </div>                
                    <ul className="list-unstyled">
                        <li>
                            <ul>
                                <li>Lorem Ipsum is simply dummy text of the printing dummy text of the printing and typesetting and typesetting is simply dummy text of the printing dummy text of the printing and typesetting and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing dummy text of the printing and typesetting and typesetting industry.</li>                                
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="work-experience-item pb-4">
                    <div className="overflow-auto">
                        <h4 className="float-left">Junior Web Developer</h4>
                        <span className="float-right font-italic">11/2010-11/2012</span>
                    </div>
                    <div className="overflow-auto">
                        <h5 className="float-left">X Firmasi</h5>
                        <span className="float-right font-italic">Izmir/Turkiye</span>
                    </div>                
                    <ul className="list-unstyled">
                        <li>
                            <ul>
                                <li>Lorem Ipsum is simply dummy text of the printing dummy text of the printing and typesetting and typesetting industry.</li>                                
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="work-experience-item">
                    <div className="overflow-auto">
                        <h4 className="float-left">Junior Web Developer</h4>
                        <span className="float-right font-italic">11/2010-11/2012</span>
                    </div>
                    <div className="overflow-auto">
                        <h5 className="float-left">Z Firmasi</h5>
                        <span className="float-right font-italic">Izmir/Turkiye</span>
                    </div>                
                    <ul className="list-unstyled">
                        <li>
                            <ul>
                                <li>Lorem Ipsum is simply dummy text of the printing.</li>                              
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default WorkExperience;