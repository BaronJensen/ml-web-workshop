import cssToJS from "transform-css-to-js"

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16) , parseInt(result[2], 16) , parseInt(result[3], 16) ]
   : null;
}

const parseCSS = (cssString) => {

const color = JSON.parse(cssToJS(cssString).replace(/background/g, `"background"`)
.replace(/color/g, `"color"`)
.replace(/borderColor/g, `"borderColor"`)
.replace(/dividerColorClass/g, `"dividerColorClass"`)
.replace(/secondaryTextColorClass/g, `"secondaryTextColorClass"`)
.replace(/primaryTextColorClass/g, `"primaryTextColorClass"`)
.replace(/textPrimaryColorClass/g, `"textPrimaryColorClass"`)
.replace(/lightPrimaryColorClass/g, `"lightPrimaryColorClass"`)
.replace(/defaultPrimaryColorClass/g, `"defaultPrimaryColorClass"`)
.replace(/darkPrimaryColorClass/g, `"darkPrimaryColorClass"`)
.replace(/accentColorClass/g, `"accentColorClass"`)
.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,''))


color["darkPrimaryColorClass"].background = hexToRgb(color["darkPrimaryColorClass"].background)
color["defaultPrimaryColorClass"].background= hexToRgb(color["defaultPrimaryColorClass"].background)
color["lightPrimaryColorClass"].background= hexToRgb(color["lightPrimaryColorClass" ].background)
color["textPrimaryColorClass"].color = hexToRgb(color["textPrimaryColorClass"].color)
color["accentColorClass"].background = hexToRgb(color["accentColorClass"].background)
color["primaryTextColorClass"].color= hexToRgb(color["primaryTextColorClass"].color)
color["secondaryTextColorClass"].color= hexToRgb(color["secondaryTextColorClass"].color)
color["dividerColorClass"].borderColor = hexToRgb(color["dividerColorClass"].borderColor)

return color
}



export const getResponseColors = (items) => {

const normalizedColors = items.map((value) => value > 255 ? 255 : value)
const color = {}
color["darkPrimaryColorClass"] = `rgb(${normalizedColors.pop()}, ${normalizedColors.pop()}, ${normalizedColors.pop()})`
color["lightPrimaryColorClass"] = `rgb(${normalizedColors.pop()}, ${normalizedColors.pop()}, ${normalizedColors.pop()})`
color["textPrimaryColorClass"]= `rgb(${normalizedColors.pop()}, ${normalizedColors.pop()}, ${normalizedColors.pop()})`
color["primaryTextColorClass"]= `rgb(${normalizedColors.pop()}, ${normalizedColors.pop()}, ${normalizedColors.pop()})`
color["secondaryTextColorClass"] = `rgb(${normalizedColors.pop()}, ${normalizedColors.pop()}, ${normalizedColors.pop()})`
color["dividerColorClass"]= `rgb(${normalizedColors.pop()}, ${normalizedColors.pop()}, ${normalizedColors.pop()})`

return color
}

export const getInputColors = (items) => {
  const color = {}
  color["defaultPrimaryColorClass"] = `rgb(${items.pop()}, ${items.pop()}, ${items.pop()})`
  color["accentColorClass"] = `rgb(${items.pop()}, ${items.pop()}, ${items.pop()})`  
  return color
  }

export default parseCSS