import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export class Keyseries extends Component {
    state={
        test:[],
        t20:[],
        odi:[]
    }
    componentDidMount(){

        const options = {
          method: 'GET',
          url: 'https://cricket-live-data.p.rapidapi.com/series',
          headers: {
            'x-rapidapi-key': "6419111f45mshf874b755e71fb13p1e9542jsn94888caab7fa",
            'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com'
          }
        };
        
        var context=this
        axios.request(options).then(function (response) {
          // console.log(response.data.results);
            context.setState({
                test:response.data.results[0].series.slice(0,5),
                t20:response.data.results[2].series.slice(0,5),
                odi:response.data.results[3].series.slice(0,5)
            })
        }).catch(function (error) {
            //console.error(error);
        });
    }
    render() {
       
        const {test}=this.state
        const {t20}=this.state
        const {odi}=this.state
        const testlist=test.length ? (
            test.map(test=>{    

               return(
                <Link key={test.series_id} to={"/Series/"+test.series_id}><a href="" className="collection-item blue-text">{test.series_name}</a> </Link>
                
                )
            })
        ):(null);
        const t20list=t20.length ? (
            t20.map(twenty=>{    

               return(
                <Link  key={twenty.series_id} to={"/Series/"+twenty.series_id}> <a href="" className="collection-item blue-text">{twenty.series_name}</a></Link>
                
                )
            })
        ):(null);
        const odilist=odi.length ? (
            odi.map(one=>{    

               return(
                <Link  key={odi.series_id} to={"/Series/"+one.series_id}> <a href="" className="collection-item blue-text">{one.series_name}</a> </Link>
                
                )
            })
        ):(null);
       
        return (
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Key Series</span>
                                    <ul className="collection with-header">
                                    <li className="collection-header"><p>Test</p></li>
                                       {testlist}
                                    </ul>
                                    <ul className="collection with-header">
                                    <li className="collection-header"><p>ODI</p></li>
                                       {odilist}
                                    </ul>
                                    <ul className="collection with-header">
                                    <li className="collection-header"><p>T20</p></li>
                                       {t20list}
                                    </ul>
                                                   
                            </div>
                        
                        </div>
                
              
        )
    }
}

export default Keyseries
