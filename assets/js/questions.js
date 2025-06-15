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

const physicsQuestions = [
  {
    question: "What is the unit of force?",
    options: ["Watt", "Newton", "Joule", "Pascal"],
    answer: "Newton"
  },
  {
    question: "Who developed the laws of motion?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    answer: "Isaac Newton"
  },
  {
    question: "What does E=mc² represent?",
    options: ["Potential energy", "Kinetic energy", "Mass-energy equivalence", "Work-energy theorem"],
    answer: "Mass-energy equivalence"
  },
  {
    question: "Which particle has a negative charge?",
    options: ["Proton", "Neutron", "Electron", "Photon"],
    answer: "Electron"
  },
  {
    question: "What is the speed of light in vacuum?",
    options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10⁵ km/s", "3 × 10⁷ m/s"],
    answer: "3 × 10⁸ m/s"
  },
  {
    question: "What does a volt measure?",
    options: ["Electric resistance", "Electric potential difference", "Current", "Power"],
    answer: "Electric potential difference"
  },
  {
    question: "Which law explains why we need seatbelts?",
    options: ["Newton’s First Law", "Hooke’s Law", "Ohm’s Law", "Boyle’s Law"],
    answer: "Newton’s First Law"
  },
  {
    question: "What is the unit of electrical resistance?",
    options: ["Watt", "Volt", "Ohm", "Ampere"],
    answer: "Ohm"
  },
  {
    question: "What does a convex lens do to light rays?",
    options: ["Scatters them", "Converges them", "Bends them backward", "Stops them"],
    answer: "Converges them"
  },
  {
    question: "Which phenomenon explains the blue color of the sky?",
    options: ["Refraction", "Reflection", "Scattering", "Diffraction"],
    answer: "Scattering"
  },
  {
    question: "What is the acceleration due to gravity on Earth?",
    options: ["8.9 m/s²", "9.8 m/s²", "10.2 m/s²", "9.2 m/s²"],
    answer: "9.8 m/s²"
  },
  {
    question: "Which type of wave is a sound wave?",
    options: ["Transverse", "Longitudinal", "Electromagnetic", "Mechanical"],
    answer: "Longitudinal"
  },
  {
    question: "Which law relates current, voltage, and resistance?",
    options: ["Faraday’s Law", "Coulomb’s Law", "Ohm’s Law", "Lenz’s Law"],
    answer: "Ohm’s Law"
  },
  {
    question: "What is the SI unit of power?",
    options: ["Joule", "Newton", "Watt", "Ampere"],
    answer: "Watt"
  },
  {
    question: "Which scientist is known for the photoelectric effect?",
    options: ["Einstein", "Maxwell", "Planck", "Fermi"],
    answer: "Einstein"
  },
  {
    question: "What is the force that opposes motion between two surfaces?",
    options: ["Gravity", "Friction", "Tension", "Normal force"],
    answer: "Friction"
  },
  {
    question: "What kind of lens is used in a magnifying glass?",
    options: ["Concave", "Cylindrical", "Convex", "Plano-concave"],
    answer: "Convex"
  },
  {
    question: "Which principle explains why airplanes fly?",
    options: ["Bernoulli’s Principle", "Pascal’s Principle", "Archimedes' Principle", "Heisenberg Uncertainty"],
    answer: "Bernoulli’s Principle"
  },
  {
    question: "Which subatomic particle is responsible for electric current?",
    options: ["Proton", "Electron", "Neutron", "Quark"],
    answer: "Electron"
  },
  {
    question: "Which of these is a vector quantity?",
    options: ["Speed", "Distance", "Velocity", "Mass"],
    answer: "Velocity"
  }
];

const biologyQuestions = [
  {
    question: "What is the basic unit of life?",
    options: ["Atom", "Tissue", "Organ", "Cell"],
    answer: "Cell"
  },
  {
    question: "Which organelle is known as the powerhouse of the cell?",
    options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
    answer: "Mitochondria"
  },
  {
    question: "What molecule carries genetic information?",
    options: ["RNA", "DNA", "ATP", "Protein"],
    answer: "DNA"
  },
  {
    question: "Which part of the plant carries out photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: "Leaf"
  },
  {
    question: "Which gas do plants absorb for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Which blood cells help fight infection?",
    options: ["Red blood cells", "Platelets", "White blood cells", "Plasma"],
    answer: "White blood cells"
  },
  {
    question: "What type of organism is E. coli?",
    options: ["Virus", "Fungus", "Bacterium", "Protist"],
    answer: "Bacterium"
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Lungs"],
    answer: "Skin"
  },
  {
    question: "Which kingdom do mushrooms belong to?",
    options: ["Animalia", "Plantae", "Fungi", "Protista"],
    answer: "Fungi"
  },
  {
    question: "How many chromosomes are in a human body cell?",
    options: ["23", "46", "44", "48"],
    answer: "46"
  },
  {
    question: "What is the process by which cells divide to form two identical cells?",
    options: ["Meiosis", "Mitosis", "Fusion", "Transcription"],
    answer: "Mitosis"
  },
  {
    question: "What part of the brain controls balance?",
    options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
    answer: "Cerebellum"
  },
  {
    question: "Which nutrient is the main source of energy for the body?",
    options: ["Protein", "Vitamin", "Carbohydrate", "Mineral"],
    answer: "Carbohydrate"
  },
  {
    question: "Which organ is responsible for filtering blood?",
    options: ["Heart", "Kidney", "Liver", "Lungs"],
    answer: "Kidney"
  },
  {
    question: "What pigment gives plants their green color?",
    options: ["Melanin", "Chlorophyll", "Carotene", "Hemoglobin"],
    answer: "Chlorophyll"
  },
  {
    question: "Which system in the body controls hormones?",
    options: ["Nervous system", "Digestive system", "Endocrine system", "Respiratory system"],
    answer: "Endocrine system"
  },
  {
    question: "What type of blood vessels carry blood away from the heart?",
    options: ["Veins", "Arteries", "Capillaries", "Lymph nodes"],
    answer: "Arteries"
  },
  {
    question: "Which biomolecule is primarily responsible for building muscle?",
    options: ["Lipids", "Proteins", "Carbohydrates", "Vitamins"],
    answer: "Proteins"
  },
  {
    question: "What is the main function of red blood cells?",
    options: ["Fighting infections", "Clotting blood", "Transporting oxygen", "Digesting food"],
    answer: "Transporting oxygen"
  },
  {
    question: "Which part of the plant absorbs water and nutrients from the soil?",
    options: ["Stem", "Leaf", "Root", "Flower"],
    answer: "Root"
  }
];

const chemistryQuestions = [
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    answer: "H2O"
  },
  {
    question: "What is the pH of a neutral solution?",
    options: ["0", "7", "14", "1"],
    answer: "7"
  },
  {
    question: "Which gas is essential for combustion?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    answer: "Oxygen"
  },
  {
    question: "Which element has the chemical symbol 'Na'?",
    options: ["Nitrogen", "Sodium", "Neon", "Nickel"],
    answer: "Sodium"
  },
  {
    question: "What type of bond is formed by sharing electrons?",
    options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
    answer: "Covalent bond"
  },
  {
    question: "Which part of the atom contains protons and neutrons?",
    options: ["Electron cloud", "Shell", "Nucleus", "Orbit"],
    answer: "Nucleus"
  },
  {
    question: "What is the chemical formula for table salt?",
    options: ["KCl", "NaCl", "CaCl2", "MgSO4"],
    answer: "NaCl"
  },
  {
    question: "What is the periodic table?",
    options: ["List of chemical reactions", "Chart of elements", "Set of equations", "Group of atoms"],
    answer: "Chart of elements"
  },
  {
    question: "Which element is a noble gas?",
    options: ["Oxygen", "Chlorine", "Helium", "Hydrogen"],
    answer: "Helium"
  },
  {
    question: "Which subatomic particle has a negative charge?",
    options: ["Proton", "Electron", "Neutron", "Photon"],
    answer: "Electron"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: "Au"
  },
  {
    question: "Which acid is found in the stomach?",
    options: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
    answer: "Hydrochloric acid"
  },
  {
    question: "Which type of reaction absorbs heat?",
    options: ["Exothermic", "Endothermic", "Combustion", "Neutralization"],
    answer: "Endothermic"
  },
  {
    question: "What do we call a substance that speeds up a chemical reaction?",
    options: ["Solvent", "Reactant", "Catalyst", "Base"],
    answer: "Catalyst"
  },
  {
    question: "Which state of matter has a fixed volume but no fixed shape?",
    options: ["Solid", "Liquid", "Gas", "Plasma"],
    answer: "Liquid"
  },
  {
    question: "What is the atomic number of carbon?",
    options: ["6", "8", "12", "14"],
    answer: "6"
  },
  {
    question: "Which element is most abundant in the Earth's crust?",
    options: ["Silicon", "Oxygen", "Aluminum", "Iron"],
    answer: "Oxygen"
  },
  {
    question: "What happens in an oxidation reaction?",
    options: ["Gain of electrons", "Loss of electrons", "Formation of a base", "Loss of neutrons"],
    answer: "Loss of electrons"
  },
  {
    question: "Which scientist developed the periodic table?",
    options: ["Einstein", "Bohr", "Mendeleev", "Curie"],
    answer: "Mendeleev"
  },
  {
    question: "What is the process of turning a solid directly into a gas called?",
    options: ["Condensation", "Evaporation", "Sublimation", "Melting"],
    answer: "Sublimation"
  }
];
