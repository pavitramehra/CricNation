import {Component} from 'react'
import {getMatchesInfo} from '../../Api/cricapi'
import {Link} from 'react-router-dom'

class Matches extends Component{
    state={
        matches:[]
    }
    
    componentDidMount()
    {
            getMatchesInfo().then(res=>{
               // console.log(res)
                this.setState({
                    matches:res.matches
                })
            })

    }
    render()
    {
        const {matches}=this.state
        //console.log(matches)
        return (
            <div className="container">
                <div className="match card">
                    <div className="card-content">
                        <span className="player-name card-title">Twenty-20</span>
                    </div>
                    <div className="card-action">
                        <Link to={
                            {
                            pathname:"/matches/twenty",
                            matches:matches}}><a href="#">Matches</a></Link>
                    </div>
                </div>
                <div className="match card">
                    <div className="card-content">
                        <span className="player-name card-title">Tests</span>
                    </div>
                    <div className="card-action">
                    <Link to={{
                            pathname:"/matches/Test",
                            matches:matches}}><a href="#">Matches</a></Link>
                    </div>
                </div>
                <div className="match card">
                    <div className="card-content">
                        <span className="player-name card-title">ODI</span>
                    </div>
                    <div className="card-action">
                    <Link to= {{
                            pathname:"/matches/ODI",
                            matches:matches}}><a href="#">Matches</a></Link>
                    </div>
                </div>
                
            </div>
        )

    }  
}
export default Matches