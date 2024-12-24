import React from "react";
import BlogComment from "../blogcomment/BlogComment";

export default function BlogCommentsWrapper(props) {
  const { data } = props;
  return (
    <div>
      <BlogComment
        blogComments={data?.comments}
        blogId={data?._id}
        blogBy={data?.user}
      />
    </div>
  );
}
