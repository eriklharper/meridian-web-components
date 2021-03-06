import { html } from '/node_modules/lit-html/lit-html.js';
import theme from "/theme.js";
const style = `
  fill: ${theme.colorArubaOrange100};
  height: 30px;
  width: 119px;  
`
export default html`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 37.4" style="${style}">
    <path d="M101.8 8.4c-3 0-5.8.9-8.2 2.4V8.6c-.3-6-5.2-7.9-6.5-8.6H87v37.4s4.4-.5 6.1-2.9c2.5 1.7 5.5 2.8 8.7 2.8 8.2 0 14.8-6.5 14.8-14.4 0-8-6.6-14.5-14.8-14.5zm0 22.4c-4.5 0-8.2-3.6-8.2-8s3.7-8 8.2-8c4.5 0 8.2 3.6 8.2 8s-3.7 8-8.2 8zM37.1 12.5c-1.8-1.2-4.6-1.4-4.6-1.4v26.2h6.8V23c0-4.4 3.6-7.9 8.1-7.9 2 0 3.9.7 5.3 1.9V9.4c-1.7-.6-3.4-1-5.3-1-4 0-7.6 1.6-10.3 4.1zM14.8 8.4C6.6 8.4 0 14.9 0 22.9s6.6 14.4 14.8 14.4c3.4 0 6.5-1.1 9-3 1.5 2.5 5.8 3 5.8 3V22.9c.1-8-6.6-14.5-14.8-14.5zm0 22.4c-4.5 0-8.2-3.6-8.2-8s3.7-8 8.2-8c4.5 0 8.2 3.6 8.2 8 .1 4.4-3.6 8-8.2 8zM133.1 8.4c-8.2 0-14.8 6.5-14.8 14.4 0 8 6.6 14.4 14.8 14.4 3.4 0 6.5-1.1 9-3 1.5 2.5 5.8 3 5.8 3V22.9c.1-8-6.6-14.5-14.8-14.5zm0 22.4c-4.5 0-8.2-3.6-8.2-8s3.7-8 8.2-8c4.5 0 8.2 3.6 8.2 8s-3.6 8-8.2 8zm-56-15.1v7c0 4.4-3.3 7.9-7.4 7.9-4.1 0-7.4-3.5-7.4-7.9v-3.4c-.1-7.2-6.8-8.9-6.8-8.9v12.3c0 8 6.4 14.5 14.2 14.5 7.8 0 14.2-6.5 14.2-14.5V7.2h-.1c-1.3.6-6.4 2.5-6.7 8.5z"/>
  </svg>
`;