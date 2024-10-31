import { Handler } from "@/builderProvider/types/type";
import { FormFieldsOption } from "@/types/form";

export type FormFieldsHandler = (uid: string) => Promise<FormFieldsOption>;

const addFormFieldHandler = (formHandler: FormFieldsHandler, uid: string) => {
  const handler: Handler<FormFieldsOption, string, undefined> = async (res, rej) => {
    try {
      const data = await formHandler(uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to fetch form fields";
      rej(message);
    }
  };
  return handler;
};

interface Form {
  form: Record<string, unknown>;
  formHandler: FormFieldsHandler;
  uid: string;
}

export const getForm = (data: Form) => {
  const { form, formHandler, uid } = data;
  const integrationFormFields = (form.fields ?? {}) as Record<string, unknown>;

  if ("enable" in integrationFormFields && integrationFormFields.enable) {
    return {
      ...form,
      fields: {
        label: integrationFormFields.label,
        handler: addFormFieldHandler(formHandler, uid),
      },
    };
  }

  return form;
};
