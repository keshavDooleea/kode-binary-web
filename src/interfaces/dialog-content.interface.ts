export interface IDialogContent {
  title: string;
  description?: string;
}

export interface IDialogFn {
  getGuideContent(): IDialogContent;
  getGoalContent(): IDialogContent;
  getHowContent(): IDialogContent;
  getNoteContent(): IDialogContent;
}
