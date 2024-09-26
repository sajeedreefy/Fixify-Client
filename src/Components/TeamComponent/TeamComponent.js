import React, { useEffect, useState } from "react";
import "./TeamComponent.css";
import title from "../../images/title_img.png";
import { Link } from "react-router-dom";
import ApiFacade from "../../api/facade";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const TeamComponent = () => {
  const [teamMembersData, setTeamMembersData] = useState(null);
  const [loadTeamMembers, setLoadTeamMembers] = useState(true);

  useEffect(() => {
    const loadTeamMembersData = async () => {
      try {
        const data = await ApiFacade.fetchTeamMembers();
        setTeamMembersData(data.slice(0,4));
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoadTeamMembers(false);
      }
    };

    loadTeamMembersData();
  }, []);

  return (
    <section class="our_team_wrapper ">
      <div class="container">
        {loadTeamMembers ? (
          <>
            <ShimmerSimpleGallery card imageHeight={300} row={1} col={4} caption />
            
          </>
        ) : (
          <>
            <div class="row">
              <div class="col-lg-12">
                <div class="our_team_title">
                  <div class="troo_da_hero_small_outer about d-flex justify-content-center">
                    <div class="troo_da_small_title_img zoom-in-zoom-out">
                      <img src={title} alt="title_img" />
                    </div>
                    <div class="troo_da_hero_left_small_title">
                      <h4>Our team member</h4>
                    </div>
                  </div>
                  <div class="troo_da_hero_we_r_done_title">
                    <h2>Your work done by them</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              {teamMembersData?.map((mem, ind) => (
                <div class="col-lg-3" key={ind}>
                  <div class="troo_da_hand_we_r_done_box">
                    <div class="troo_da_hand_we_r_done_box_inner">
                      <div class="troo_da_hand_we_r_done_box_img">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}/${mem.image}`}
                          alt="service_img-1"
                        />
                      </div>
                      <div class="troo_da_hand_we_r_done_box_hover_detail our_team_hoverBox">
                        <h4>{mem.employee_name}</h4>
                        <p>{mem.designation}</p>
                      </div>
                      <div class="troo_da_hand_we_r_done_box_title">
                        <h4>{mem.employee_name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="troo_da_about_we_r_done_btn text-center">
              <Link to="/Home/Our_Team">
                <button type="button" class="btn btn-primary">
                  View All Team
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TeamComponent;
