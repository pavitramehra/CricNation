import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import {connect} from 'react-redux'
import M from 'materialize-css'

class Navbar extends Component{
    
   
    //console.log(profile);
    componentDidMount()
    {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
          M.AutoInit();
    }
    render()
    {
        const {auth ,profile}=this.props;
        const links = auth.uid ? <SignInLink profile={profile}/> : <SignOutLink/>
        return(
            <div>
                     <nav className="nav-wrappper blue light">
                        <div className="container">
                            <Link to='/' className="brand-logo">Crichood</Link>
                            <a href="#" className="sidenav-trigger" data-target="mobile-links">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                    {links}
                            </ul>
                            
                        </div>
                    </nav>
                    <ul className="sidenav sidenav-close" id="mobile-links">
                            {links}
                    </ul>
                    
                    
            </div>
        
       
        )
    }
    
}

const mapStatetoProps=(state)=>{
    //console.log(state)
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStatetoProps)(Navbar)