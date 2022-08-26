const skillsList = document.querySelector("#skills ul");
const range = (n = 0) => new Array(n).fill(0).map((n, i) => i + 1);

const skills = [
  {
    image: "assets/skills-images/adobe-photoshop.jpg",
    title: "Adobe Photoshop",
    level: 4,
  },
  {
    image: "assets/skills-images/adobe-illustrator.jpg",
    title: "Adobe Illustrator",
    level: 3,
  },
  {
    image: "assets/skills-images/adobe-after-effect.jpg",
    title: "Adobe After Effects",
    level: 4,
  },
  {
    image: "assets/skills-images/figma.jpg",
    title: "Firgma",
    level: 4,
  },
];

skillsList.append(
  ...skills.map((skill) => {
    const li = document.createElement("li");

    const logo = document.createElement("img");
    const title = document.createElement("h3");
    const level = document.createElement("div");
    const star = document.querySelector("#graphics-star");

    logo.src = skill.image;

    title.innerText = skill.title;

    level.append(
      ...range(5).map((n) => {
        const clone = star.cloneNode(true);

        clone.removeAttribute("hidden");
        clone.setAttribute("width", 22);

        if (n > skill.level) {
          clone.setAttribute("fill", "none");
          clone.setAttribute("stroke", "black");
        }

        return clone;
      })
    );

    li.append(logo, title, level);

    return li;
  })
);
