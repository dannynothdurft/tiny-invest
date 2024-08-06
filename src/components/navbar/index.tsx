"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import MenuConfig from "@/config/menu.json";

import {
  TINavbar,
  DNavContain,
  DNavLink,
  DNavLogo,
  DNavButton,
} from "./navbar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const pages = MenuConfig.main;

  return (
    <header>
      <TINavbar>
        <DNavLink link="logo" href="/" name={<DNavLogo src="/logo.svg" />} />

        <DNavButton con={menuOpen} setCon={setMenuOpen} />
        <DNavContain device="desktop">
          {pages.map((page, index) => {
            return (
              <DNavLink
                href={page.url}
                name={page.name}
                key={index}
                path={pathname === page.url ? "active" : ""}
              />
            );
          })}
        </DNavContain>
        {menuOpen ? (
          <DNavContain device="mobile">
            {pages.map((page, index) => {
              return (
                <DNavLink
                  href={page.url}
                  name={page.name}
                  key={index}
                  con={menuOpen}
                  setCon={setMenuOpen}
                />
              );
            })}
          </DNavContain>
        ) : null}
      </TINavbar>
    </header>
  );
}

export default Navbar;
