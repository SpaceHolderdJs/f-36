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

    // [Note]: Creating form fields and connecting them

    for (const field of fieldsData) {
      this.fieldsElements[field.name] = new FormField(field).element;
      form.appendChild(this.fieldsElements[field.name]);

      this.formData[field.name] = field.value || undefined;
    }

    this.formData = new FormCustomData(this.formData);

    const { onSubmit, onReset, parent } = this.options;

    if (onSubmit) {
      const button = document.createElement("button");
      button.textContent = "Submit";
      button.type = "submit";

      form.appendChild(button);

      form.onsubmit = (event) => {
        // [Note]: prevents auto-submit
        event.preventDefault();

        // [Note]: update form data before we send it to you :)
        this.updateFormData();

        onSubmit(event, this.formData);
      };
    }

    form.onreset = onReset;

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
  }

  init(fieldData) {
    const { type, name, id, element } = fieldData;

    switch (element) {
      case "textarea": {
        const textarea = document.createElement("textarea");

        if (id) {
          textarea.id = id;
        }

        if (name) {
          textarea.name = name;
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

const form1 = new FormConstructor(
  "Login",
  [
    { name: "email", type: "email", id: "email", value: "email@gmail.com" },
    { name: "password", type: "password" },
    {
      element: "select",
      type: "text",
      name: "role",
      id: "role",
      options: ["Developer", "CEO", "PM"],
    },
    { element: "textarea", type: "text", name: "description" },
  ],
  {
    onSubmit: (event, data) => {
      console.log("Submit", event, data);
    },
    onReset: () => {
      console.log("Reset");
    },
    parent: document.body,
  }
);

console.log(form1);

// Завдання:
// 1. Додати кнопку reset до форми
// 2. Додати класи до форми та всіх видів полей (field)

new FormConstructor(
  "Form 2",
  [
    { name: "search", type: "text", id: "search", value: "search" },
    { name: "agree", type: "checkbox", id: "agree" },
    { name: "file", type: "file" },
    { name: "color", type: "color" },
    // { name: "submit", type: "submit" },
  ],
  {
    onSubmit: (event, data) => {
      console.log("Search", data);
    },
    parent: document.body,
  }
);
