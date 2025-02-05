import { Metadata } from "next";
import { SliceComponentProps, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Content } from "@prismicio/client";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");
  const slices = bundleStepAndImageSlices(page.data.slices);

  return (
    <SliceZone
      slices={slices}
      components={{
        ...components,
        step_and_image_bundle: ({
          slice,
        }: SliceComponentProps<StepAndImageBundleSlice>) => (
          <div>
            <SliceZone slices={slice.slices} components={components} />
          </div>
        ),
      }}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

type StepAndImageBundleSlice = {
  id: string;
  slice_type: "step_and_image_bundle";
  slices: Content.StepAndImageSlice[];
};

function bundleStepAndImageSlices(
  slices: Content.HomepageDocumentDataSlicesSlice[]
) {
  const res: (
    | Content.HomepageDocumentDataSlicesSlice
    | StepAndImageBundleSlice
  )[] = [];

  for (const slice of slices) {
    if (slice.slice_type !== "step_and_image") {
      res.push(slice);
      continue;
    }

    const bundle = res.at(-1);
    if (bundle?.slice_type === "step_and_image_bundle") {
      bundle.slices.push(slice);
    } else {
      res.push({
        id: `${slice.id}-bundle`,
        slice_type: "step_and_image_bundle",
        slices: [slice],
      });
    }
  }
  return res;
}
