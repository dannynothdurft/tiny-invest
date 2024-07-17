import Image from "next/image";
import Link from "next/link";
import HPConfig from "@/config/homePage.json";
import BlogCard from "@/components/blogCard";

export default function HomePage() {
  return (
    <>
      <section className="section--header">
        <h1>{HPConfig.banner.title}</h1>
        <p>{HPConfig.banner.content}</p>
        <Image
          src={HPConfig.banner.image}
          width={750}
          height={390}
          alt="banner image"
          priority
        />
      </section>

      <section className="section">
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

      <section className="section--blogs">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
    </>
  );
}
