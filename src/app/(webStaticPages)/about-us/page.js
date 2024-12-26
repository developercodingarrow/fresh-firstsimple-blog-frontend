import React from "react";
import styles from "../page.module.css";
import { MdKeyboardArrowRight } from "../../../_components/ApplicationIcons";
export default function AboutUsPage() {
  return (
    <div className={styles.main_container}>
      <div
        className={`${styles.page_breadcrumb} small_text text_color_gray capitalize_text mg_botom_lg`}
      >
        <span>Home</span>
        <span className={styles.arrow_iconBox}>
          {" "}
          <MdKeyboardArrowRight />{" "}
        </span>
        <span>About Us</span>
      </div>
      <div className={`${styles.page_header} mg_botom_lg`}>
        <h1>About Us</h1>
      </div>
      <section className={`${styles.page_metaDescreption} mg_botom_lg`}>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          sodales pulvinar ante, sit amet bibendum sem sollicitudin ut. In sit
          amet dictum nunc,
        </h2>
      </section>
      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales
        pulvinar ante, sit amet bibendum sem sollicitudin ut. In sit amet dictum
        nunc, id porta eros. Morbi ullamcorper erat quis lectus eleifend
        porttitor. Vestibulum non ornare lorem, sed lobortis leo. Sed lacus
        libero, ultrices ut elementum a, vulputate quis tellus. Integer ac
        tellus luctus est convallis facilisis et eget quam. Phasellus dui dui,
        consequat eleifend viverra a, aliquet ut dui. Maecenas fringilla
        consequat felis, eu accumsan felis laoreet elementum. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Aliquam consectetur diam quis sapien tincidunt, in tempor ligula
        ultricies. Curabitur vehicula sed enim ac tempor. Suspendisse ut
        efficitur massa. Sed posuere aliquam mattis. Duis nec magna sollicitudin
        ante mollis congue eu nec odio. Quisque dui dolor, varius quis efficitur
        in, laoreet et nisl. Maecenas vel egestas ex. Sed eleifend tincidunt
        mauris, vitae accumsan nisi fermentum nec. Sed sit amet eros nunc.
        Praesent finibus lorem vel dolor mollis, ac rhoncus risus finibus.
        Curabitur ultricies massa a ipsum rhoncus, vel feugiat lorem egestas.
        Nunc tincidunt, ipsum sed vehicula interdum, leo purus euismod erat, ac
        tempor justo quam vel ex. Mauris vulputate molestie orci, eget cursus
        ipsum efficitur vitae. Aliquam eu semper magna, quis rhoncus elit. Nulla
        ultricies at lectus non pretium. Fusce eleifend scelerisque sapien, in
        ornare est dapibus et. Integer in molestie dolor. Suspendisse suscipit
        congue pharetra. Fusce tristique dui massa, vitae porttitor felis
        accumsan quis. Phasellus vitae eleifend nibh, sit amet feugiat ante.
        Vestibulum nec convallis magna. Aenean mollis pellentesque vulputate.
        Aliquam condimentum, nulla sed scelerisque mollis, magna leo euismod ex,
        id pharetra libero mi et turpis. Integer consequat scelerisque massa sit
        amet consectetur. Donec quis urna nisi. Aenean porttitor nisi neque, in
        lobortis urna consequat condimentum. Sed vel arcu eget massa lacinia
        fringilla in eu tellus. Suspendisse pulvinar risus pretium tellus
        fringilla venenatis. Quisque sed dui sed nisl tristique venenatis at
        gravida est. Nullam nec eros felis. Etiam vestibulum ullamcorper nisi,
        ac pharetra velit pharetra non. Curabitur maximus diam ultricies orci
        mollis, sit amet faucibus est fringilla. Sed interdum lacus accumsan,
        luctus eros et, vehicula purus. Duis ac ligula commodo, volutpat neque
        vitae, varius tortor. Pellentesque fringilla eget ligula ac eleifend.
        Sed feugiat nisi eget orci mattis, consectetur dignissim nisi pulvinar.
      </section>
    </div>
  );
}
