const loremText = `Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna 
            aliqua. Diam in arcu cursus euismod 
            quis viverra nibh. Nunc aliquet bibendum
            enim facilisis gravida neque convallis 
            a cras. Sagittis purus sit amet volutpat
            Consequat mauris. Duis ultricies lacus 
            sed turpis tincidunt id. Consequat interdum
            varius sit amet mattis vulputate. Enim sed
            faucibus turpis in eu. Ridiculus mus mauris
            vitae ultricies leo integer malesuada nunc vel.
            Nulla pharetra diam sit amet nisl suscipit.
            Lobortis elementum nibh tellus molestie nunc
            non blandit massa enim. Dis parturient montes
            nascetur ridiculus mus. Justo nec ultrices dui
            sapien eget. Enim tortor at auctor urna nunc.
            Dictumst quisque sagittis purus sit amet volutpat
            consequat mauris nunc.`;

let scrollContainer;
let sectionCount = 0;

function init() {
  scrollContainer = document.getElementById("infinite-text");
  scrollCheck();
  window.addEventListener("scroll", scrollCheck);
}

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

function addText() {
  const scrollHeader = document.createElement("h2");
  sectionCount++;
  scrollHeader.innerText = `Section ${sectionCount}`;
  scrollContainer.appendChild(scrollHeader);
  for (let i = 0; i < randRange(1, 10); i++) {
    const scrollText = document.createElement("p");
    scrollText.textContent = loremText.repeat(randRange(1, 3));
    scrollContainer.appendChild(scrollText);
    if (randRange(1, 5) == 1) {
      const list = document.createElement("ul");
      for (let i = 0; i < randRange(1, 10); i++) {
        const listItem = document.createElement("li");
        listItem.textContent =
          getRandomItem(loremText.split(".").filter((item) => item !== "")) +
          ".";
        list.appendChild(listItem);
      }
      scrollContainer.appendChild(list);
    }

    const textBreak = document.createElement("br");
    scrollContainer.appendChild(textBreak);
  }
  if (randRange(1, 5) == 1) {
    const catImg = document.createElement("img");
    catImg.src = `imgs/cat${randRange(1, 3)}.jpeg`;
    catImg.alt = "A cute cat!";
    catImg.width = 500;
    scrollContainer.appendChild(catImg);
  }
}

function scrollCheck() {
  while (true) {
    const scrollPosition = window.scrollY + window.innerHeight;
    const totalHeight = document.body.scrollHeight;
    const scrollThreshold = document.body.scrollHeight / 4;
    if (scrollPosition >= totalHeight - scrollThreshold) {
      addText();
    } else {
      break;
    }
  }
}

document.addEventListener("DOMContentLoaded", init);
