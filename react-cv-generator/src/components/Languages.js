import React, { Component } from 'react'

class Languages extends Component {
    render() {
        return (
            <div className="p-4">
                <h2 className="text-info">LANGUAGES</h2>
                <hr className="line" />
                <div>
                    <div className="mb-2">
                        <label>Turkish (Native)</label>                      
                        <div>
                            <i className="fas fa-square text-info"></i>   
                            <i className="fas fa-square text-info ml-2"></i>   
                            <i className="fas fa-square text-info ml-2"></i>
                            <i className="fas fa-square text-info ml-2"></i>
                            <i className="fas fa-square text-info ml-2"></i>   
                        </div>     
                    </div>    
                    <div className="mb-2">
                        <label>English</label>                      
                        <div>
                            <i className="fas fa-square text-info"></i>   
                            <i className="fas fa-square text-info ml-2"></i>   
                            <i className="far fa-square ml-2"></i>
                            <i className="far fa-square ml-2"></i>
                            <i className="far fa-square ml-2"></i>   
                        </div>     
                    </div>  
                    <div className="mb-2">
                        <label>Italian</label>                      
                        <div>
                            <i className="fas fa-square text-info"></i>   
                            <i className="far fa-square ml-2"></i>
                            <i className="far fa-square ml-2"></i>
                            <i className="far fa-square ml-2"></i>
                            <i className="far fa-square ml-2"></i>     
                        </div>     
                    </div>
                </div>
            </div>
        )
    }
}

export default Languages;