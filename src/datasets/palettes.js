import parseCSS from "../utils/parseCSS"

const red = `
.dark-primary-color    { background: #D32F2F; }
.default-primary-color { background: #F44336; }
.light-primary-color   { background: #FFCDD2; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #009688; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; }
`.trim()

const indigo = `
.dark-primary-color    { background: #1976D2; }
.default-primary-color { background: #2196F3; }
.light-primary-color   { background: #BBDEFB; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #536DFE; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; }
`

const lime = `

.dark-primary-color    { background: #AFB42B; }
.default-primary-color { background: #CDDC39; }
.light-primary-color   { background: #F0F4C3; }
.text-primary-color    { color: #212121; }
.accent-color          { background: #CDDC39; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; }`


const blueGray = `
.dark-primary-color    { background: #455A64; }
.default-primary-color { background: #607D8B; }
.light-primary-color   { background: #CFD8DC; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #607D8B; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; }`



  const data = [
    parseCSS(red),
    parseCSS(indigo),
    parseCSS(lime),
    parseCSS(blueGray), 
  ]

export default data