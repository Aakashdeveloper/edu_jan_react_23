import React,{Component} from 'react';

const url = "http://3.17.216.66:5000/api/auth/userinfo";

class Profile extends Component {

    constructor(props){
        super(props)

        this.state={
           user:''
        }
    }

    handleLogout = () => {
        this.setState({user:''});
        sessionStorage.removeItem('ltk');
        this.props.history.push('/login')
    }


    render(){
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">Profile</div>
                <div className="panel-body">
                   <h1>Hi {this.state.user.name}</h1>
                   <h2>Your Email Id is {this.state.user.email}</h2>
                   <h2>Your Phone Number is {this.state.user.phone}</h2>
                   <h2>Your Role is {this.state.user.role}</h2>
                   <button className="btn btn-danger" onClick={this.handleLogout}>
                       Logout
                   </button>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({user:data})
        })
    }
}

export default Profile