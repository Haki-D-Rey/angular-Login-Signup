export interface htmlFormType {
  typeHtml: number,
  type: string,
  formControlName: string,
  placeHolder: string,
  label: string;
}

export const dataHtmlForm: htmlFormType[] = [{
  typeHtml: 0,
  type: 'text',
  formControlName: 'userName',
  placeHolder: '',
  label: 'User Name'
},
{
  typeHtml: 0,
  type: 'password',
  formControlName: 'password',
  placeHolder: '',
  label: 'Password'
}]
