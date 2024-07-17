import Image from "next/image";
import Link from "next/link";
import HPConfig from "@/config/homePage.json";

export default function HomePage() {
  return (
    <div className="page-main">
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">
                {HPConfig.banner.title}
              </h1>
              <p className="mt-4">{HPConfig.banner.content}</p>
              {HPConfig.banner.button && (
                <Link
                  className="btn btn-primary mt-4"
                  href={HPConfig.banner.button.link}
                >
                  {HPConfig.banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12"
                src={HPConfig.banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <Link
          href="https://a.check24.net/misc/click.php?pid=756943&aid=340&deep=c24bank&cat=14"
          target="_blank"
        >
          <Image
            src="https://a.check24.net/misc/view.php?pid=756943&aid=340&cat=14"
            width="800"
            height="200"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="C24 Bank Banner"
          />
        </Link>
      </section>
    </div>
  );
}
