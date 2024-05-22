import React from 'react'

import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Parent from './components/Parent'
import Student from './components/Student'
import Staff from './components/Staff'
import Admin from './components/Admin'
import Start from './components/Start'
import Dashboard from './components/Dashboard'
import ContactUs from './components/ContactUs'
import Home from './components/Home'
import Query from './components/Query'
import AboutUs from './components/AboutUs'
import Review from './components/Review'
import Attendance from './components/Attendance'
import Dashboard1 from './components/Dashboard1'
import AdminDashboard from './components/AdminDashboard'
import Home1 from './components/Home1'


import EnquiryForm from './components/EnquiryForm'
//import Institutions from './components/Institutions'
import Schools from './components/Schools'
import StaffQuery from './components/StaffQuery'
import Colleges from './components/Colleges'
import University from './components/University'


function App() {


  return (
    
      <div>
       <BrowserRouter>
       <Routes>
    
      <Route path="/" exact element={<Start/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/parent" element={<Parent/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/dashboard1' element={<Dashboard1/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path="/student/dashboard/home" element={<Home />} />
        <Route path="/student/dashboard/contact-us" element={<ContactUs />} />
        <Route path="/student/dashboard/about-us" element={<AboutUs />} />
        <Route path="/student/dashboard/query" element={<Query />} />
        <Route path="/student/dashboard/review" element={<Review />} />
        <Route path='/staff/dashboard/attendance' element={<Attendance/>}/>
     
        <Route path='/parent/home1' element={<Home1/>}/>
        <Route path='/parent/enquiry' element={<EnquiryForm/>}/>
        {/* <Route path='/parent/college' element={<Institutions/>}/> */}
        <Route path='/parent/school' element={<Schools/>}/>
        <Route path='/staff/query' element={<StaffQuery/>}/>
        <Route path='/parent/college' element={<Colleges/>}/>
        <Route path='/parent/university' element={<University/>}/>
    

        

       

        </Routes>
        </BrowserRouter>
      </div>

  )
}

export default App
