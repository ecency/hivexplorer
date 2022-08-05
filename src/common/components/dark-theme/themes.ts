
import {DefaultTheme} from 'styled-components';

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    toggleBorder: string,
    background: string,
    cardBorder:string,
    icon:string,
    btnBg:string
  }
}
export const lightTheme:DefaultTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
    cardBorder:"#cbcbcb",
    icon: "#828282",
    btnBg:"#cbcbcb"
}

export const darkTheme: DefaultTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
    cardBorder:"#cbcbcb",
    icon: "#eaf2fc",
    btnBg:"#747474"
};