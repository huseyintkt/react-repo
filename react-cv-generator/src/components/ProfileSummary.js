import React, { Component } from 'react'

class ProfileSummary extends Component {
    render() {
        return (   
            <>
            <div className="bg-info text-white p-4 overflow-auto">
                <h2 className="float-left">Name Surname</h2>
                <h2 className="float-right">Frontend Web Developer</h2>                
            </div>
            <div className="p-4">
                <h2 className="text-info">SUMMARY</h2>
                <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            </>
        )
    }
}

export default ProfileSummary;

{/* <div className="col-2 text-center">
<img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png" className="w-100 mb-4" style={{maxWidth:"250px"}} />
<p>test@gmail.com</p>
<p>+41 77 000 0000</p>
<p>www.hicoders.ch</p>
<p>www.github.com/hicoders</p>
</div> */}