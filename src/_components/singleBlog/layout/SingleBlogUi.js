import React from "react";
import styles from "./css/singleblogui.module.css";
import dummyImg from "../../../../public/web-static-img/single-blog-thumblin.png";
import Image from "next/image";
import UserDetailsAvatar from "../../userAvatars/UserDetailsAvatar";
import {
  BsThreeDotsVertical,
  FaHeart,
  IoEyeOutline,
  FaComment,
} from "../../ApplicationIcons";
import BlogComment from "../blogcomment/BlogComment";
export default function SingleBlogUi() {
  return (
    <div className={styles.main_container}>
      <div className={styles.breadcrumb_wrapper}>
        <p>home - blog - This is blog</p>
      </div>
      <div className={styles.inner_container}>
        <div className={styles.content_container}>
          <div className={styles.blog_thumblin_wrapper}>
            <Image
              src={dummyImg}
              width={500}
              height={500}
              className={styles.img_style}
            />
          </div>
          <div className={`${styles.img_caption} text_color_gray tiny_text`}>
            {" "}
            image caption{" "}
          </div>
          <div className={styles.action_bar}>
            <div>
              <UserDetailsAvatar boldText="sanjay" lightText="24-aug-2024" />
            </div>
            <div className={styles.actions_wrapper}>
              <div className={styles.card_icon_details}>
                <div className={styles.icon_box}>
                  <FaHeart />
                </div>
                <div className={styles.icon_details}>200</div>
              </div>
              <div className={styles.card_icon_details}>
                <div className={styles.icon_box}>
                  {" "}
                  <IoEyeOutline />{" "}
                </div>

                <div className={styles.icon_details}>1500</div>
              </div>
              <div className={styles.card_icon_details}>
                <div className={styles.icon_box}>
                  <FaComment />
                </div>
                <div className={styles.icon_details}>30</div>
              </div>
            </div>
          </div>
          <div className={styles.content_title}>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. tem
              Suspendisse egestas fringilla.
            </h1>
          </div>
          <div className={styles.content_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            egestas tempus fringilla. Donec gravida arcu et ipsum euismod
            volutpat. Nam imperdiet pharetra tellus, non euismod purus lobortis
            a. Sed tempus non purus in iaculis. Morbi gravida malesuada
            consequat. Nam sit amet mollis ipsum. Morbi diam ante, tincidunt et
            massa eget, lacinia auctor neque. Vivamus id dolor nulla. Phasellus
            molestie, nisl in faucibus elementum, risus lectus suscipit eros, ac
            convallis sapien risus id ex. Praesent id ligula a lacus vehicula
            faucibus. Donec vestibulum mauris neque, ac dignissim orci varius
            id. Praesent ac aliquam turpis, eget dignissim augue. Praesent vitae
            mi nec dui tempor scelerisque accumsan vitae felis. Aenean ac nisl
            feugiat, vulputate metus sit amet, porttitor nibh. In erat dolor,
            posuere ut nisl vitae, posuere varius nulla. Proin mi nulla,
            elementum at dictum nec, scelerisque a elit. Phasellus vitae aliquam
            magna. Aliquam quis nisl arcu. Donec consequat facilisis viverra.
            Cras quis ex vitae metus auctor vulputate mattis non justo. Proin
            volutpat purus eros, nec viverra nulla semper eu. Duis aliquet eros
            ultricies purus dapibus luctus. Donec et felis mi. Fusce cursus et
            tellus sit amet mattis. In euismod interdum auctor. Maecenas id diam
            et dolor pulvinar pretium vel at tellus. Sed vitae malesuada felis.
            Integer scelerisque fringilla elementum. Fusce in congue odio. In a
            ultricies odio, vel euismod lacus. Ut odio urna, lobortis ut tempor
            sit amet, mollis a dui. Sed quis sem ac lorem tincidunt ullamcorper.
            Vestibulum eget consectetur nulla. Fusce egestas dictum libero
            blandit hendrerit. Praesent congue justo in libero gravida, quis
            vulputate odio consectetur. Donec dignissim lacus sem, eu sodales
            sem mollis vel. Nam condimentum, elit eget auctor tincidunt, massa
            ligula aliquam elit, consequat vestibulum dolor tortor id leo.
            Suspendisse ac ligula erat. Cras blandit pretium odio, eu molestie
            dolor euismod tempus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Quisque commodo
            venenatis pulvinar. Mauris vitae imperdiet diam. Integer suscipit eu
            quam eget posuere. Integer risus nisi, mattis vitae odio et, aliquet
            iaculis elit. Maecenas sit amet ultricies diam. Cras quis felis
            quam. Maecenas vel quam tempor, luctus erat ac, finibus nisl.
            Aliquam elementum metus vitae nisl accumsan, sit amet tempus turpis
            ultrices. Aliquam sit amet porttitor ligula. Etiam nisl risus,
            cursus a ipsum id, pretium condimentum dolor. Phasellus eget magna
            et elit dictum aliquam et vitae urna. Nullam non arcu elit. Vivamus
            nec congue nulla. Aenean iaculis sem sed nibh blandit, in placerat
            justo pretium. Nunc aliquet sapien vitae massa condimentum, a tempus
            massa imperdiet. Quisque eget nunc at metus euismod pellentesque in
            sed libero. Aenean id nulla a mauris malesuada convallis at vel
            odio. Duis lacinia varius odio a convallis. Proin consectetur enim
            vel nisi feugiat sodales. Aliquam eget ligula facilisis, porttitor
            lacus consectetur, venenatis augue. Aenean ipsum est, commodo nec
            leo auctor, ullamcorper finibus ipsum. Ut sit amet est pretium,
            sodales diam vel, cursus dui. Nunc interdum ipsum id sodales
            egestas. Ut quis convallis nisi, sed laoreet diam. Aenean eu ligula
            sed velit ornare posuere. Pellentesque pulvinar tortor libero. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            egestas tempus fringilla. Donec gravida arcu et ipsum euismod
            volutpat. Nam imperdiet pharetra tellus, non euismod purus lobortis
            a. Sed tempus non purus in iaculis. Morbi gravida malesuada
            consequat. Nam sit amet mollis ipsum. Morbi diam ante, tincidunt et
            massa eget, lacinia auctor neque. Vivamus id dolor nulla. Phasellus
            molestie, nisl in faucibus elementum, risus lectus suscipit eros, ac
            convallis sapien risus id ex. Praesent id ligula a lacus vehicula
            faucibus. Donec vestibulum mauris neque, ac dignissim orci varius
            id. Praesent ac aliquam turpis, eget dignissim augue. Praesent vitae
            mi nec dui tempor scelerisque accumsan vitae felis. Aenean ac nisl
            feugiat, vulputate metus sit amet, porttitor nibh. In erat dolor,
            posuere ut nisl vitae, posuere varius nulla. Proin mi nulla,
            elementum at dictum nec, scelerisque a elit. Phasellus vitae aliquam
            magna. Aliquam quis nisl arcu. Donec consequat facilisis viverra.
            Cras quis ex vitae metus auctor vulputate mattis non justo. Proin
            volutpat purus eros, nec viverra nulla semper eu. Duis aliquet eros
            ultricies purus dapibus luctus. Donec et felis mi. Fusce cursus et
            tellus sit amet mattis. In euismod interdum auctor. Maecenas id diam
            et dolor pulvinar pretium vel at tellus. Sed vitae malesuada felis.
            Integer scelerisque fringilla elementum. Fusce in congue odio. In a
            ultricies odio, vel euismod lacus. Ut odio urna, lobortis ut tempor
            sit amet, mollis a dui. Sed quis sem ac lorem tincidunt ullamcorper.
            Vestibulum eget consectetur nulla. Fusce egestas dictum libero
            blandit hendrerit. Praesent congue justo in libero gravida, quis
            vulputate odio consectetur. Donec dignissim lacus sem, eu sodales
            sem mollis vel. Nam condimentum, elit eget auctor tincidunt, massa
            ligula aliquam elit, consequat vestibulum dolor tortor id leo.
            Suspendisse ac ligula erat. Cras blandit pretium odio, eu molestie
            dolor euismod tempus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Quisque commodo
            venenatis pulvinar. Mauris vitae imperdiet diam. Integer suscipit eu
            quam eget posuere. Integer risus nisi, mattis vitae odio et, aliquet
            iaculis elit. Maecenas sit amet ultricies diam. Cras quis felis
            quam. Maecenas vel quam tempor, luctus erat ac, finibus nisl.
            Aliquam elementum metus vitae nisl accumsan, sit amet tempus turpis
            ultrices. Aliquam sit amet porttitor ligula. Etiam nisl risus,
            cursus a ipsum id, pretium condimentum dolor. Phasellus eget magna
            et elit dictum aliquam et vitae urna. Nullam non arcu elit. Vivamus
            nec congue nulla. Aenean iaculis sem sed nibh blandit, in placerat
            justo pretium. Nunc aliquet sapien vitae massa condimentum, a tempus
            massa imperdiet. Quisque eget nunc at metus euismod pellentesque in
            sed libero. Aenean id nulla a mauris malesuada convallis at vel
            odio. Duis lacinia varius odio a convallis. Proin consectetur enim
            vel nisi feugiat sodales. Aliquam eget ligula facilisis, porttitor
            lacus consectetur, venenatis augue. Aenean ipsum est, commodo nec
            leo auctor, ullamcorper finibus ipsum. Ut sit amet est pretium,
            sodales diam vel, cursus dui. Nunc interdum ipsum id sodales
            egestas. Ut quis convallis nisi, sed laoreet diam. Aenean eu ligula
            sed velit ornare posuere. Pellentesque pulvinar tortor libero.
          </div>
        </div>
        <div className={styles.comment_container}>
          <BlogComment />
        </div>
      </div>
    </div>
  );
}
