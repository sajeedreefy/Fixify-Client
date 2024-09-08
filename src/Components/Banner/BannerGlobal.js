import React, { useEffect, useState } from 'react'
import "./BannerGlobal.css"
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ServiceData } from '../ServiceComponent/ServiceData';
import { BlogData } from '../BlogComponent/BlogData';
import { ProjectData } from '../ProjectComponent/ProjectData';
import { HeaderData } from '../Header/HeaderData';

const BannerGlobal = () => {
    const [heading, setHeading] = useState();
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    let pathName = location.pathname;


    useEffect(() => {
        const pathnamee = location.pathname.split("/").filter((p) => !!p);
        const breadcrumbs = pathnamee.map((e, i) => ({
          title: e,
          path: `/${pathnamee.slice(0, i + 1).join("/")}`,
        }));
        setBreadcrumbs(breadcrumbs);
      }, [location]);


      useEffect(()=>{
        const id = searchParams.get("id")
        if(id){
          if(pathName.includes("Service_Details")){
            const sData = ServiceData.find((e)=>e.id == id)
            setHeading(sData.name )
          }
          if(pathName.includes("Blog_Details")){
            const bData = BlogData.find((e)=>e.id == id)
            setHeading(bData.name)
          }
          if(pathName.includes("Projects_Details")){
            const wData = ProjectData.find((e)=>e.id == id)
            setHeading(wData.name)
          }
        }
        else {
          const data = HeaderData.find((data) => {
            if (data?.subNav) {
              const subTitel = data?.subNav?.find((s) => s.path === pathName);
              if (subTitel) {
                return data;
              }
            } else if (data.path === pathName) {
              return data;
            }
          });
    
          if (data?.subNav) {
            const obj = data?.subNav.find((s) => s.path === pathName);
            setHeading(obj.heading);
          } else {
            setHeading(data.heading);
          }
        }
      },[])
    

  return (
    <section class="hero_reapeat_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                     <ol className="breadcrumb">
                  {breadcrumbs.map((breadcrumb, index) => (
                    <li
                      className={`breadcrumb-item${
                        index === breadcrumbs.length - 1 ? " active" : ""
                      }`}
                    >
                      <Link key={index} to={breadcrumb.path}>
                        {breadcrumb.title.replace(/_/g, " ")}
                      </Link>
                    </li>
                  ))}
                </ol>
             
                    <div class="hero_repeat_title">
                        <h2>{heading}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerGlobal