import React, { useState } from 'react';
import HeaderOne from '../header/headerOne';
import Contact from '../common/contact';
import FullImageContent from '../common/fullImageContent';
// import IconList from "../common/iconList";
import AboutMe from '../common/aboutMe';
import Skills from '../common/skills';
// import Run from "../common/run";
import Experience from '../common/experience';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const TemplateOne = () => {
    // const [page, setPage] = useState('home');
    // const navPage = (page) => {
    //     setPage(page);
    // };
    return (
        // <div>
        //   <HeaderOne navPage={navPage} page={page}>
        //     <Rout page={page} navPage={navPage} />{" "}

        //   </HeaderOne>{" "}
        // </div>
        <HeaderOne />
        // <Router>
        //     <div>
        //         <Switch>
        //             <HeaderOne>
        //                 <Route path="/home">
        //                     <FullImageContent />
        //                 </Route>
        //                 <Route path="/about">
        //                     <AboutMe />
        //                 </Route>
        //                 <Route path="/skills">
        //                     <Skills />
        //                 </Route>
        //                 <Route path="/experience">
        //                     <Experience />
        //                 </Route>
        //                 <Route path="/contact">
        //                     <Contact />
        //                 </Route>

        //                 <Route path="/">
        //                     <FullImageContent />
        //                 </Route>
        //             </HeaderOne>
        //         </Switch>
        //     </div>
        // </Router>
    );
};
// const Rout = (props) => {
//     if (props.page === 'home') {
//         return <FullImageContent />;
//     } else if (props.page === 'about') {
//         return <AboutMe navPage={props.navPage} />;
//     } else if (props.page === 'skills') {
//         return <Skills />;
//     } else if (props.page === 'experience') {
//         return <Experience />;
//     } else if (props.page === 'contact') {
//         return <Contact />;
//     }
// };

export default TemplateOne;
