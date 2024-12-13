import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

// export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });
  console.log(id);
  
  if(!post) return notFound;
  return <div className="text-black">{post.tittle}</div>;
};

export default page;
