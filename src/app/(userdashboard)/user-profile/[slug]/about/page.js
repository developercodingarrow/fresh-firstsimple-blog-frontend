import React from "react";

export default function page(pathname) {
  const slug = pathname.params?.slug;
  console.log("about page slug---", slug);
  return (
    <div>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        euismod justo vulputate imperdiet sagittis. Vestibulum non nunc sem.
        Quisque condimentum porttitor finibus. Fusce pulvinar magna eu sodales
        condimentum. Quisque cursus dolor augue, eu auctor elit commodo
        malesuada. Nulla facilisi. Sed maximus elementum purus, non egestas quam
        eleifend nec. Vestibulum lacinia quam id ultricies tincidunt. Vestibulum
        sed finibus tortor. Pellentesque eleifend venenatis est id malesuada.
        Curabitur scelerisque efficitur erat a vestibulum. Nunc vitae arcu
        condimentum, lacinia eros quis, condimentum felis. Duis ullamcorper
        lorem vitae est aliquam, eget convallis erat ultrices. In eu mauris
        orci. Nunc lobortis laoreet nunc vel tincidunt. Nam vel nulla mi. Duis
        dapibus condimentum ligula. Donec eget massa tempor, finibus ante vel,
        pulvinar sem. Etiam vehicula, felis convallis sagittis posuere, mauris
        augue porta metus, quis fermentum magna augue ut leo. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Ut laoreet urna sed
        dui pharetra, non eleifend libero placerat. Quisque quis arcu sed dolor
        finibus molestie eu at purus. Vestibulum sit amet pellentesque dui, sit
        amet vulputate augue. Integer neque mi, tincidunt a augue eu, vehicula
        ornare dolor. Vivamus laoreet non ipsum vel pretium. Vivamus ornare id
        quam vitae suscipit. Aenean non nulla elementum lorem egestas
        consectetur non nec urna. Ut sit amet massa vel lorem gravida aliquet.
        Duis tempor dapibus enim, nec mattis elit iaculis sed. Proin magna est,
        bibendum vel auctor sit amet, suscipit pulvinar sapien. Duis tincidunt
        ipsum faucibus eros porttitor venenatis. Fusce odio mauris, suscipit sit
        amet tortor nec, hendrerit gravida justo. Donec volutpat vestibulum
        nunc, ac semper diam tempus in. Maecenas dictum tellus sed tempus porta.
        Ut felis diam, tincidunt vel efficitur placerat, luctus laoreet leo.
        Phasellus dignissim sem id mauris interdum, non consequat leo ultricies.
        Morbi luctus gravida odio a ullamcorper. In hac habitasse platea
        dictumst. Integer at nulla non leo porta pretium a quis enim. Proin
        lorem eros, auctor vel libero sed, porttitor convallis est. Quisque
        hendrerit posuere est id consequat. Nullam eleifend vel orci eu
        consectetur. Pellentesque eget nulla ante.
      </p>
    </div>
  );
}
