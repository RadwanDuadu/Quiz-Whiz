const geographyQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile"
  },
  {
    question: "Mount Everest lies in which mountain range?",
    options: ["Andes", "Himalayas", "Alps", "Rockies"],
    answer: "Himalayas"
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arctic", "Gobi", "Kalahari"],
    answer: "Sahara"
  },
  {
    question: "Which country has the most natural lakes?",
    options: ["Russia", "USA", "Canada", "India"],
    answer: "Canada"
  },
  {
    question: "Which continent is the driest?",
    options: ["Africa", "Australia", "Asia", "Europe"],
    answer: "Australia"
  },
  {
    question: "What is the capital city of Brazil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    answer: "Brasília"
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Southern", "Pacific"],
    answer: "Pacific"
  },
  {
    question: "The Great Barrier Reef is located off the coast of which country?",
    options: ["USA", "Australia", "Mexico", "South Africa"],
    answer: "Australia"
  },
  {
    question: "Which is the smallest country in the world?",
    options: ["Monaco", "Malta", "San Marino", "Vatican City"],
    answer: "Vatican City"
  },
  {
    question: "Which US state has the most volcanoes?",
    options: ["California", "Alaska", "Hawaii", "Washington"],
    answer: "Alaska"
  },
  {
    question: "Which African country has the highest population?",
    options: ["South Africa", "Egypt", "Ethiopia", "Nigeria"],
    answer: "Nigeria"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
    answer: "Tokyo"
  },
  {
    question: "Which country does the Rhine River flow through?",
    options: ["France", "Italy", "Germany", "Spain"],
    answer: "Germany"
  },
  {
    question: "What is the largest island in the world?",
    options: ["Greenland", "Australia", "Borneo", "New Guinea"],
    answer: "Greenland"
  },
  {
    question: "Which mountain is the highest in North America?",
    options: ["Mount Logan", "Denali", "Mount Elbert", "Mount St. Elias"],
    answer: "Denali"
  },
  {
    question: "Which country has the most time zones?",
    options: ["USA", "Russia", "France", "China"],
    answer: "France"
  },
  {
    question: "What is the name of the sea between Saudi Arabia and Africa?",
    options: ["Arabian Sea", "Mediterranean Sea", "Red Sea", "Caspian Sea"],
    answer: "Red Sea"
  },
  {
    question: "Which city is known as the City of Canals?",
    options: ["Amsterdam", "Bangkok", "Venice", "Copenhagen"],
    answer: "Venice"
  },
  {
    question: "Which continent has the most countries?",
    options: ["Asia", "Europe", "Africa", "South America"],
    answer: "Africa"
  }
];

const historyQuestions = [
  {
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
    answer: "George Washington"
  },
  {
    question: "In which year did World War II end?",
    options: ["1940", "1945", "1939", "1950"],
    answer: "1945"
  },
  {
    question: "Which ancient civilization built the pyramids?",
    options: ["Romans", "Greeks", "Egyptians", "Babylonians"],
    answer: "Egyptians"
  },
  {
    question: "Who discovered America in 1492?",
    options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Amerigo Vespucci"],
    answer: "Christopher Columbus"
  },
  {
    question: "Which empire was ruled by Julius Caesar?",
    options: ["Byzantine Empire", "Ottoman Empire", "Roman Empire", "Persian Empire"],
    answer: "Roman Empire"
  },
  {
    question: "What wall divided East and West Berlin during the Cold War?",
    options: ["Iron Wall", "Berlin Wall", "Great Wall", "Partition Wall"],
    answer: "Berlin Wall"
  },
  {
    question: "Who was the British Prime Minister during World War II?",
    options: ["Winston Churchill", "Margaret Thatcher", "Neville Chamberlain", "Tony Blair"],
    answer: "Winston Churchill"
  },
  {
    question: "What was the name of the ship on which the Pilgrims traveled to America?",
    options: ["Mayflower", "Santa Maria", "Endeavour", "Beagle"],
    answer: "Mayflower"
  },
  {
    question: "Which war was fought between the North and South regions in the United States?",
    options: ["Revolutionary War", "Civil War", "World War I", "War of 1812"],
    answer: "Civil War"
  },
  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    options: ["Theresa May", "Elizabeth II", "Margaret Thatcher", "Angela Merkel"],
    answer: "Margaret Thatcher"
  },
  {
    question: "What year did the Soviet Union collapse?",
    options: ["1991", "1989", "1995", "1985"],
    answer: "1991"
  },
  {
    question: "Which famous battle took place in 1066?",
    options: ["Battle of Hastings", "Battle of Waterloo", "Battle of Agincourt", "Battle of Trafalgar"],
    answer: "Battle of Hastings"
  },
  {
    question: "Who was known as the Maid of Orléans?",
    options: ["Marie Antoinette", "Joan of Arc", "Catherine de' Medici", "Eleanor of Aquitaine"],
    answer: "Joan of Arc"
  },
  {
    question: "Which U.S. president abolished slavery?",
    options: ["George Washington", "Andrew Jackson", "Abraham Lincoln", "Theodore Roosevelt"],
    answer: "Abraham Lincoln"
  },
  {
    question: "The Renaissance began in which country?",
    options: ["France", "Italy", "Germany", "Spain"],
    answer: "Italy"
  },
  {
    question: "Who was the longest-reigning British monarch before Queen Elizabeth II?",
    options: ["King George III", "Queen Victoria", "King Henry VIII", "Queen Mary"],
    answer: "Queen Victoria"
  },
  {
    question: "Which civilization invented the wheel?",
    options: ["Egyptians", "Romans", "Sumerians", "Greeks"],
    answer: "Sumerians"
  },
  {
    question: "Which city was destroyed by a volcanic eruption in 79 AD?",
    options: ["Athens", "Pompeii", "Rome", "Carthage"],
    answer: "Pompeii"
  },
  {
    question: "What was the name of the U.S. policy to prevent the spread of communism during the Cold War?",
    options: ["Isolationism", "Containment", "Domino Theory", "Marshall Plan"],
    answer: "Containment"
  },
  {
    question: "Who was the leader of the Soviet Union during World War II?",
    options: ["Nikita Khrushchev", "Vladimir Lenin", "Joseph Stalin", "Leon Trotsky"],
    answer: "Joseph Stalin"
  }
];
