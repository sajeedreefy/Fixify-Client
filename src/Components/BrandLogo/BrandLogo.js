import React, { useEffect, useState } from "react";
import "./BrandLogo.css";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import ApiFacade from "../../api/facade";

const BrandLogo = () => {
  const [clientDetails, setClientDetails] = useState(null);
  const [loadClientsDetails, setLoadClientDetails] = useState(true);

  useEffect(() => {
    const loadClientDetails = async () => {
      try {
        const data = await ApiFacade.fetchFixifyClientsAPI();
        setClientDetails(data);
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoadClientDetails(false);
      }
    };

    loadClientDetails();
  }, []);

  
  return (
    <section class="brand_logo_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div className="brand_logo_outer d-flex">
              {loadClientsDetails ? (
                <div class="container">
                  <ShimmerSimpleGallery
                    card
                    imageHeight={100}
                    row={1}
                    col={4}
                  ></ShimmerSimpleGallery>
                </div>
              ) : (
                <>
                  {clientDetails &&
                    clientDetails.map((client, index) => (
                      <div className="item" key={index}>
                        <div className="brand_logo">
                          <img
                            src={client.brand_image}
                            alt={`brand_Logo_${index + 1}`}
                          />
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;
