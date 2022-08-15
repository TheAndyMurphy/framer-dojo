import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface IProps {
  links: { title: string; href: string }[];
}

const Navbar = ({ links }: IProps) => {
  const location = useLocation();

  const linkVariants = {
    inactive: {
      color: "#aaaaaa",
      y: 0,
    },
    active: {
      color: "#ffffff",
      y: -8,
    },
  };

  const highlightVariants = {
    inactive: {
      width: 0,
    },
    active: {
      width: "100%",
    },
  };

  return (
    <nav>
      <ul>
        {links.map((link, i) => (
          <motion.li
            key={i}
            variants={linkVariants}
            initial="inactive"
            animate={
              location.pathname === `/${link.href}` ? "active" : "inactive"
            }
            transition={{ duration: 0.25 }}
          >
            <Link to={link.href}>{link.title}</Link>
            <motion.span
              variants={highlightVariants}
              transition={{ duration: 0.5, delay: 0.25 }}
            />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
