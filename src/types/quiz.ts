export type Answer = {
  id: string;
  text: string;
  isCorrect: boolean;
  info: string;
};

export type Question = {
  id: number;
  text: string;
  answers: Answer[];
  hint: string;
};

export type QuizQuestionProps = {
  selectedAnswer: null;
  currentQuestion: Question;
  isHintVisible: boolean;
  isAnswerVisible: boolean;
  nextQuestion: () => void;
  handleShowHint: () => void;
  handleShowAnswer: () => void;
  validateAnswer: (id: string) => void;
};

export type QuestionProps = {
  currentQuestion: Question;
};

export type AnswersProps = {
  selectedAnswer: null;
  currentQuestion: Question;
  validateAnswer: (id: string) => void;
  isAnswerVisible: boolean;
};

export type AnswerOptionProps = {
  text: string;
  id: string;
  className: string;
  validateAnswer: (id: string) => void;
};

export type ValidateAnswerProps = {
  id: string;
};

export type ButtonProps = {
  className: string;
  text: string;
  id?: string;
  clickEvent: () => void;
};

export type HintProps = {
  text: string;
};

export type AnswerProps = {
  text: string;
};
