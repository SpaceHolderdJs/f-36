// [Note]: General class
class FormConstructor {
  constructor(name, fieldsData, options) {
    if (!name) {
      throw new Error("Name is required to create form");
    }

    if (!fieldsData || !Array.isArray(fieldsData)) {
      throw new Error("Fields data required to create a form");
    }

    this.name = name;
    this.fieldsData = fieldsData;
    this.options = options;

    this.fieldsElements = {};
    this.formData = {};

    this.init(fieldsData);
  }

  init(fieldsData) {
    const form = document.createElement("form");
    form.name = this.name;

    this.options.class.split(" ").forEach((cls) => form.classList.add(cls));

    // [Note]: Creating form fields and connecting them

    for (const field of fieldsData) {
      const formFieldInstance = new FormField(field).element;

      this.fieldsElements[field.name] = formFieldInstance.label
        ? formFieldInstance.input
        : formFieldInstance;

      form.appendChild(formFieldInstance.label || formFieldInstance);

      this.formData[field.name] = field.value || undefined;
    }

    this.formData = new FormCustomData(this.formData);

    const { onSubmit, onReset, parent, submitBtnClass, resetBtnClass } =
      this.options;

    if (onSubmit) {
      const button = document.createElement("button");
      button.textContent = "Submit";
      button.type = "submit";

      if (submitBtnClass) {
        submitBtnClass.split(" ").forEach((cls) => button.classList.add(cls));
      }

      form.appendChild(button);

      form.onsubmit = (event) => {
        // [Note]: prevents auto-submit
        event.preventDefault();

        // [Note]: update form data before we send it to you :)
        this.updateFormData();

        onSubmit(event, this.formData);
      };
    }

    if (onReset) {
      const button = document.createElement("button");
      button.textContent = "Reset";
      button.type = "reset";

      if (resetBtnClass) {
        resetBtnClass.split(" ").forEach((cls) => button.classList.add(cls));
      }

      form.appendChild(button);
      form.onreset = onReset;
    }

    parent.appendChild(form);
  }

  updateFormData() {
    for (const fieldElementName in this.fieldsElements) {
      this.formData.update(
        fieldElementName,
        this.fieldsElements[fieldElementName].value
      );
    }
  }
}

// [Note]: FormField class (for the inputs)
class FormField {
  constructor(fieldData) {
    this.fieldData = fieldData;
    this.element = this.init(fieldData);
    // [Note]: Now returns {input, label} or input
  }

  init(fieldData) {
    const { type, name, id, element, class: className } = fieldData;

    switch (element) {
      case "textarea": {
        const textarea = document.createElement("textarea");

        if (id) {
          textarea.id = id;
        }

        if (name) {
          textarea.name = name;
        }

        if (className) {
          className.split(" ").forEach((cls) => textarea.classList.add(cls));
        }

        return textarea;
      }

      case "select": {
        const select = document.createElement("select");

        if (!fieldData.options || !Array.isArray(fieldData.options)) {
          throw new Error("Select can not be created without options");
        }

        for (const optionValue of fieldData.options) {
          const option = document.createElement("option");
          option.value = optionValue;
          option.textContent = optionValue;

          select.appendChild(option);
        }

        if (id) {
          select.id = id;
        }

        if (name) {
          select.name = name;
        }

        if (className) {
          className.split(" ").forEach((cls) => select.classList.add(cls));
        }

        return select;
      }

      case "input":
      default: {
        const input = document.createElement("input");
        input.type = type;

        if (name) {
          input.name = name;
        }

        if (id) {
          input.id = id;
        }

        if (className) {
          className.split(" ").forEach((cls) => input.classList.add(cls));
        }

        return input;
      }
    }
  }
}

// [Note]: FormData class (for the data of the form)
class FormCustomData {
  constructor(data) {
    this.data = data;
  }

  retrieve(field) {
    if (!this.data.hasOwnProperty(field)) {
      throw new Error(`Field ${field} is not in this form`);
    }

    return this.data[field];
  }

  update(field, value) {
    if (!this.data.hasOwnProperty(field)) {
      throw new Error(`Field ${field} is not in this form`);
    }

    this.data[field] = value;
    return this.data[field];
  }

  reset() {
    for (const field in this.data) {
      this.data[field] = undefined;
    }
  }
}

// const form1 = new FormConstructor(
//   "Login",
//   [
//     { name: "email", type: "email", id: "email", value: "email@gmail.com" },
//     { name: "password", type: "password" },
//     {
//       element: "select",
//       type: "text",
//       name: "role",
//       id: "role",
//       options: ["Developer", "CEO", "PM"],
//     },
//     {
//       element: "textarea",
//       type: "text",
//       name: "description",
//       class: "form-textarea",
//     },
//   ],
//   {
//     onSubmit: (event, data) => {
//       console.log("Submit", event, data);
//     },
//     onReset: (event) => {
//       console.log("Reset", event);
//     },
//     submitBtnClass: "btn btn-submit",
//     resetBtnClass: "btn btn-reset",
//     parent: document.body,
//     class: "form-black",
//   }
// );

// console.log(form1);

// // Завдання:
// // 1. Додати кнопку reset до форми
// // 2. Додати класи до форми та всіх видів полей (field)

// new FormConstructor(
//   "Form 2",
//   [
//     { name: "search", type: "text", id: "search", value: "search" },
//     { name: "agree", type: "checkbox", id: "agree" },
//     { name: "file", type: "file" },
//     { name: "color", type: "color" },
//     // { name: "submit", type: "submit" },
//   ],
//   {
//     onSubmit: (event, data) => {
//       console.log("Search", data);
//     },
//     parent: document.body,
//   }
// );
