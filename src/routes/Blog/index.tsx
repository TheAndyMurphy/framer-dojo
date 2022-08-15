import React from "react";
import "./blog.scss";
import { motion } from "framer-motion";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { BlogList } from "@/assets/data/BlogList";
import BlogPost from "../BlogPost";

const Blog = () => {
  const container = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  const BlogCards = () => (
    <motion.div
      animate="show"
      className="blog"
      initial="hidden"
      variants={container}
    >
      {BlogList.map((post: Post, i: number) => (
        <motion.div key={i} variants={item}>
          <Link to={post.slug}>
            <motion.div
              className="blog__card"
              whileHover={{
                y: -20,
                scale: 1.05,
                boxShadow: "0px 16px 40px rgba(0,0,0,1)",
              }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <motion.img
                layoutId={post.slug}
                src={post.image}
                alt={post.title}
              />
              <div className="blog__card__caption">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <Routes>
      <Route index element={<BlogCards />} />
      <Route path=":slug" element={<BlogPost />} />
    </Routes>
  );
};

export default Blog;
