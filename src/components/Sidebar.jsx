import React, { useState } from 'react';
import {
    FaBars,
    FaUserAlt,
}from "react-icons/fa";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GradingIcon from '@mui/icons-material/Grading';
import { FiUser } from "react-icons/fi";
import { AiOutlineMedicineBox } from 'react-icons/ai';
import LanIcon from '@mui/icons-material/Lan';
import { NavLink } from 'react-router-dom';
//import LoginIcon from '@mui/icons-material/Login';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/surveys",
            name:"Surveys",
            icon:<TrendingUpIcon title="Surveys"/>
        },
        {
            path:"/portfolio",
            name:"Portfolio",
            icon:<FaUserAlt title="Portfolio"/>
        },
        {
            path:"/usertraining",
            name:"UserTraining",
            //  icon:<FaRegChartBar title="User-Training"/>
            icon:<GradingIcon/>
            
        },
        {
            path:"/doctors",
            name:"Doctors",
             icon:<FiUser title="Doctors"/>
        },
        {
            path:"/pharmacy",
            name:"Pharmacy",
            // icon:<FaShoppingBag/>
            icon:<AiOutlineMedicineBox color="white" title="Pharmacy"/>
        },
        {
            path:"/theraphy",
            name:"TheraphyAsoociate",
            // icon:<FaThList title='theraphy-associate'/>
            icon:<LanIcon title='theraphy-associate' />
         },
        // {
        //     path:"/",
        //     name:"Signin",
        //    icon:<LoginIcon/>
        // }
    ]
    return (
        <div className="container1">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;

