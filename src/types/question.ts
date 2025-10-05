export interface Question {
  id: number;
  text: string;
  options: string[];
  multiple: boolean;
  showIf?: (answers: Record<number, string[]>) => boolean;
}
