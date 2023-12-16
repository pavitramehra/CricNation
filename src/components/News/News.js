import React, { Component } from 'react'
import {getNews} from '../../Api/cricapi'
import  M  from 'materialize-css';
class News extends Component{
    state={
        news:[],
        loading:false
    }
    componentDidMount(){

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, {});
          });
          M.AutoInit();
        
        getNews().then((res)=>{
            //console.log(res)
           this.setState({
               news:res.articles.sort((a,b)=>(a.publishedAt<b.publishedAt)?1 :-1),
               loading:true

           })
        })
    }
    render()
    {
        const {news}=this.state
        const {loading}=this.state
        //console.log(this.state)
        const headlines= loading ? (
           
                    <div className="container">
                             { news.length && news.map((news) => (
                                <div className="card" key={news.title}>  
                                    <div className="card-image">
                                        <img src={news.image}/> 
                                    </div>
                                    <span className="card-title text-black text-darken-3">{news.title}</span>
                                    <div className="card-content">
                                        <p>{news.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href={news.url} target="_blank">Read Full Story Here</a>
                                    </div>
                                </div>
                            ))}
                    </div>
            
            
        ):( 
            <div className="progress blue lighten-4">
                <div className="indeterminate blue"></div>
                </div>
        )
        return(<div>
            {headlines} 
        </div>)
    }
}
export default News;