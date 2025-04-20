import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './routes/Layout'
import NotFound from './routes/NotFound'
import Create from './routes/Create'
import Gallery from './routes/Gallery';
import Edit from './routes/Edit';
import CrewDetails from './components/CrewDetails.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="*" element={<NotFound />}/>
          <Route path ="/create" element={<Create />} />
          <Route path ="/gallery" element={<Gallery />}/>
          <Route path="crewmate/:id/edit/:id" element={<Edit />}/>
          <Route path="/crewmate/:id" element={<CrewDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
