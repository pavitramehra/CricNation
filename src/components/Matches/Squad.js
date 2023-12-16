
import React,{Component} from 'react'
import axios from 'axios'
import M from 'materialize-css'
import {Link} from 'react-router-dom'

class MatchDetails extends Component{
     state={
         team1:[],
         team2:[],
         name1:'team1',
         name2:'team2',
         description: '',
         loading:false
                 
     }
    //
    
    componentDidMount(){
         let id=this.props.match.params.id;
         console.log(this.props.location.matchdata);
         
         <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js"></script>
            
        
            var el = document.querySelector('.tabs');
            var instance = M.Tabs.init(el,{});
            M.AutoInit();

         //console.log(id)
        
         //var img=new Object();
         const url='https://cricapi.com/api/fantasySquad?apikey=88TVECZnlnXoZQP9gz1dlO6lUp43&unique_id='+id
         axios.get(url).then(res=>{
            //console.log(res.data)
            if(res.data.squad)
            {
                this.setState({
                
                    team1:res.data.squad[0].players,
                    team2:res.data.squad[1].players,
                    name1:res.data.squad[0].name,
                    name2:res.data.squad[1].name
                })
            }
            this.setState({
                loading:true
            })
            
           
        }) 
            //console.log(this.state.team1.players[i])
          //console.log(this.state.team1)
                     
            axios.get('https://cricapi.com/api/cricketScore?apikey=88TVECZnlnXoZQP9gz1dlO6lUp43&unique_id='+id).then(res=>{
                //console.log(res)
                this.setState({
                    description:res.data.score
                })
            });

            
        
     }
     addDefaultSrc=(ev)=>{
        ev.target.src='/images/grey.jpg'
     }
     render()
     {
        
        const {team1,loading}=this.state
        const {team2}=this.state
        const {name1}=this.state
        const {name2}=this.state
        const {description}=this.state
        const {matchdata}=this.props.location
        const squad1=loading ? (team1.length ? (
            team1.map(player=>{    

               return(
                    <li class="collection-item avatar">
                        <div>
                            <img src={`https://www.cricapi.com/playerpic/${player.pid}.jpg`} onError={this.addDefaultSrc} alt="" class="circle"/>
                            <Link to={"/player/"+player.pid}><a href="#!" class="secondary-content"><i class="material-icons blue-text">send</i></a> </Link>
                            <span class="title">{player.name}</span>
                        </div>
                        
            
                    </li> 
                
                )
            })
        ):(<div>
        <li >Squad not available</li></div>)):(<div className="progress blue lighten-4">
                <div className="indeterminate blue"></div>
                </div>)
        
        const squad2=team2.length ? (
            team2.map(player=>{    
              
               return(
                   
                    <li class="collection-item avatar">
                        <div>
                            <img src={`https://www.cricapi.com/playerpic/${player.pid}.jpg`} onError={this.addDefaultSrc} alt="" class="circle"/>
                            <Link to={"/player/"+player.pid}><a href="#!" class="secondary-content"><i class="material-icons blue-text">send</i></a> </Link>
                            <span class="title">{player.name}</span>
                        </div>
                        
                    
                    </li> 
                
                )
            })
        ):<div><li>
            Squad not available
        </li></div>;
        const card=(
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                            <div class="card-tabs">
                                <ul class="tabs ">
                                    <li class="tab "><a href="#test4" class="active">{name1}</a></li>
                                    <li class="tab"><a href="#test5">{name2}</a></li>
                                </ul>
                            </div>
                            <div class="card-content">
                                <div id="test4">
                                    <ul class="collection">
                                        {squad1}
                                    </ul>
                                </div>
                                <div id="test5">
                                    <ul class="collection">
                                        {squad2}
                                    </ul>
                                </div>
                            </div>
                    
                        
                        </div>
                        </div>
                        <div className="col s12">
                            <div class="card">
                            <div class="card-content">
                            <span class="card-title">{description}</span>
                            <p>Starting Time: {matchdata['Starting_Time']}</p>
                            <p>Toss: {matchdata['Toss']}</p>
                            <p>Winner: {matchdata['Winner']}</p>
                            </div>

                        </div>
                    </div>

                </div>
                </div>
             
         );
        return(
            <div className="container center">
                {card}
                <Link to="/matches" className="waves-effect waves-light btn blue lighten-2">Back</Link>
            <div className="container"><h1></h1></div>
            </div>
        )
      
     }
}


export default MatchDetails