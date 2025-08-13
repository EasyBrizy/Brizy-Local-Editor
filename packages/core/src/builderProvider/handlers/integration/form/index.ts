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
  formHandler2: FormFieldsHandler;
  uid: string;
}

export const getForm = (data: Form) => {
  const { form: _form, formHandler, formHandler2, uid } = data;
  const integrationFormFields = (_form.fields ?? {}) as Record<string, unknown>;
  const integrationFormFields2 = (_form.fields2 ?? {}) as Record<string, unknown>;
  let form = _form;

  if ("enable" in integrationFormFields && integrationFormFields.enable) {
    form = {
      ...form,
      fields: {
        label: integrationFormFields.label,
        handler: addFormFieldHandler(formHandler, uid),
      },
    };
  }

  if ("enable" in integrationFormFields2 && integrationFormFields2.enable) {
    form = {
      ...form,
      fields2: {
        label: integrationFormFields2.label,
        handler: addFormFieldHandler(formHandler2, uid),
      },
    };
  }

  return form;
};
