import {Link} from 'react-router-dom'
const Twenty=(props)=>{
    console.log(props)
    const {matches}=props.location;
   // console.log(matches)
    const matchlist=matches.length ? (
            matches.map(match=>{
               
                return match.type===""? (
                    
                    <div className="row">
                        <div className="col s12 l6">
                            <div className="match card" key={match['unique_id']}>
                    
                                <div className="card-content" >
                                    <Link to={{
                                        pathname:"/matches/twenty/"+match['unique_id'],
                                        matchdata:{
                                            Starting_Time: new Date(match.dateTimeGMT).toLocaleString(),
                                            Toss: match['toss_winner_team'],
                                            Winner: match['winner_team']
                                        }
                                        }}><span className="card-title activator">{match['team-1']}  vs  {match['team-2']}</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                ):null;
            })
        ):(
            <div class="progress">
            <div class="indeterminate"></div>
            </div>
        )
        return(
            <div className="container">
                <div className="center">
                    {
                        matchlist
                    }
                </div>
            </div>
        )
    
}
export default Twenty