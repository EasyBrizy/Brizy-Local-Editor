import React, { useEffect, useRef } from "react";
import { MediaUploadContainerProps } from "./types";

export function MediaUploadContainer({ mediaUploadInstance }: MediaUploadContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current && mediaUploadInstance.render(ref.current);
  }, [ref.current, mediaUploadInstance]);

  return <div ref={ref} />;
}
