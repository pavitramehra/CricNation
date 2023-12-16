import React,{Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/Posts/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './components/dashboard/Home'
import Player from './components/Players/Players'
import Player_Stat from './components/Players/Player_Stat'
import Twenty from './components/Matches/twenty'
import Test from './components/Matches/test'
import ODI from './components/Matches/odi'
import MatchDetails from './components/Matches/Squad'
import Matches from './components/Matches/matches' 
import Slide from './components/Header/slider'
import Series from './components/Series/Series'

class App extends Component{
  render(){ 
    return (
            
      <BrowserRouter>
            <div className="App">
              <header className="App-header">
                <div className="blue lighten-2">
                    <Slide/>
                    <Navbar />
                </div>
                
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Signin' component={SignIn} />
                  <Route exact path='/Signup' component={SignUp} />
                  <Route exact path='/posts' component={Dashboard}/>
                  <Route exact path='/player' component={Player}/>
                  <Route exact path="/player/:id" component={Player_Stat}/>
                  <Route exact path="/matches" component={Matches}/>
                  <Route exact path="/matches/twenty" component={Twenty}/>
                  <Route exact path="/matches/ODI" component={ODI}/>
                  <Route exact path="/matches/Test" component={Test}/>
                  <Route exact path="/matches/twenty/:id" component={MatchDetails}/>
                  <Route exact path="/matches/ODI/:id" component={MatchDetails}/>
                  <Route exact path="/matches/Test/:id" component={MatchDetails}/>
                  <Route exact path="/Series/:id" component={Series}/>
                </Switch>
              </header>
            </div>
          </BrowserRouter>
  
      );
  }
  
}
      


export default App;
