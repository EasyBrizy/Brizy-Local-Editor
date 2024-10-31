import { ExposedHandlers } from "../../types/type";
import { getForm } from "./form";

interface Data {
  integration: Record<string, unknown>;
  handlers: ExposedHandlers;
  uid: string;
}

export const getIntegration = (data: Data) => {
  const { integration, handlers, uid } = data;
  const formIntegration = (integration.form ?? {}) as Record<string, unknown>;

  return {
    ...integration,
    form: getForm({ form: formIntegration, formHandler: handlers.getFormFields, uid }),
  };
};
