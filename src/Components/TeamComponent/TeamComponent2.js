import React, { useEffect, useState } from "react";
import "./TeamComponent.css";
import title from "../../images/title_img.png";
import ApiFacade from "../../api/facade";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const TeamComponent2 = () => {
  const [teamMembersData, setTeamMembersData] = useState(null);
  const [loadTeamMembers, setLoadTeamMembers] = useState(true);

  useEffect(() => {
    const loadTeamMembersData = async () => {
      try {
        const data = await ApiFacade.fetchTeamMembers();
        setTeamMembersData(data);
      } catch (error) {
        console.error("Error loading team members:", error);
      } finally {
        setLoadTeamMembers(false);
      }
    };

    loadTeamMembersData();
  }, []);

  return (
    <section className="our_team_wrapper">
      <div className="container">
        {loadTeamMembers ? (
          <ShimmerSimpleGallery card imageHeight={300} row={1} col={4} caption />
        ) : (
          <>
            <div className="row">
              <div className="col-lg-12">
                <div className="our_team_title">
                  <div className="troo_da_hero_small_outer about d-flex justify-content-center">
                    <div className="troo_da_small_title_img zoom-in-zoom-out">
                      <img src={title} alt="title_img" />
                    </div>
                    <div className="troo_da_hero_left_small_title">
                      <h4>Our team member</h4>
                    </div>
                  </div>
                  <div className="troo_da_hero_we_r_done_title">
                    <h2>Your work done by them</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {teamMembersData?.map((mem, ind) => (
                <div className="col-lg-3" key={ind}>
                  <div className="troo_da_hand_we_r_done_box">
                    <div className="troo_da_hand_we_r_done_box_inner">
                      <div className="troo_da_hand_we_r_done_box_img">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}/${mem.image}`}
                          alt={`team_member_${ind}`}
                        />
                      </div>
                      <div className="troo_da_hand_we_r_done_box_hover_detail our_team_hoverBox">
                        <h4>{mem.employee_name}</h4>
                        <p>{mem.designation}</p>
                        
                      </div>
                      <div className="troo_da_hand_we_r_done_box_title">
                        <h4>{mem.employee_name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TeamComponent2;
