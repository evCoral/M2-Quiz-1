const authors = [
  {
    author: "Senna",
    quotes: [
      "The mist knows my name. It howled it for years, but it was only asking for help.",
      "I'm not running from them anymore. They're running from me.",
      "When there's no more light I'll carry their darkness.",
      "I could free you, but those you've made suffer come first.",
      "I forgive. No one else has to.",
    ],
  },
  {
    author: "Albert Einstein",
    quotes: [
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      "If you can't explain it to a six year old, you don't understand it yourself.",
      "Anyone who has never made a mistake has never tried anything new.",
      "A clever person solves a problem. A wise person avoids it.",
      "I have no special talents. I am only passionately curious.",
    ],
  },
  {
    author: "Confucius",
    quotes: [
      "Everything has beauty, but not everyone sees it.",
      "They must often change who would be constant in happiness or wisdom.",
      "What the superior man seeks is in himself; what the small man seeks is in others.",
      "When it is obvious that the goals cannot be reached, don't adjust the goals; adjust the action steps.",
      "Do not impose on others what you yourself do not desire.",
    ],
  },
  {
    author: "Jose Rizal",
    quotes: [
      "One only dies once, and if one does not die well, a good opportunity is lost and will not present itself again.",
      "I have to believe much in God because I have lost my faith in man.",
      "Cowardice rightly understood begins with selfishness and ends with shame.",
      "Quite the contrary. Even if my country does seem to have forgotten me, I have always thought about it.",
      "Walang mang-aalipin kung walang paaalipin.",
    ],
  },
  {
    author: "H.P Lovecraft",
    quotes: [
      "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
      "From even the greatest of horrors, irony is seldom absent.",
      "Ocean is more ancient than the mountains, and freighted with the memories and the dreams of Time.",
      "Adulthood is Hell",
      "I do not think that any realism is beautiful.",
    ],
  },
];

const generateBtn = () => {
  let final = "";
  authors.forEach((object) => {
    const template = `<button class="btns" onclick="btnClick('${object.author}')">${object.author}</button>`;
    final += template;
  });
  document.getElementById("btn-container").innerHTML = final;
};

const btnClick = (name) => {
  authors.find(({ author, quotes }) => {
    if (name === author) {
      let randomqoute = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("output").innerHTML = randomqoute;
    }
  });
};

generateBtn();
