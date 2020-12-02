import React, { Component } from 'react'

class Education extends Component {
    render() {
        return (
            <div className="p-4">
                <h2 className="text-info">EDUCATION</h2>
                <hr className="line" />
                <div className="education-item">
                    <div className="overflow-auto">
                        <h4 className="float-left">Computer Engineer</h4>
                        <span className="float-right font-italic">11/2000-11/2004</span>
                    </div>
                    <div className="overflow-auto">
                        <h5 className="float-left">Xxx University</h5>
                        <span className="float-right font-italic">Izmir/Turkiye</span>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Education;