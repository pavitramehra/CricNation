import React,{Component} from 'react'
import {getPlayerDesc} from '../../Api/cricapi'
import {Link} from 'react-router-dom'
class Player_Stat extends Component{
     state={
         Stat:null
     }
     componentDidMount(){
         let id=this.props.match.params.id;
        // console.log(id)
         getPlayerDesc(id).then(res=>{
            // console.log(res)
             this.setState({
                 Stat:res
             })
         })
     }
     render()
     {
         const {Stat}=this.state
        // console.log(Stat)
         const stat= Stat!=null ? (
            <div className="container">
            <div className="Stat card">
                <div className="car-image center"><img src={Stat.imageURL}/></div>
                <div className="card-title center">
                    {Stat.name}
                </div>
               
                <div className="card-content">
                    <ul className="collection">
                        <li className="collection-item">Age:     {Stat.currentAge}</li>
                        <li className="collection-item">Batting: {Stat.battingStyle}</li>
                        <li className="collection-item">Bowling: {Stat.bowlingStyle}</li>
                        <li className="collection-item">Born:    {Stat.born}</li> 
                        <li className="collection-item">Teams:   {Stat.majorTeams}</li>
                    </ul>
                </div>
                
            </div>
        </div>
         ):(
            <div className="progress blue lighten-4">
            <div className="indeterminate blue"></div>
            </div>
         )
         return(
           
           <div className="container center">
                <div>{stat}</div>
                <Link to="/Player" className="waves-effect waves-light btn blue lighten-2">Back</Link>
                <div className="container"><h1></h1></div>
           </div>
           
         )
         
         
     }
}

export default Player_Stat