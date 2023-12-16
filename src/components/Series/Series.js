import React, { Component } from 'react'
import axios from "axios";
export class Series extends Component {
    state={
        fixtures:[],
        loading:false
    }
    componentDidMount()
    {
                let id=this.props.match.params.id;
                //console.log(id)
                const options = {
                method: 'GET',
                url: 'https://cricket-live-data.p.rapidapi.com/fixtures-by-series/'+id,
                headers: {
                    'x-rapidapi-key': '0f4c80eef2msh2750105af018059p1620f3jsnd4223b8f54c3',
                    'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com'
                }
                };
                var context=this
                axios.request(options).then(function (response) {
                    //console.log(response.data);
                    context.setState({
                        fixtures:response.data.results,
                        loading:true
                    })
                }).catch(function (error) {
                    //console.error(error);
                });
    }
    render() {
        const {fixtures,loading}=this.state
        //console.log(fixtures)
        const flist=loading ?( fixtures.length ? fixtures.map(fixture=>{
           // console.log(new Date(fixture.date).toLocaleDateString)
            return(
                
                <li className="collection-item" key={fixture.match_subtitle}>{fixture.match_title}-{fixture.match_subtitle}   {new Date(fixture.date).toLocaleDateString()}</li>
                
            )
        }):(<li>No fixtures Available</li>)):(
            <div className="progress blue lighten-4">
                <div className="indeterminate blue"></div>
                </div>)
        return (
          
                <div className="container center">
                        <div className="card">
                            <div className="card-content">
                            <span className="card-title">Fixtures</span>
                                <ul className="collection">
                                {flist}
                                </ul>
                            </div>
                        </div>
                </div>
            
        )
    }
}

export default Series
