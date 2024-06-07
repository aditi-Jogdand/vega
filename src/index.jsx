import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

// const Service = lazy(() => import("./component/services"));
const Home = lazy(() => import("./component/home"));
// const Pricing = lazy(() => import("./component/pricing"));
// const About = lazy(() => import("./component/about"));
// const Contact = lazy(() => import("./component/contact"));
const Register = lazy(() => import("./component/startforms/register"));
const Login = lazy(() => import("./component/startforms/login"));



import "tailwindcss/tailwind.css";

import "./index.css";
// import Nav from "./component/root/nav";
// import Footerr from "./component/root/footer";

const App = props => (
  <>
  <Home/>
    {props.children}
  </>
);

render(() => (
  <Router root={App}>
    {/* <Route path="/services" component={Service} />
    <Route path="/pricing" component={Pricing}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/> */}
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>

    {/* <Route path="/" component={Home} /> */}
    
  </Router>
),document.getElementById("root"));

