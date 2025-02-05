import { Metadata } from "next";
import { SliceComponentProps, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Content } from "@prismicio/client";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("registration");

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("registration");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

