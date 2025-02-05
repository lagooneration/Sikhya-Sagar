import { FC } from "react";
import { Content, isFilled  } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SlideIn } from "@/components/SlideIn";
import { StepsJourney } from "./StepsJourney";

/**
 * Props for `JourneyGrid`.
 */
export type JourneyGridProps = SliceComponentProps<Content.JourneyGridSlice>;

/**
 * Component for "JourneyGrid" Slices.
 */
const JourneyGrid = ({ slice }: JourneyGridProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      // className="bg-texture bg-brand-gray"
      className="bg-brand-gray relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      {/* <div className="h-screen"> */}
      <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center ~mb-6/10">
          <PrismicRichText field={slice.primary.body} />
        </div>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {slice.primary.journey.map(
          ({ steps }) =>
            isFilled.contentRelationship(steps) && (
              <StepsJourney key={steps.id} id={steps.id} />
            )
        )}
      </div>
      {/* </div> */}
    </Bounded>
    
  );
};

export default JourneyGrid;
