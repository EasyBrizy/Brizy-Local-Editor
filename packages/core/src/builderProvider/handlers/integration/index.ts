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

  const { getFormFields, getFormFields2, uploadFont, deleteFont, getFont } = handlers;

  return {
    ...integration,
    form: getForm({
      form: formIntegration,
      formHandler: getFormFields,
      formHandler2: getFormFields2,
      uid,
    }),
    fonts: getFonts({
      fonts: fontsIntegration,
      uploadHandler: uploadFont,
      deleteHandler: deleteFont,
      getFontsHandler: getFont,
      uid,
    }),
  };
};
