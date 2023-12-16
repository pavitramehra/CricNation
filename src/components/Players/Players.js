import React, {Component} from 'react'
import {getPlayerStat} from '../../Api/cricapi'
import {Link} from 'react-router-dom'
import Player_List from './Player_List'
import {getPlayerDesc} from '../../Api/cricapi'
class Player extends Component {
    
    state={
        players:[],
        val:''
    }
   
    handleSubmit=(e)=>{
        e.preventDefault();
       
        //console.log(this.state.val)
        
    }
    handlechange=(e)=>{
       this.state.val=e.target.value
       //console.log(this.state.val)
       const {val}=this.state;
       
            getPlayerStat(val).then(res=>{
                   // console.log(res.data.slice(0,10))
                    var arr=res.data.slice(0,10);
                    this.setState({ players:arr })
                    
                
                    /*var temp=[]
                    arr.map(val=>{
                    // console.log(val.pid)
                        getPlayerDesc(val.pid).then(ans=>{
                            temp.push(ans.imageURL)
                
                            
                            })
                    })
                    this.setState({
                        pic:temp
                    })*/
                   // console.log(this.state)
                
               
            })
     
      
        //console.log(this.state.name)
    }
    render()
    {
        const {players}=this.state
       
        //console.log(players)
        const playerList=players!=undefined ? players.map(player => {
        
            return(
                <div className="player card" key={player.pid}>
                    <div className="card-content">
                        <Link to={"/player/"+player.pid}> <span className="player-name card-title">{player.name}</span></Link>
                    </div>
                </div>
            )
        }):null
        return(
            
            <div className="container">
                <div className="center">
                                <h1>Search for Player</h1>
                                <nav>
                                <div class="nav-wrapper blue lighten-1">
                                <form autoComplete="off">
                                    <div class="input-field">
                                    <input id="search" type="search" onChange={this.handlechange} required autoComplete="off"/>
                                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                    <i class="material-icons">close</i>
                                    </div>
                                </form>
                                </div>
                                </nav>
                                <div className="player-list">
                                    {playerList}
                                </div>
                           
                       
                       
                   
                  
                </div>
            </div>
            
            
        )
    }
}

export default Player