// Question Bank and Reading Passage Data for MSI Games - Team Red vs Team Blue
// Based on "Crime and Society" (Why Does Crime Happen?)

export const PASSAGE_DATA = {
  title: "Crime and Society",
  subtitle: "Why Does Crime Happen?",
  source: "ESL Reading · Crime and Society",
  text: `Crime is a major social issue that affects individuals, families, and communities around the world. People commit crimes for different reasons, including poverty, unemployment, lack of education, peer pressure, and family problems. However, not all people who experience poverty or difficult circumstances become criminals.

Some crimes, such as theft, robbery, fraud, and cybercrime, can have serious consequences for victims. Crime also creates fear in communities and can reduce people's trust in others. For example, people may feel unsafe walking alone at night or leaving their belongings in public places.

Education, employment opportunities, and family support can play an important role in preventing crime. Schools can teach young people about responsibility, respect, and the consequences of illegal behavior. Governments can also reduce crime by creating jobs, improving social services, and ensuring fair laws.

Although punishment is important, prevention is equally important. Helping people make better choices and providing opportunities for a better life may reduce crime in the long term.`,
  vocabulary: [
    { word: "Crime", def: "an illegal activity" },
    { word: "Victim", def: "a person harmed by a crime" },
    { word: "Peer pressure", def: "influence from people of the same age or social group" },
    { word: "Unemployment", def: "not having a job" },
    { word: "Consequences", def: "results of an action" },
    { word: "Prevention", def: "stopping something from happening" },
    { word: "Responsibility", def: "being accountable for one's actions" },
    { word: "Illegal behavior", def: "actions against the law" }
  ],
  grammarFocus: [
    { rule: "Present Simple (Subject-Verb Agreement)", example: "Crime affects communities. / Education helps prevent crime." },
    { rule: "Modal Verbs (Modal + Base Form)", example: "Governments should create more jobs. / Schools can teach responsibility." }
  ]
};

// 12 Distinct Questions for TEAM RED
export const TEAM_RED_QUESTIONS = [
  // 1. Grammar Mistake Catching (Present Simple)
  {
    id: "r1",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correct form, and click Submit.",
    sentence: "Crime is a major social issue that affect individuals and communities.",
    mistakeWord: "affect",
    correctAnswer: "affects",
    explanation: "In Present Simple, the singular relative subject ('issue') requires 'affects' with an -s."
  },
  // 2. Grammar Mistake Catching (Modal + Base Verb)
  {
    id: "r2",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correct form, and click Submit.",
    sentence: "Schools can teaches young people about responsibility and respect.",
    mistakeWord: "teaches",
    correctAnswer: "teach",
    explanation: "After modal verbs like 'can', use the base form of the verb ('can teach')."
  },
  // 3. Grammar Mistake Catching (Modal + Base Verb)
  {
    id: "r3",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correct form, and click Submit.",
    sentence: "Governments should creating more job opportunities for young people.",
    mistakeWord: "creating",
    correctAnswer: "create",
    explanation: "The modal verb 'should' must be followed by the base form ('should create'), not the -ing form."
  },
  // 4. Grammar Mistake Catching (Present Simple / Plural Subject)
  {
    id: "r4",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correct form, and click Submit.",
    sentence: "Education and family support helps reduce illegal behavior.",
    mistakeWord: "helps",
    correctAnswer: "help",
    explanation: "The compound subject 'Education and family support' is plural, so it requires 'help' without -s."
  },
  // 5. Odd One Out
  {
    id: "r5",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the word that is NOT a specific type of crime mentioned in the passage.",
    options: ["Theft", "Robbery", "Cybercrime", "Unemployment"],
    correctAnswer: "Unemployment",
    explanation: "Theft, Robbery, and Cybercrime are specific crimes; Unemployment is a social cause/condition."
  },
  // 6. Odd One Out
  {
    id: "r6",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on parts of speech from the vocabulary list.",
    options: ["Responsibility", "Prevention", "Consequences", "Illegal"],
    correctAnswer: "Illegal",
    explanation: "'Responsibility', 'Prevention', and 'Consequences' are nouns; 'Illegal' is an adjective."
  },
  // 7. Odd One Out
  {
    id: "r7",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on crime prevention vs causes.",
    options: ["Education", "Creating jobs", "Family support", "Peer pressure"],
    correctAnswer: "Peer pressure",
    explanation: "Education, Creating jobs, and Family support prevent crime; Peer pressure is a reason why crime happens."
  },
  // 8. Odd One Out
  {
    id: "r8",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the word that does NOT belong based on verb categories.",
    options: ["Should", "Can", "May", "Commit"],
    correctAnswer: "Commit",
    explanation: "'Should', 'Can', and 'May' are modal auxiliary verbs; 'Commit' is an action verb."
  },
  // 9. Reading Comprehension Test
  {
    id: "r9",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "Why do people commit crimes according to the passage?",
    options: [
      "A) Only due to biological and genetic factors",
      "B) For reasons like poverty, unemployment, lack of education, and peer pressure",
      "C) Because laws encourage people to break them",
      "D) Solely because of online video games"
    ],
    correctAnswer: "B",
    explanation: "Paragraph 1 states people commit crimes for reasons including poverty, unemployment, lack of education, peer pressure, and family problems."
  },
  // 10. Reading Comprehension Test
  {
    id: "r10",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "How does crime affect trust within a community?",
    options: [
      "A) It creates fear and can reduce people's trust in others",
      "B) It makes everyone trust each other much more",
      "C) It has zero effect on neighborhoods or public safety",
      "D) It encourages people to leave their belongings everywhere"
    ],
    correctAnswer: "A",
    explanation: "Paragraph 2 states: 'Crime also creates fear in communities and can reduce people\\'s trust in others.'"
  },
  // 11. Reading Comprehension Test
  {
    id: "r11",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "What values can schools teach young people to prevent illegal behavior?",
    options: [
      "A) Responsibility, respect, and the consequences of illegal actions",
      "B) How to evade police detection",
      "C) How to make quick money without working",
      "D) How to ignore laws they disagree with"
    ],
    correctAnswer: "A",
    explanation: "Paragraph 3 notes: 'Schools can teach young people about responsibility, respect, and the consequences of illegal behavior.'"
  },
  // 12. Reading Comprehension Test
  {
    id: "r12",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "What is the author's viewpoint on punishment and prevention?",
    options: [
      "A) Punishment is useless and should be completely stopped",
      "B) Although punishment is important, prevention is equally important",
      "C) Punishment alone solves all long-term social problems",
      "D) Prevention is impossible in modern society"
    ],
    correctAnswer: "B",
    explanation: "The conclusion clearly states: 'Although punishment is important, prevention is equally important.'"
  }
];

// 12 Distinct Questions for TEAM BLUE (Completely Different from Team Red)
export const TEAM_BLUE_QUESTIONS = [
  // 1. Grammar Mistake Catching (Present Simple)
  {
    id: "b1",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correct form, and click Submit.",
    sentence: "Education help people make better choices in life.",
    mistakeWord: "help",
    correctAnswer: "helps",
    explanation: "In Present Simple, the singular non-count subject 'Education' requires 'helps' with an -s."
  },
  // 2. Grammar Mistake Catching (Modal + Base Verb)
  {
    id: "b2",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correct form, and click Submit.",
    sentence: "Crime can reduces people's trust in other members of society.",
    mistakeWord: "reduces",
    correctAnswer: "reduce",
    explanation: "After the modal verb 'can', always use the base form ('can reduce') without -s."
  },
  // 3. Grammar Mistake Catching (Modal + Base Verb)
  {
    id: "b3",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correct form, and click Submit.",
    sentence: "Governments must ensuring fair laws and social protection for all.",
    mistakeWord: "ensuring",
    correctAnswer: "ensure",
    explanation: "Modal verbs like 'must' are followed by the base infinitive verb ('must ensure')."
  },
  // 4. Grammar Mistake Catching (Present Simple / Plural Subject)
  {
    id: "b4",
    type: "grammar",
    typeName: "Catch Grammar Mistake",
    instruction: "Click on the mistaken word in the sentence, type the correct form, and click Submit.",
    sentence: "Not all people who experiences poverty become criminals.",
    mistakeWord: "experiences",
    correctAnswer: "experience",
    explanation: "The relative pronoun 'who' refers to the plural noun 'people', so the verb is 'experience' (plural)."
  },
  // 5. Odd One Out
  {
    id: "b5",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the word that does NOT belong based on causes of crime in the text.",
    options: ["Poverty", "Lack of education", "Family problems", "Fair laws"],
    correctAnswer: "Fair laws",
    explanation: "Poverty, Lack of education, and Family problems are causes of crime; Fair laws help prevent crime."
  },
  // 6. Odd One Out
  {
    id: "b6",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on crimes vs positive values.",
    options: ["Theft", "Fraud", "Robbery", "Respect"],
    correctAnswer: "Respect",
    explanation: "Theft, Fraud, and Robbery are harmful crimes; Respect is a positive moral value."
  },
  // 7. Odd One Out
  {
    id: "b7",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on social support and solutions.",
    options: ["Family support", "Employment opportunities", "Social services", "Illegal behavior"],
    correctAnswer: "Illegal behavior",
    explanation: "Family support, Employment opportunities, and Social services are supportive solutions; Illegal behavior is crime."
  },
  // 8. Odd One Out
  {
    id: "b8",
    type: "odd_one_out",
    typeName: "Odd One Out",
    instruction: "Select the odd word out based on negative circumstances vs proactive solutions.",
    options: ["Unemployment", "Poverty", "Peer pressure", "Education"],
    correctAnswer: "Education",
    explanation: "Unemployment, Poverty, and Peer pressure are risk factors leading to crime; Education is a proactive solution."
  },
  // 9. Reading Comprehension Test
  {
    id: "b9",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "Does the passage state that all people living in poverty become criminals?",
    options: [
      "A) Yes, anyone in poverty will definitely commit a crime",
      "B) No, not all people who experience poverty become criminals",
      "C) Yes, poverty is the only existing reason for crime",
      "D) No, wealthy individuals never commit any offenses"
    ],
    correctAnswer: "B",
    explanation: "Paragraph 1 clearly states: 'However, not all people who experience poverty or difficult circumstances become criminals.'"
  },
  // 10. Reading Comprehension Test
  {
    id: "b10",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "Which four crimes are explicitly named as causing serious harm to victims?",
    options: [
      "A) Theft, robbery, fraud, and cybercrime",
      "B) Speeding, littering, jaywalking, and noise",
      "C) Arriving late, failing an exam, forgetting homework, and sleeping",
      "D) Eating fast food, watching TV, playing games, and shopping"
    ],
    correctAnswer: "A",
    explanation: "Paragraph 2 states: 'Some crimes, such as theft, robbery, fraud, and cybercrime, can have serious consequences for victims.'"
  },
  // 11. Reading Comprehension Test
  {
    id: "b11",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "How can governments actively contribute to crime reduction?",
    options: [
      "A) By creating jobs, improving social services, and ensuring fair laws",
      "B) By shutting down all public transportation at night",
      "C) By banning internet communication and computers",
      "D) By cutting all spending on public schools"
    ],
    correctAnswer: "A",
    explanation: "Paragraph 3 explains: 'Governments can also reduce crime by creating jobs, improving social services, and ensuring fair laws.'"
  },
  // 12. Reading Comprehension Test
  {
    id: "b12",
    type: "test",
    typeName: "Reading Test",
    instruction: "Read the question and select the correct answer according to the passage.",
    question: "According to the final sentence, what may reduce crime in the long term?",
    options: [
      "A) Helping people make better choices and providing opportunities for a better life",
      "B) Building taller fences around residential areas",
      "C) Increasing punishments while ignoring prevention completely",
      "D) Preventing young people from attending schools"
    ],
    correctAnswer: "A",
    explanation: "The passage finishes: 'Helping people make better choices and providing opportunities for a better life may reduce crime in the long term.'"
  }
];
