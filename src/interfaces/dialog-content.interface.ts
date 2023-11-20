export interface IDialogContent {
  titleKey: string;
  descriptionKey?: string;
}

export interface IDialogFn {
  getGuideContent(): IDialogContent;
  getGoalContent(): IDialogContent;
  getHowContent(): IDialogContent;
}
