import {HashRouter as  Router, Routes, Route} from 'react-router-dom'
import Layout from './layout.jsx'
import MarketPlace from './pages/index.jsx'
export default function App(){
   return(
      <>
      <Router>
         <Routes>
            <Route element={<Layout />}>
               <Route path="/" element={<MarketPlace />} />
            </Route>
         </Routes>
      </Router>
      </>
   )
}