import React, { Component} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes,Route } from 'react-router-dom';
//Api : 87994f8b3e3047ab868a5ec690564b2f
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="politics" pagesize={12} country="in" category="politics"/>} />
          <Route exact path="business" element={<News key="business"  pagesize={12} country="in" category="business"/>} />
          <Route exact path="entertainment" element={<News key="entertainment"  pagesize={12} country="in" category="entertainment"/>} />
          <Route exact path="general" element={<News key="general"  pagesize={12} country="in" category="general"/>} />
          <Route exact path="health" element={<News key="health"  pagesize={12} country="in" category="health"/>} />
          <Route exact path="science" element={<News key="science"  pagesize={12} country="in" category="science"/>} />
          <Route exact path="sports" element={<News key="sports"  pagesize={12} country="in" category="sports"/>} />
          <Route exact path="technology" element={<News key="technology"  pagesize={12} country="in" category="technology"/>} />
        </Routes>
      </div>
    )
  }
}


