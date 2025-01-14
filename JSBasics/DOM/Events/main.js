document.body.onclick = (event) => {
  console.log(event, "event");

  if (event.ctrlKey) {
    console.log("Click with control");
    return;
  }

  if (event.shiftKey) {
    console.log("Click with shift");
    return;
  }

  console.log("Default Click at", event.clientX, event.clientY);
  console.log({ target: event.target }, "target");
};

// Завдання:

// Дописати функцію render яка має вивести даний контент в HTML на базі elementsToRender

// Очікуваний результат

{
  /* <h1 class="heading" id="id-1">Some content</h1>
      <div>
          <h2 class="heading" id="id-2">Some content 2</h2>
      </div> 
    */
}

const elementsToRender = [
  {
    tag: "h1",
    content: "Some content",
    class: "heading",
    id: "id-1",
  },
  {
    tag: "div",
    content: null,
    class: "",
    id: "",
    children: [
      {
        tag: "h2",
        content: "Some content 2",
        class: "heading",
        id: "id-2",
        onclick: () => alert("click2"),
      },
      {
        tag: "h5",
        content: "Some content 3",
        class: "heading",
        id: "id-2",
        onclick: () => alert("click3"),
      },
    ],
  },
];

function render(elementsToRender) {
  const createElement = (elementData, parent = document.body) => {
    const {
      tag,
      content,
      class: elementClass,
      id,
      children,
      onclick,
    } = elementData;

    const element = document.createElement(tag);

    element.className = elementClass || "";
    element.id = id || "";

    if (content && !children) {
      element.textContent = content;
    }

    if (onclick) {
      element.onclick = onclick;
    }

    parent.appendChild(element);

    return element;
  };

  elementsToRender.forEach((elementData) => {
    const { children } = elementData;

    const parent = createElement(elementData);

    if (Array.isArray(children)) {
      children.forEach((childElementData) =>
        createElement(childElementData, parent)
      );
    }
  });
}

render(elementsToRender);

// window.addEventListener("mousemove", (event) => {
//   console.log(event.pageX, event.pageY);
//   document.body.style.background = `rgb(${event.pageY}, ${event.pageX}, ${
//     event.pageX - event.pageY
//   })`;
// });

function render2(elementsToRender) {
  function createElement(element) {
    const el = document.createElement(element.tag);
    if (element.class) {
      el.className = element.class;
    }
    if (element.id) {
      el.id = element.id;
    }
    if (element.content) {
      el.textContent = element.content;
    }
    if (element.onclik) {
      el.onclick = element.onclik;
    }
    if (element.children && Array.isArray(element.children)) {
      element.children.forEach((child) => {
        el.appendChild(createElement(child));
      });
    }

    return el;
  }
  const container = document.createDocumentFragment();

  elementsToRender.forEach((element) => {
    container.appendChild(createElement(element));
  });
  document.body.appendChild(container);
}

render2(elementsToRender);
