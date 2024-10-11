import React from "react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  blogImage: string;
}

const BlogCards = ({ title, description, slug, blogImage }:BlogCardProps) => {
  return (
    <div className= "cards bg-white shadow-md rounded-lg overflow-hidden hover:cursor-pointer border-2 border-[#282728]  p-2 transform transition-transform duration-300 hover:scale-105">
      <img src={blogImage} alt={title} className=" w-full h-48  rounded-lg" />
      <div className=" card p-4">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p className="mt-2 ">{description}</p>
        <Link href={`/blog/${slug}`}>
          <button className=" cards  border-2 border-white bg-[#bbce4e] text-white shadow-lg rounded-lg p-2 hover:bg-white hover:text-[#282728] hover:border-[#282728] mt-4">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCards;
