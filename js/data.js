// Question Bank and Reading Passage Data for MSI Games - Team Red vs Team Blue
// Based strictly on "Princess Diana" from ESL_STUDENTS

export const PASSAGE_DATA = {
  title: "Princess Diana",
  source: "ESL_STUDENTS #72",
  text: `Diana, Princess of Wales, became famous when she decided to marry Prince Charles. She became the most photographed person in the world. Everywhere she went, there were photographers taking pictures of her and people were very interested in her clothes, where she went on holiday and who she was with. They were also interested in the problems between her and her husband. When they divorced she remained very popular. In addition to her image as a 'star', Princess Diana used her influence to attract attention to some charities. She was very sympathetic to all people who were ill and unhappy and dedicated time to helping them and drawing public attention to their problems. She used to visit homeless people regularly and did a lot of work for the National AIDS Trust; she visited people suffering from AIDS.`,
  vocabulary: [
    { word: "photographers", def: "people who take photographs, especially professionally" },
    { word: "divorced", def: "legally ended a marriage" },
    { word: "remained", def: "stayed; continued to be" },
    { word: "image", def: "how a person is seen or thought of by others" },
    { word: "influence", def: "the power to affect people or events" },
    { word: "charities", def: "organizations that help people in need" },
    { word: "sympathetic", def: "showing understanding and care for someone's problems" },
    { word: "dedicated", def: "gave a lot of time and effort to something" },
    { word: "regularly", def: "often; at consistent times" }
  ]
};

// 12 Distinct Questions for TEAM RED
export const TEAM_RED_QUESTIONS = [
  // 1. Grammar Mistake Catching
  {
    id: "r1",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correction, and click Submit.",
    sentence: "Everywhere Diana went, there was photographers taking pictures of her.",
    mistakeWord: "was",
    correctAnswer: "were",
    explanation: "'Photographers' is plural, so the past plural verb 'were' is needed ('there were photographers')."
  },
  // 2. Grammar Mistake Catching
  {
    id: "r2",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correction, and click Submit.",
    sentence: "When they divorced, she remain very popular around the world.",
    mistakeWord: "remain",
    correctAnswer: "remained",
    explanation: "Past tense is required to match 'divorced' ('she remained very popular')."
  },
  // 3. Grammar Mistake Catching
  {
    id: "r3",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correction, and click Submit.",
    sentence: "Princess Diana use her influence to attract attention to charities.",
    mistakeWord: "use",
    correctAnswer: "used",
    explanation: "Past simple 'used' is required to describe her past action."
  },
  // 4. Grammar Mistake Catching
  {
    id: "r4",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correction, and click Submit.",
    sentence: "She dedicated time to help people who were ill and unhappy.",
    mistakeWord: "help",
    correctAnswer: "helping",
    explanation: "The expression is 'dedicated time to helping' (verb + preposition 'to' followed by gerund -ing)."
  },
  // 5. Odd One Out
  {
    id: "r5",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the word that does NOT belong with the others based on royal family figures in the text.",
    options: ["Princess", "Charles", "Prince", "Soldier"],
    correctAnswer: "Soldier",
    explanation: "'Princess', 'Charles', and 'Prince' refer to British royalty in the passage; 'Soldier' is not part of the royal family."
  },
  // 6. Odd One Out
  {
    id: "r6",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on parts of speech from the passage.",
    options: ["Sympathetic", "Popular", "Famous", "Divorce"],
    correctAnswer: "Divorce",
    explanation: "'Sympathetic', 'Popular', and 'Famous' are adjectives describing Diana; 'Divorce' is a noun/verb."
  },
  // 7. Odd One Out
  {
    id: "r7",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on Diana's humanitarian causes in the passage.",
    options: ["Homelessness", "AIDS", "Charities", "Nightclub"],
    correctAnswer: "Nightclub",
    explanation: "'Homelessness', 'AIDS', and 'Charities' are social and humanitarian causes Diana supported; 'Nightclub' is unrelated."
  },
  // 8. Odd One Out
  {
    id: "r8",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on types of adverbs.",
    options: ["Regularly", "Everywhere", "Often", "Frequently"],
    correctAnswer: "Everywhere",
    explanation: "'Everywhere' is an adverb of place, while 'regularly', 'often', and 'frequently' are adverbs of frequency."
  },
  // 9. Reading Comprehension Test
  {
    id: "r9",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "When did Diana, Princess of Wales, first become famous worldwide?",
    options: [
      "A) When she decided to marry Prince Charles",
      "B) When she started the National AIDS Trust",
      "C) After she traveled abroad on holiday",
      "D) When she won a photography competition"
    ],
    correctAnswer: "A",
    explanation: "The passage states: 'Diana, Princess of Wales, became famous when she decided to marry Prince Charles.'"
  },
  // 10. Reading Comprehension Test
  {
    id: "r10",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "What were people specifically interested in regarding Diana's life?",
    options: [
      "A) Her cooking recipes and garden design",
      "B) Her clothes, where she went on holiday, and who she was with",
      "C) Her favorite sports teams and car collection",
      "D) Her university degrees in economics"
    ],
    correctAnswer: "B",
    explanation: "The text says: 'people were very interested in her clothes, where she went on holiday and who she was with.'"
  },
  // 11. Reading Comprehension Test
  {
    id: "r11",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "What happened to Princess Diana's popularity after she and Prince Charles divorced?",
    options: [
      "A) She was completely forgotten by the public",
      "B) She moved away and stopped being in newspapers",
      "C) She remained very popular",
      "D) People stopped caring about her charity work"
    ],
    correctAnswer: "C",
    explanation: "The passage clearly states: 'When they divorced she remained very popular.'"
  },
  // 12. Reading Comprehension Test
  {
    id: "r12",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "According to the passage, Diana was very sympathetic to:",
    options: [
      "A) Only wealthy international celebrities",
      "B) Aggressive photographers and reporters",
      "C) All people who were ill and unhappy",
      "D) Government politicians and ministers"
    ],
    correctAnswer: "C",
    explanation: "The passage mentions: 'She was very sympathetic to all people who were ill and unhappy and dedicated time to helping them...'"
  }
];

// 12 Distinct Questions for TEAM BLUE (Completely Different from Team Red)
export const TEAM_BLUE_QUESTIONS = [
  // 1. Grammar Mistake Catching
  {
    id: "b1",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correction, and click Submit.",
    sentence: "Diana became the most photographed person on the world.",
    mistakeWord: "on",
    correctAnswer: "in",
    explanation: "The correct preposition is 'in the world', not 'on the world'."
  },
  // 2. Grammar Mistake Catching
  {
    id: "b2",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correction, and click Submit.",
    sentence: "People was very interested in where Diana went on holiday.",
    mistakeWord: "was",
    correctAnswer: "were",
    explanation: "'People' is plural, so it requires 'were' ('people were very interested')."
  },
  // 3. Grammar Mistake Catching
  {
    id: "b3",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correction, and click Submit.",
    sentence: "She used to visited homeless people in London regularly.",
    mistakeWord: "visited",
    correctAnswer: "visit",
    explanation: "'Used to' is followed by the base infinitive verb form ('used to visit')."
  },
  // 4. Grammar Mistake Catching
  {
    id: "b4",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correction, and click Submit.",
    sentence: "Diana helped patients who was suffering from serious illness.",
    mistakeWord: "was",
    correctAnswer: "were",
    explanation: "The subject 'patients' is plural, so the verb must be 'were suffering'."
  },
  // 5. Odd One Out
  {
    id: "b5",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the word that does NOT belong with media and photography.",
    options: ["Photographer", "Picture", "Camera", "Hospital"],
    correctAnswer: "Hospital",
    explanation: "'Photographer', 'Picture', and 'Camera' are directly related to photography; 'Hospital' relates to healthcare."
  },
  // 6. Odd One Out
  {
    id: "b6",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on emotional attitudes.",
    options: ["Sympathetic", "Caring", "Unhappy", "Indifferent"],
    correctAnswer: "Indifferent",
    explanation: "Diana was caring and sympathetic to unhappy people; 'Indifferent' means having no care or sympathy at all."
  },
  // 7. Odd One Out
  {
    id: "b7",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on personal relationships in Diana's life.",
    options: ["Marriage", "Divorce", "Husband", "Factory"],
    correctAnswer: "Factory",
    explanation: "'Marriage', 'Divorce', and 'Husband' describe Diana's marital life with Prince Charles; 'Factory' is unrelated."
  },
  // 8. Odd One Out
  {
    id: "b8",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on grammatical verb forms.",
    options: ["Decided", "Suffering", "Attracted", "Remained"],
    correctAnswer: "Suffering",
    explanation: "'Decided', 'Attracted', and 'Remained' are past simple (-ed) verbs; 'Suffering' is a present participle (-ing)."
  },
  // 9. Reading Comprehension Test
  {
    id: "b9",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "Which specific health charity organization is named in the passage?",
    options: [
      "A) The International Red Cross Hospital",
      "B) The National AIDS Trust",
      "C) The World Health Organization Board",
      "D) The Royal Children's Clinic"
    ],
    correctAnswer: "B",
    explanation: "The passage explicitly names: '...did a lot of work for the National AIDS Trust; she visited people suffering from AIDS.'"
  },
  // 10. Reading Comprehension Test
  {
    id: "b10",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "How did Diana leverage her celebrity status as a 'star'?",
    options: [
      "A) She used her influence to attract attention to charitable causes",
      "B) She started an acting career in television films",
      "C) She charged photographers money for every picture",
      "D) She completely stopped talking to the public"
    ],
    correctAnswer: "A",
    explanation: "The text says: 'In addition to her image as a \"star\", Princess Diana used her influence to attract attention to some charities.'"
  },
  // 11. Reading Comprehension Test
  {
    id: "b11",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "Which group of people in need did Diana visit regularly?",
    options: [
      "A) Homeless people",
      "B) Movie directors",
      "C) Wealthy business owners",
      "D) Foreign ambassadors"
    ],
    correctAnswer: "A",
    explanation: "The passage says: 'She used to visit homeless people regularly and did a lot of work for the National AIDS Trust.'"
  },
  // 12. Reading Comprehension Test
  {
    id: "b12",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "It is implied in the passage that Diana's relationship with Prince Charles:",
    options: [
      "A) Was completely free of any public curiosity",
      "B) Ended in a marriage failure and divorce",
      "C) Kept her completely hidden from the world",
      "D) Prevented her from ever helping charities"
    ],
    correctAnswer: "B",
    explanation: "The passage states that they experienced problems and 'When they divorced she remained very popular', indicating the marriage ended in divorce."
  }
];
