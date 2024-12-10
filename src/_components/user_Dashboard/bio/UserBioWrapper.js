"use client";
import React, { useState } from "react";
import styles from "./css/userbioWrapper.module.css";
import ReactQuillElement from "../../elements/formelements/ReactQuillElement";
export default function UserBioWrapper() {
  const [btnToggle, setbtnToggle] = useState(true);

  const handleQuillChange = () => {};
  return (
    <div className={styles.main_container}>
      <div className={styles.Btnbar}>
        <div>{btnToggle ? "edit" : "save"}</div>
      </div>
      <div className={styles.bio_eitor_wrapper}>
        {btnToggle ? (
          <div>
            <ReactQuillElement
              inputValue="hello"
              inputChnageHandler={handleQuillChange}
            />
          </div>
        ) : (
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales porta lorem, vel molestie enim feugiat at. Fusce convallis
              enim nec ante porta pretium. Sed enim risus, molestie ac suscipit
              luctus, imperdiet sit amet ligula. Integer efficitur, nisl ut
              pharetra aliquet, lorem turpis semper libero, et facilisis metus
              ipsum a ante. Cras sed consectetur lorem. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Sed id nibh egestas, sagittis lorem et, pellentesque
              lacus. Mauris scelerisque augue tortor, ut feugiat justo finibus
              in. Etiam bibendum dapibus eros fringilla rutrum. Nulla eu tortor
              sit amet tortor malesuada hendrerit. Etiam mollis posuere urna,
              sit amet feugiat nunc eleifend id. Duis aliquet at diam a
              malesuada. Suspendisse interdum neque accumsan mi molestie
              pulvinar. Duis massa metus, pulvinar feugiat nisl eu, tristique
              volutpat risus. Integer lorem dui, aliquet sit amet lorem sed,
              fermentum tristique nibh. Vestibulum hendrerit scelerisque
              scelerisque. Cras eget eros ut nisi vulputate euismod. In bibendum
              sapien metus, non luctus ex placerat sed. Nunc fermentum eu nibh
              sit amet fringilla. Vestibulum gravida arcu et luctus elementum.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
