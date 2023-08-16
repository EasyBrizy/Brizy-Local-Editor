import { Handler, HandlerData } from "@/builderProvider/types/type";
import { Response } from "@/types/common";
import { FormFieldsOption } from "@/types/form";

interface FormHandler extends HandlerData {
  res: Response<FormFieldsOption>;
  rej: Response<string>;
}

function handleFormFields(data: FormHandler) {
  const { uid, target, res, rej } = data;

  return function fieldsEmitter(event: MessageEvent) {
    const data = event.data;
    if (data.target !== target || data.uid !== uid) {
      return;
    }

    try {
      const action = JSON.parse(data.data);

      switch (action.type) {
        case `${target}_form_fields_res`: {
          res(action.data);
          window.removeEventListener("message", fieldsEmitter);
          break;
        }
        case `${target}_form_fields_rej`: {
          rej(action.data);
          window.removeEventListener("message", fieldsEmitter);
          break;
        }
      }
    } catch (e) {
      console.error("Invalid FormFieldsOptions JSON", e);
    }
  };
}

const addFormFieldHandler = (data: HandlerData) => {
  const { target, uid, event } = data;

  const handler: Handler<any, any, undefined> = function (res, rej) {
    const data = JSON.stringify({
      type: `${target}_form_fields`,
    });

    // @ts-expect-error: Type string has no properties in common with type WindowPostMessageOptions
    event.source?.postMessage({ target, uid, data }, event.origin);

    // Listening the AddMessage
    window.addEventListener("message", handleFormFields({ res, rej, uid, target, event }));
  };

  return handler;
};

interface Form extends HandlerData {
  form: Record<string, unknown>;
}

export const getForm = (data: Form) => {
  const { uid, target, event, form } = data;
  const integrationFormFields = (form.fields ?? {}) as Record<string, unknown>;

  if ("enable" in integrationFormFields && integrationFormFields.enable) {
    return {
      ...form,
      fields: {
        label: integrationFormFields.label,
        handler: addFormFieldHandler({ uid, target, event }),
      },
    };
  }

  return form;
};
