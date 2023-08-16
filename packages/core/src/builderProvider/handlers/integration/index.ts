import { HandlerData } from "@/builderProvider/types/type";
import { getForm } from "./form";

interface Data extends HandlerData {
  integration: Record<string, unknown>;
}

export const getIntegration = (data: Data) => {
  const { target, uid, event, integration } = data;
  const formIntegration = (integration.form ?? {}) as Record<string, unknown>;

  return {
    ...integration,
    form: getForm({ uid, target, event, form: formIntegration }),
  };
};
