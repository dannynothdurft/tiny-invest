import "@/styles/navbar.scss";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const TINavbar = ({ children }: { children: ReactNode }) => {
  return <nav className="ti--navbar">{children}</nav>;
};

export const DNavLogo = ({ src }: { src: string }) => {
  return (
    <div className="dn-navlogo">
      <Image
        src={src}
        alt="Logo Danny Nothdurft"
        width={200}
        height={50}
        priority={true}
        loading="eager"
        title="Logo Danny Nothdurft"
      />
    </div>
  );
};

export const DNavContain = ({
  children,
  device,
}: {
  children: ReactNode;
  device?: string;
}) => {
  return <div className={`dn-navcontain ${device}`}>{children}</div>;
};

export const DNavLink = ({
  href,
  link,
  name,
  svg,
  con,
  setCon,
  path,
}: {
  href: string;
  link?: string;
  name: any;
  svg?: any;
  con?: boolean;
  setCon?: any;
  path?: string;
}) => {
  return (
    <Link
      href={href}
      className={[
        "dn-navlink",
        link === "logo" && "logo",
        path === "active" && "active",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={con ? () => setCon(false) : undefined}
    >
      {svg ? <Image src={svg} alt={name} width={25} height={25} /> : null}
      {name}
    </Link>
  );
};

export const DNavButton = ({ con, setCon }: { con: any; setCon: any }) => {
  const changeMenu = () => {
    setCon(!con);
  };

  return (
    <div
      className={["dn-nav-button", con === "open" && "open"]
        .filter(Boolean)
        .join(" ")}
      onClick={changeMenu}
    >
      <div className="dn-nav-burger"></div>
    </div>
  );
};
