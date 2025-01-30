import { KTCardBody, WithChildren } from "@/components/Metronic/helpers";
import { FC } from "react";

export const ProjectCardBody: FC<WithChildren> = ({ children }) => (
  <KTCardBody className="py-4 d-flex flex-column gap-8">{children}</KTCardBody>
);
