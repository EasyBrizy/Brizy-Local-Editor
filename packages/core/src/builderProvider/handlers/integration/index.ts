import { ExposedHandlers } from "../../types/type";
import { getFonts } from "./font";
import { getForm } from "./form";

interface Data {
  integration: Record<string, unknown>;
  handlers: ExposedHandlers;
  uid: string;
}

export const getIntegration = (data: Data) => {
  const { integration, handlers, uid } = data;
  const formIntegration = (integration.form ?? {}) as Record<string, unknown>;
  const fontsIntegration = (integration.fonts ?? {}) as Record<string, unknown>;

  const { getFormFields, uploadFont, deleteFont, getFont } = handlers;

  return {
    ...integration,
    form: getForm({ form: formIntegration, formHandler: getFormFields, uid }),
    fonts: getFonts({
      fonts: fontsIntegration,
      uploadHandler: uploadFont,
      deleteHandler: deleteFont,
      getFontsHandler: getFont,
      uid,
    }),
  };
};
