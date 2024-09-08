import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";

import ServiceList from "./Routes/Service/ServiceList";
import ServiceDetails from "./Routes/Service/ServiceDetails";
import Services from "./Routes/Service/Services";
import Team from "./Routes/Pages/Team";
import Testimonial from "./Routes/Pages/Testimonial";
import Projects from "./Routes/Pages/Projects";
import ProjectDetails from "./Routes/Pages/ProjectDetails";
import FAQs from "./Routes/Pages/FAQs";
import Error404 from "./Routes/Pages/Error404";
import CommingSoon from "./Routes/Pages/CommingSoon";

import Contact from "./Routes/Contact";
import Quotes from "./Routes/Quotes";
import Blogs from "./Routes/Blog/Blogs";
import BlogDetails from "./Routes/Blog/BlogDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home/> } />
          <Route path="/Home/About_Us" element={<About/>} />

          <Route path="/Home/Our_Services" element={<Services />} />
          <Route path="/Home/Services_Lists" element={<ServiceList />} />
          <Route path="/Home/Our_Services/Service_Details" element={<ServiceDetails />} />

          <Route path="/Home/Our_Team" element={<Team />} />
          <Route path="/Home/Testimonial" element={<Testimonial />} />
          <Route path="/Home/Projects" element={<Projects />} />
          <Route path="/Home/Projects/Projects_Details" element={<ProjectDetails />} />
          <Route path="/Home/FAQ" element={<FAQs />} />
          <Route path="/Home/Error_404" element={<Error404 />} />
          <Route path="/Home/Comming_Soon" element={<CommingSoon />} />

          <Route path="/Home/Our_Blogs" element={<Blogs />} />
          <Route path="/Home/Our_Blogs/Blog_Details" element={<BlogDetails />} />
          <Route path="/Home/Contact_Us" element={<Contact />} />
          <Route path="/Home/Quote_Request" element={<Quotes />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
