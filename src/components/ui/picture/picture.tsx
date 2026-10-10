import { type ComponentProps, type ReactNode, useState } from "react";

import defaultImage from "@/assets/default-image.svg";

import { cn } from "@/lib/utils.ts";

type Props = ComponentProps<"img"> & {
  jpgSrc: string;
  width: string | number;
  height: string | number;
  alt: string;
  webpSrc?: string;
  avifSrc?: string;
  className?: string;
  imgClassName?: string;
};

export const Picture = ({
  jpgSrc,
  alt,
  width = 800,
  height = 450,
  webpSrc,
  avifSrc,
  decoding = "async",
  fetchPriority = "auto",
  loading = "lazy",
  className = "",
  imgClassName = "",
  ...otherProps
}: Props): ReactNode => {
  const [otherSource, setOtherSource] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>(jpgSrc);
  const [errorClassName, setErrorClassName] = useState("");

  const handlePictureError = () => {
    setImageSrc(defaultImage);
    setOtherSource(false);
    setErrorClassName(
      `aspect-${width}/${height} object-cover w-full object-center`
    );
  };
  return (
    <picture
      className={cn(className)}
      {...otherProps}
      onError={handlePictureError}
    >
      {otherSource && (
        <>
          {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        </>
      )}
      <img
        className={cn(imgClassName, errorClassName)}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        fetchPriority={fetchPriority}
        decoding={decoding}
        loading={loading}
      />
    </picture>
  );
};
