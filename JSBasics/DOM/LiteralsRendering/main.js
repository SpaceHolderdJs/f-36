const users = [
  {
    name: "Sofia Chen",
    email: "sofia.chen@example.com",
    image: "/api/placeholder/150/150",
    bio: "Senior software engineer with 8 years of experience in cloud architecture. Passionate about distributed systems and mentoring junior developers. Amateur photographer in spare time.",
    salary: 125000,
  },
  {
    name: "Marcus Williams",
    email: "m.williams@example.com",
    image: "/api/placeholder/150/150",
    bio: "Product manager specializing in fintech solutions. Previously founded two startups. Loves rock climbing and teaching financial literacy to underprivileged youth.",
    salary: 135000,
  },
  {
    name: "Aisha Patel",
    email: "aisha.p@example.com",
    image: "/api/placeholder/150/150",
    bio: "Data scientist with PhD in Machine Learning. Published researcher in NLP. Advocates for ethical AI development and runs a popular tech blog.",
    salary: 145000,
  },
  {
    name: "Lucas Rodriguez",
    email: "l.rodriguez@example.com",
    image: "/api/placeholder/150/150",
    bio: "UX designer focusing on accessibility and inclusive design. Created award-winning interfaces for healthcare applications. Teaches design workshops on weekends.",
    salary: 95000,
  },
  {
    name: "Emma Thompson",
    email: "emma.t@example.com",
    image: "/api/placeholder/150/150",
    bio: "Marketing director with expertise in B2B SaaS. Led successful campaigns for Fortune 500 companies. Passionate about sustainable business practices.",
    salary: 130000,
  },
  {
    name: "Kai Nakamura",
    email: "kai.n@example.com",
    image: "/api/placeholder/150/150",
    bio: "DevOps engineer specializing in kubernetes and microservices. Contributes to open-source projects. Amateur chef who hosts monthly coding dinners.",
    salary: 140000,
  },
  {
    name: "Olivia Bennett",
    email: "o.bennett@example.com",
    image: "/api/placeholder/150/150",
    bio: "HR manager focused on DEI initiatives and culture building. Implemented successful remote work policies. Certified meditation instructor.",
    salary: 98000,
  },
  {
    name: "Ahmed Hassan",
    email: "a.hassan@example.com",
    image: "/api/placeholder/150/150",
    bio: "Sales director specializing in enterprise solutions. Consistently exceeded quarterly targets. Volunteers teaching coding to refugees.",
    salary: 155000,
  },
  {
    name: "Nina Kovač",
    email: "nina.k@example.com",
    image: "/api/placeholder/150/150",
    bio: "Backend engineer expert in scalable systems. Previously worked at major tech companies. Competitive chess player and math olympiad coach.",
    salary: 128000,
  },
  {
    name: "James Kim",
    email: "j.kim@example.com",
    image: "/api/placeholder/150/150",
    bio: "Project manager with PMP certification. Specialized in agile methodologies. Hosts a podcast about tech project management and leadership.",
    salary: 115000,
  },
];

class Componets {
  static userCard = (user) => {
    const { name, email, image, bio, salary } = user;

    const render = (parent, variant = "default") => {
      switch (variant) {
        case "with_image": {
          parent.innerHTML += `
          <div class="card m-3" style="width: 18rem;">
            <img
              style="max-height: 300px;"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LJEvl8LlkqsUNZj4APMG28PMvqDbqqB-BA&s"
              class="card-img-top"
              alt="${name}"
            />
            <div class="card-body">
              <h3 class="card-title">${name}</h3>
              <p class="card-text">${bio}</p>
            </div>
          </div>
          `;

          break;
        }

        case "with_button": {
          const card = document.createElement("div");
          card.className = "card m-3";
          parent.appendChild(card);

          card.innerHTML = `
            <h5 class="card-header">${name}</h5>
            <div class="card-body">
              <h5 class="card-title">${email}</h5>
              <p class="card-text">${bio}</p>
            </div>
          `;

          const button = document.createElement("button");
          button.textContent = "Add to friend";
          button.className = "btn btn-primary";
          button.onclick = () => {
            alert(name);
          };

          card.appendChild(button);

          break;
        }

        case "default":
        default: {
          parent.innerHTML += `<div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${email}</h6>
              <p class="card-text">${bio}</p>
              <a href="#" class="card-link">User link</a>
            </div>
          </div>`;
          break;
        }
      }
    };

    return { render };
  };

  static slider = (slides, { currentSlide = 0, width = 700 }) => {
    let slide = currentSlide;

    const render = (parent) => {
      const sliderElement = document.createElement("div");
      sliderElement.className = "slider";
      sliderElement.style.width = `${width}px`;

      parent.appendChild(sliderElement);

      const slidesContainer = document.createElement("div");
      slidesContainer.className = "slides-wrapper";

      sliderElement.appendChild(slidesContainer);

      if (Array.isArray(slides)) {
        slides.forEach((html, index) => {
          const slide = document.createElement("div");
          slide.className = "slide";
          slide.id = `slide-${index}`;
          slide.style.width = `${width}px`;

          slide.innerHTML = html;

          slidesContainer.appendChild(slide);
        });
      }

      const nextButton = document.createElement("button");
      nextButton.textContent = ">";

      nextButton.className = "next-button";

      nextButton.onclick = () => {
        slide = slide + 1 > slides.length - 1 ? 0 : slide + 1;
        console.log(slide, slide * width);
        slidesContainer.style.transform = `translateX(-${slide * width}px)`;
      };
      sliderElement.appendChild(nextButton);

      const prevButton = document.createElement("button");
      prevButton.textContent = "<";

      prevButton.className = "prev-button";

      prevButton.onclick = () => {
        slide = slide - 1 < 0 ? slides.length - 1 : slide - 1;
        console.log(slide, slide * width);
        slidesContainer.style.transform = `translateX(-${slide * width}px)`;
      };
      sliderElement.appendChild(prevButton);
    };

    return { render };
  };
}

const slides = [
  `<div class="slider-content">1</div>`,
  `<div class="slider-content">2</div>`,
  `<div class="slider-content">3</div>`,
];

const usersSlides = users.map((user) => {
  return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${user.email}</h6>
        <p class="card-text">${user.bio}</p>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  `;
});

Componets.slider(usersSlides, { currentSlide: 0, width: 800 }).render(
  document.body
);

// Componets.userCard(users[0]).render(document.body);
// Componets.userCard(users[1]).render(document.body, "with_image");

// users.forEach((user) => {
//   Componets.userCard(user).render(document.body, "with_button");
// });

// Завдання:
// 1. Додати індикацію поточного слайду (у вигляді крапок знизу)

// 2. Використовуючи bootstrap реалізуйте вивід користувачів за допомогою BS компонентів (не карток)
// у слайдер в якості слайдів)

// 3. Стилізуйте слайдер під себе
