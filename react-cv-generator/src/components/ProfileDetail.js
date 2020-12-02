import React, { Component } from 'react'

class ProfileDetail extends Component {
    render() {
        return (   
            <div className="text-center">
                <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png" className="w-100 mb-4" />
                <p className="profile-detail-item"><i class="far fa-envelope mr-2 text-info"></i>test@gmail.com</p>
                <p className="profile-detail-item"><i class="fas fa-mobile-alt mr-2 text-info"></i>+41 77 000 0000</p>
                <p className="profile-detail-item"><i class="fas fa-map-marker-alt mr-2 text-info"></i>Izmir/Turkey</p>
                <p className="profile-detail-item"><i class="fas fa-globe mr-2 text-info"></i>www.hicoders.ch</p>
                <p className="profile-detail-item"><i class="fab fa-github mr-2 text-info"></i>github.com/hicoders</p>
            </div>
        )
    }
}

export default ProfileDetail;