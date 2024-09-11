import React, { useEffect, useState } from "react";
import "./BrandLogo.css";
import fetchFixifyClientsAPI from "../../api/fixifyClients/fixifyClientsAPI";

const BrandLogo = () => {
  const [clientDetails, setClientDetails] = useState(null);
  useEffect(() => {
    const loadClientDetails = async () => {
      try {
        const data = await fetchFixifyClientsAPI();
        setClientDetails(data);
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    loadClientDetails();
  }, []);


  if(!clientDetails)
  {
    return(
        <div>
            loading...
        </div>
    )
  }
  return (
    <section class="brand_logo_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div className="brand_logo_outer d-flex">
              {clientDetails && clientDetails.map((client, index) => (
                  <div className="item" key={index}>
                    <div className="brand_logo">
                      <img
                        src={client.brand_image}
                        alt={`brand_Logo_${index + 1}`}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;
