export interface Question {
  id: number;
  text: string;
  options: string[];
  multiple: boolean;
  maxSelections?: number;
  isEmail?: boolean;
  showIf?: (answers: Record<number, string[]>) => boolean;
}
