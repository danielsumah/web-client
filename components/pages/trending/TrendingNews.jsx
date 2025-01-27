import React from "react";
import Link from "next/link";
import NewsBadge from "../../ui/NewsBadge";
import { v4 as uuid } from "uuid";

export default function TrendingNews() {
  const news = [
    {
      headline:
        "“Free Food will be given to all Indy and Zik Hall residents” - Naira Marley",
      summary:
        "Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis vulputate...",
      image: "/unsplash_1.png",
      date: "November 19, 2021",
      link: "#",
    },
    {
      headline:
        "“Free Food will be given to all Indy and Zik Hall residents” - Naira Marley",
      summary:
        "Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis vulputate...",
      image: "/unsplash_1.png",
      date: "November 19, 2021",
      link: "#",
    },
    {
      headline:
        "“Free Food will be given to all Indy and Zik Hall residents” - Naira Marley",
      summary:
        "Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis vulputate...",
      image: "/unsplash_1.png",
      date: "November 19, 2021",
      link: "#",
    },
    {
      headline:
        "“Free Food will be given to all Indy and Zik Hall residents” - Naira Marley",
      summary:
        "Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis vulputate...",
      image: "/unsplash_1.png",
      date: "November 19, 2021",
      link: "#",
    },
    {
      headline:
        "“Free Food will be given to all Indy and Zik Hall residents” - Naira Marley",
      summary:
        "Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis vulputate...",
      image: "/unsplash_1.png",
      date: "November 19, 2021",
      link: "#",
    },
    {
      headline:
        "“Free Food will be given to all Indy and Zik Hall residents” - Naira Marley",
      summary:
        "Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis vulputate...",
      image: "/unsplash_1.png",
      date: "November 19, 2021",
      link: "#",
    },
    {
      headline:
        "“Free Food will be given to all Indy and Zik Hall residents” - Naira Marley",
      summary:
        "Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis vulputate...",
      image: "/unsplash_1.png",
      date: "November 19, 2021",
      link: "#",
    },
    {
      headline:
        "“Free Food will be given to all Indy and Zik Hall residents” - Naira Marley",
      summary:
        "Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis vulputate...",
      image: "/unsplash_1.png",
      date: "November 19, 2021",
      link: "#",
    },
    {
      headline:
        "“Free Food will be given to all Indy and Zik Hall residents” - Naira Marley",
      summary:
        "Duis integer id ultrices ipsum tristique congue. Feugiat consectetur nam pharetra maecenas integer turpis tincidunt. Dui habitasse vel convallis vulputate...",
      image: "/unsplash_1.png",
      date: "November 19, 2021",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center mx-[16px] mt-[80px] mb-[80px] space-y-[37px]">
      {news && news.map((info) => <News key={uuid()} {...info} />)}
    </div>
  );
}

const News = ({ date, headline, summary, image, link }) => (
  <Link href="/news">
    <a className="block">
      <div className="flex flex-row space-x-[11px]">
        <div>
          <img
            className="max-w-[350px] h-[90px] rounded-[8px]"
            src={image}
            alt="news picture"
          />
        </div>
        <div className="relative bottom-[1px]">
          <div className="flex flex-row items-center space-x-[6px] font-bold">
            <NewsBadge title="news" />
            <div className="text-[12px]">{date}</div>
          </div>
          <div>
            <h2 className="font-bold text-[14px] mb-[5px]">{headline}</h2>
            <p className="text-[14px] mb-[15px] lg:max-w-xl">{summary}</p>
            <a
              href={link}
              className="text-[14px] border border-black italic p-1 font-bold"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </a>
  </Link>
);
