"use client";

import Image from "next/image";
import { useState } from "react";
import { VisualPlaceholder } from "./VisualPlaceholder";

export function ProjectImage({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const imageSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;

  if (failed) {
    return <VisualPlaceholder dark label={alt} className={className} />;
  }

  return (
    <div className={`soft-card relative overflow-hidden bg-white ring-1 ring-ink/5 ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
