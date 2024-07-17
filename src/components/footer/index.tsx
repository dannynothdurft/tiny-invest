import Config from "@/config/config.json";
import HPConfig from "@/config/menu.json";
import SocialConfig from "@/config/social.json";
import Image from "next/image";
import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  const { copyright, footer_content } = Config.params;
  const { footer } = HPConfig;

  return (
    <footer className="ti--footer">
      {/* footer menu */}
      <div className="footer--container">
        {footer.map((col) => {
          return (
            <div key={col.name} className="col-item">
              <h3>{col.name}</h3>
              <ul>
                {col?.menu.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.url}
                      rel=""
                      target={item.blank === "blank" ? "_blank" : "_self"}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        {/* social icons */}
        <div className="social--container">
          <Link href="/">
            <Image
              src={Config.site.logo}
              width={Config.site.logo_width}
              height={Config.site.logo_height}
              alt=""
            />
          </Link>
          <p>{footer_content}</p>
          <Social source={SocialConfig} className="social-icons" />
        </div>
      </div>
      {/* copyright */}
      <div className="ti-copyright">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
