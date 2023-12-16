import React from 'react'
import Keyseries from './KeySeries'
import News from '../News/News'
function Home() {
    return (
       
                 <div className="dashboard container ">
                <div className="row">
                    <div className="col s8 m4">
                        <Keyseries/>
                    </div>
                    <div className="col s8 m8">
                        <News/>
                    </div>
                    
                </div>
            </div>
      
       
    )
}

export default Home
