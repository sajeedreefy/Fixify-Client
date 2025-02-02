import React, { useEffect, useState } from 'react';
import "./BannerGlobal.css";
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ProjectData } from '../ProjectComponent/ProjectData';
import { HeaderData } from '../Header/HeaderData';
import ApiFacade from '../../api/facade';

const BannerGlobal = () => {
    const [heading, setHeading] = useState('');
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    let pathName = location.pathname;

    const [allServiceData, setAllServiceData] = useState([]); // Default to an empty array to avoid null errors
    const [allBlogData, setAllBlogData] = useState([]);

    useEffect(() => {
      const loadAllServiceData = async () => {
        try {
          const data = await ApiFacade.fetchAllServices();
          setAllServiceData(data || []); // Ensure that even if data is null, it doesn't break
        } catch (error) {
          console.error('Error loading services:', error);
        }
      };

      loadAllServiceData();
    }, []);

    useEffect(() => {
      const loadAllBlogData = async () => {
        try {
          const data = await ApiFacade.fetchAllBlogs();
          setAllBlogData(data || []); // Ensure that even if data is null, it doesn't break
        } catch (error) {
          console.error('Error loading blogs:', error);
        }
      };

      loadAllBlogData();
    }, []);
    console.log(allBlogData, '^^^^^^^^^^^^^^^^^^^')

    useEffect(() => {
        const pathnamee = location.pathname.split("/").filter((p) => !!p);
        const breadcrumbs = pathnamee.map((e, i) => ({
          title: e,
          path: `/${pathnamee.slice(0, i + 1).join("/")}`,
        }));
        setBreadcrumbs(breadcrumbs);
    }, [location]);

    useEffect(() => {
        const id = searchParams.get("id");
        const name = searchParams.get("name");

        if (id) {
          if (pathName.includes("Service_Details") && allServiceData.length > 0) { 
            const sData = allServiceData.find((e) => e.name === id);
            setHeading(sData?.name || ''); // Check if sData exists to avoid errors
          }
          if (pathName.includes("Blog_Details")) {
            const bData = allBlogData.find((e) => e.name == name);
            setHeading(bData?.title || '');
          }
          if (pathName.includes("Projects_Details")) {
            const wData = ProjectData.find((e) => e.id === id);
            setHeading(wData?.name || '');
          }
        } else {
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
            setHeading(obj?.heading || '');
          } else {
            setHeading(data?.heading || '');
          }
        }
      }, [allServiceData, allBlogData, pathName, searchParams]);

  return (
    <section className="hero_reapeat_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ol className="breadcrumb">
                        {breadcrumbs.map((breadcrumb, index) => (
                            <li
                              className={`breadcrumb-item${
                                index === breadcrumbs.length - 1 ? " active" : ""
                              }`}
                              key={index}
                            >
                              <Link to={breadcrumb.path}>
                                {breadcrumb.title.replace(/_/g, " ")}
                              </Link>
                            </li>
                        ))}
                    </ol>
                    <div className="hero_repeat_title">
                        <h2>{heading}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerGlobal;
