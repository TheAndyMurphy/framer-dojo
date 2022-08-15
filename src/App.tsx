import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Blog, Contact, NotFound } from "@/routes";
import { Navbar } from "@/components";

import { AnimatePresence } from "framer-motion";

const links = [
  {
    title: "Home",
    href: "",
  },
  {
    title: "Blog",
    href: "blog",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

function App() {
  const location = useLocation();

  return (
    <div style={{ width: "100%" }}>
      <Navbar links={links} />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route index element={<Home />}></Route>
          <Route path="blog/*" key="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
