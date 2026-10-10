import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { Picture } from "@/components/ui/picture/picture.tsx";

import { cn } from "@/lib/utils.ts";

import type { CategoryType } from "@/types/article.types.ts";

type Props = {
  className?: string;
  data: CategoryType;
};
const IMAGE_WIDTH = 800;
const IMAGE_HEIGHT = 200;
export const CategoryHeader = ({ className = "", data }: Props): ReactNode => {
  const { t } = useTranslation();
  const webpImageUrl = `${data.image}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}.webp`;
  const jpgImageUrl = `${data.image}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}.jpg`;
  if (!data) {
    return (
      <p className={cn("text-center", className)}>{t("category.noResult")}</p>
    );
  }
  return (
    <div className={className}>
      <Picture
        jpgSrc={jpgImageUrl}
        webpSrc={webpImageUrl}
        alt={data.name}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        imgClassName="w-full h-48 block rounded-lg object-cover"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      <h1 className="text-2xl font-bold my-4">{data.name}</h1>
      <p className="text-base">{data.description}</p>
    </div>
  );
};
