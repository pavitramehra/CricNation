import React,{Component} from 'react'
import axios from 'axios'

class Slide extends Component{
  state={
    Details:[{desc:'',time:''}],
  }
  componentDidMount=()=>{
    const t=3;
    var count=0;
    axios.get('https://cricapi.com/api/matches/?apikey=88TVECZnlnXoZQP9gz1dlO6lUp43').then(res=>{
       // console.log(res)
        const arr=res.data.matches.slice(4,30)
       // console.log(res)
        arr.map(match=>{
         
          axios.get('https://cricapi.com/api/cricketScore?apikey=88TVECZnlnXoZQP9gz1dlO6lUp43&unique_id='+match['unique_id']).then(val=>{
          //console.log(val)
            
                if(match.matchStarted&&count<=t)
                {
                  var r=null;
                  if(val.data.description!==undefined)
                  {
                    var str=val.data.description
                     r = str.split(" ").filter(function(n) {
                        if(/[0-9]/.test(n)) return n;
                      });
                  }
                    
                      
                   
                    var joined = this.state.Details.concat({
                            desc:val.data.description,
                            score:r,
                            time:new Date(match.dateTimeGMT).toLocaleString(),
                            winner:match.winner_team,
                            toss:match.toss_winner_team,
                            team1:match['team-1'],
                            team2:match['team-2']
                    });
                    
                    this.setState({ Details: joined })
                    count++;
                }
                
            })
            
          
        })     
  })
  }
  render()
  {
    const {Details}=this.state
   // console.log(Details)
    const scorelist=Details.length ? Details.map(Detail=>{
      //console.log(Detail)
      return (Detail.team1) ?(
            <div className="col s12 m3 hide-on-med-and-down">
              <div className="live-score"  key={Detail.team1}>
                      <div className="card horizontal" >
                            <div className="card-stacked">
                                <div className="card-content">
                                    <div className="row">
                                            <div className="col">{Detail['team1']}</div> 
                                            {Detail.score ? <div className="col">{Detail.score[0]}</div> : (null)}

                                            
                                    </div>
                                    <div className="row">
                                            <div className="col">{Detail['team2']}</div> 
                                            {Detail.score ? <div className="col">{Detail.score[1]}</div> : (null)}
                                    </div>
                                    <p>Toss: {Detail.toss}</p>
                                    <p>Winner: {Detail.winner}</p>
                                </div>
                            </div>
                        </div>
              </div>
               
            </div>    
      ):(null)
     
    }):(null)

    return (
          <div className="container">
            <div className="row">
                {scorelist}
            </div>
          </div>
        )
  }

}
export default Slide;
