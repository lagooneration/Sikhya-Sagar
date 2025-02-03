import { FC } from "react";
import { Content, isFilled  } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
// import { Heading } from "@/components/Heading"
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `JourneyGrid`.
 */
export type JourneyGridProps = SliceComponentProps<Content.JourneyGridSlice>;

/**
 * Component for "JourneyGrid" Slices.
 */
const JourneyGrid: FC<JourneyGridProps> = ({ slice }) => {
  return (
    <Bounded
     data-slice-type={slice.slice_type}
     data-slice-variation={slice.variation}
     
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
      
      {slice.primary.journey.map((item, index) => (
        <PrismicNextLink field={item.steps} key={index}>
          link
        </PrismicNextLink>
      ))}

    </Bounded>
  );
};

export default JourneyGrid;
