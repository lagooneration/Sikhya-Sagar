import { JSX } from "react";
import { Bounded } from "@/components/Bounded";
import { Content, isFilled } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { LazyYouTubePlayer } from "./LazyYouTubePlayer";
import clsx from "clsx";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";
import { SlideIn } from "@/components/SlideIn";
import { Heading } from "@/components/Heading";
import { ButtonLink } from "@/components/ButtonLink";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock = ({ slice }: VideoBlockProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-zinc-900 py-24"
    >
      <h2 className="sr-only">Video Reel</h2>
      <div className="relative aspect-video max-w-6xl mx-auto">
        {/* Masks */}
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3"
          )}
        />
        {/* Video */}
        <div className={clsx(MASK_CLASSES, "relative h-full")}>
          {isFilled.keyText(slice.primary.youtube_video_id) ? (
            <LazyYouTubePlayer youTubeID={slice.primary.youtube_video_id} />
          ) : null}
          {/* Texture overlay */}
          <Image
            src="/image-texture.png"
            alt=""
            fill
            className="pointer-events-none object-cover opacity-50"
          />
        </div>
      </div>
      <div>
      <Bounded>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <SlideIn>
              <Heading size="lg" as="h2" className="text-brand-gray">
                <PrismicText field={slice.primary.heading} />
              </Heading>
            </SlideIn>
            <ButtonLink field={slice.primary.enactus} color="pastel" size="lg" icon="enactus" className="z-20 mt-2 block">
            {slice.primary.enactus.text}
          </ButtonLink>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 text-gray-200">
            <PrismicText field={slice.primary.body} />
          </div>
        </div>

      </Bounded>
      </div>
    </Bounded>
  );
};

export default VideoBlock;
