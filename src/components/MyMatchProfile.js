import React, {Component} from "react"
import { connect } from "react-redux"
import { fetchProfile } from "../actions/fetchProfile"
import {Button, Image} from "react-bootstrap"

class MyMatchProfile extends Component {

    componentDidMount() {
        this.props.fetchProfile(this.props.routerProps.match.params.id)
    }

    render() {
        if (!this.props.profile) {
            return <div></div>
        }
        else {
            const {id, age, image, username, city, gender, orientation, ethnicity, height, body_shape, children, relationship, education, bio } = this.props.profile

            return (
                <div className="my-profile">
                    <h2>
                        {username}
                    </h2>
                    <div className="avatar_flip" >
                            <Image src={image} roundedCircle />
                    </div>
                    <h2 >Bio</h2>
                    <p className="bio">
                        {bio}
                    </p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>City: {city}</td>
                                <td>Age: {age} </td>
                            </tr>
                            <tr>
                                <td>Gender: {gender} </td>
                                <td>Orientation: {orientation}</td>
                            </tr>
                            <tr>
                                <td>Relationship: {relationship}</td>
                                <td>Children: {children}</td>
                            </tr>
                            <tr>
                                <td>Height: {height}</td>
                                <td>Body Shape: {body_shape}</td>
                            </tr>
                            <tr>
                                <td>Ethnicity: {ethnicity}</td>
                                <td>Education: {education}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3><strong>Interests:</strong></h3>
                    <h2>
                        {this.props.interests.map(int => <span key={int.id}>{int.name}&nbsp; </span>)}
                    </h2>
                    <Button variant="outline-success" href={`/match-new-message/${id}`}>
                        Send Message
                    </Button>
                </div>
            )
        }
    }
}



const mapStateToProps = ({ usersReducer, interestsReducer }) => {
    return {
        profile: usersReducer.profile,
        interests: interestsReducer.profileInterests
    }
}

export default connect(mapStateToProps, { fetchProfile})(MyMatchProfile)