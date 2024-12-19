import React from "react";
import SideBarCard from "../cards/SideBarCard";

export default function SideBarFeatureList(props) {
  const { sectionTitle, listData } = props;
  return (
    <div>
      <div className="capitalize_text mg_botom_lg section_medium_heading">
        {sectionTitle}
      </div>
      <div>
        {listData.map((el, index) => {
          return <SideBarCard data={el} key={index} />;
        })}
      </div>
      <div>
        <span className="tiny_text text_color_gray capitalize_text">
          see fuul list
        </span>
      </div>
    </div>
  );
}
