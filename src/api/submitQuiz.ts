import axios from "axios";

export interface QuizSubmission {
  answers: Record<number, string[]>;
  userEmail?: string;
}

export const submitQuiz = async (data: QuizSubmission) => {
  // Replace URL with your backend endpoint
  const response = await axios.post("http://localhost:5000/api/submit-quiz", data);
  return response.data;
};
