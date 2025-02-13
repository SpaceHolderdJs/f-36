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

    if (this.options.class) {
      this.options.class.split(" ").forEach((cls) => form.classList.add(cls));
    }

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
  }

  init(fieldData) {
    const {
      type,
      name,
      id,
      element,
      class: className,
      placeholder = "",
    } = fieldData;

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

        if (placeholder) {
          textarea.placeholder = placeholder;
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

        if (placeholder) {
          select.placeholder = placeholder;
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

        if (placeholder) {
          input.placeholder = placeholder;
        }

        const inputsTypesWithLabels = ["checkbox", "radio", "file", "color"];

        if (inputsTypesWithLabels.includes(type)) {
          const label = document.createElement("label");
          label.appendChild(input);
          label.innerHTML += ` ${placeholder || name}`;

          return { label, input };
        }

        return input;
      }
    }
  }
}

// [Note]: FormData class (for the data of the form)
class FormCustomData {
  constructor(data, validators = null) {
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

  validate() {}
}
