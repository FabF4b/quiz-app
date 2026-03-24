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
  currentQuestion: Question;
  isHintVisible: boolean;
  isAnswerVisible: boolean;
  nextQuestion: () => void;
  handleShowHint: () => void;
  handleShowAnswer: () => void;
  validateAnswer: (id: string) => void;
};

export type AnswersProps = {
  currentQuestion: Question;
  validateAnswer: (id: string) => void;
};

export type AnswerOptionProps = {
  text: string;
  id: string;
  validateAnswer: (id: string) => void;
};

export type ValidateAnswerProps = {
  text: string;
};

export type ButtonProps = {
  className: string;
  text: string;
  id?: string;
  clickEvent: (id?: string) => void;
};

export type HintProps = {
  text: string;
};

export type AnswerProps = {
  text: string;
};
