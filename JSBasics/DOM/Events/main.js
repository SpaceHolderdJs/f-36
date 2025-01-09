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
  { tag: "h1", content: "Some content", class: "heading", id: "id-1" },
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
        onclik: () => alert("click"),
      },
    ],
  },
];

function render(elementsToRender) {
  // your code here
}

window.addEventListener("mousemove", (event) => {
  console.log(event.pageX, event.pageY);
  document.body.style.background = `rgb(${event.pageY}, ${event.pageX}, ${
    event.pageX - event.pageY
  })`;
});
