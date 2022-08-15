import React from "react";
import "./blogPost.scss";
import { motion, useScroll } from "framer-motion";
import { useParams } from "react-router-dom";
import { BlogList } from "@/assets/data/BlogList";

const BlogPost = () => {
  let { slug } = useParams();
  const post = BlogList.filter((item: Post) => item.slug === slug)[0];
  const { scrollYProgress } = useScroll();

  return (
    <div className="post">
      <svg
        className="scroll-progress"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="scroll-progress__shadow"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="scroll-progress__indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <motion.img
        className="post__banner"
        layoutId={post.slug}
        src={post.image}
        alt={post.title}
      />
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{ delay: 0.5 }}
        className="post__title"
      >
        {post.title}
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="post__description"
      >
        {post.description}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {Array.from(Array(5)).map((_, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="post__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BlogPost;
function useViewPortScroll(): { scrollYProgress: any } {
  throw new Error("Function not implemented.");
}
