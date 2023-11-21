export interface IDialogContent {
  titleKey: string;
  descriptionKey?: string;
}

export interface IDialogFn {
  getImgSrc(): string;
  getGuideContent(): IDialogContent;
  getGoalContent(): IDialogContent;
  getHowContent(): IDialogContent;
}
