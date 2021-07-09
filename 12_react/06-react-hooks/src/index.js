import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import AppUseState from './01-useState'
import AppUseReducer from './02-useReducer'
import AppUseContext from './03-useContext'
import AppUseEffect from './04-useEffect'
import AppUseEffectDemo from './04-useEffect-demo'
import AppUseMemo from './05-useMemo'
import AppMemo from './06-memo'
import AppUseCallback from './07-useCallback'
import AppUseRef from './08-useRef'
import AppCustomHook1 from './09-custom-hook-request'
import AppCustomHook2 from './09-custom-hook-input'
import AppRouter from './10-router-hook'
import AppMyHook from './11-myhooks';


ReactDOM.render(
  <Router>
  <ol>
    <li><Link to='/useState'>useState</Link></li>
    <li><Link to='/useReducer'>useReducer</Link></li>
    <li><Link to='/useContext'>useContext</Link></li>
    <li><Link to='/useEffect'>useEffect</Link></li>
    <li><Link to='/useEffect-demo'>useEffect-demo</Link></li>
    <li><Link to='/useMemo'>useMemo</Link></li>
    <li><Link to='/memo'>memo</Link></li>
    <li><Link to='/useCallback'>useCallback</Link></li>
    <li><Link to='/useRef'>useRef</Link></li>
    <li><Link to='/custom-hook-request'>custom-hook-request</Link></li>
    <li><Link to='/custom-hook-input'>custom-hook-input</Link></li>
    <li><Link to='/router-hook/zhangsan'>router-hook</Link></li>
    <li><Link to='/myhooks'>myhooks</Link></li>
  </ol>

  <hr/>
  <h1>
    <Route path='/useState' component={AppUseState}/>
    <Route path='/useReducer' component={AppUseReducer}/>
    <Route path='/useContext' component={AppUseContext}/>
    <Route path='/useEffect' component={AppUseEffect}/>
    <Route path='/useEffect-demo' component={AppUseEffectDemo}/>
    <Route path='/useMemo' component={AppUseMemo}/>
    <Route path='/memo' component={AppMemo}/>
    <Route path='/useCallback' component={AppUseCallback}/>
    <Route path='/useRef' component={AppUseRef}/>
    <Route path='/custom-hook-request' component={AppCustomHook1}/>
    <Route path='/custom-hook-input' component={AppCustomHook2}/>
    <Route path='/router-hook/:name' component={AppRouter}/>
    <Route path='/myhooks' component={AppMyHook}/>
  </h1>
  </Router>,
  document.getElementById('root')
);
