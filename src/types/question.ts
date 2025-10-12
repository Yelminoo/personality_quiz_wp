export interface Question {
  id: number;
  text: string;
  options: string[];
  multiple: boolean;
  maxSelections?: number;
  showIf?: (answers: Record<number, string[]>) => boolean;
}
