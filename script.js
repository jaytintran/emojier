const emojis = ["💻", "🥊", "🚀"];
const emojiContainer = document.getElementById("emojiContainer");
const emojiInput = document.getElementById("emoji-input");

const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

const createEmoji = (el) => {
  let emojiSpan = document.createElement("span");
  emojiSpan.classList = "emoji-icon";
  emojiSpan.textContent = el;
  emojiContainer.append(emojiSpan);
};

// Get the data from local stores
const emojisFromLocal = JSON.parse(localStorage.getItem("emojis"));

const render = (arr) => {
  emojiContainer.innerHTML = "";
  emojiInput.value = "";
  arr.map((el) => {
    createEmoji(el);
  });
};

// Check if leadsFromLocalStorage is truthy (not empty)
if (emojisFromLocal) {
  console.log(emojisFromLocal);
  myEmojis = emojisFromLocal;
  render(myEmojis);
}

pushBtn.addEventListener("click", () => {
  if (emojiInput.value) {
    emojis.push(emojiInput.value);
  }
  render(emojis);

  // Store the list into local storage for user's ongoing access
  localStorage.setItem("emojis", JSON.stringify(emojis));
});

unshiftBtn.addEventListener("click", () => {
  if (emojiInput.value) {
    emojis.unshift(emojiInput.value);
  }
  render(emojis);

  // Store the list into local storage for user's ongoing access
  localStorage.setItem("emojis", JSON.stringify(emojis));
});

popBtn.addEventListener("click", () => {
  emojis.pop();
  render(emojis);

  // Store the list into local storage for user's ongoing access
  localStorage.setItem("emojis", JSON.stringify(emojis));
});

shiftBtn.addEventListener("click", () => {
  emojis.shift();
  render(emojis);

  // Store the list into local storage for user's ongoing access
  localStorage.setItem("emojis", JSON.stringify(emojis));
});
