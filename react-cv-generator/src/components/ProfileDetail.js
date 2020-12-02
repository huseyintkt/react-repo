import React, { Component } from 'react'

class ProfileDetail extends Component {
    render() {
        return (   
            <div className="text-center">
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png" className="w-100 mb-4" />
                <p>test@gmail.com</p>
                <p>+41 77 000 0000</p>
                <p>www.hicoders.ch</p>
                <p>www.github.com/hicoders</p>
            </div>
        )
    }
}

export default ProfileDetail;