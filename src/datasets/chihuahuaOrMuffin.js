const chihuahua = [{
  src: require(`./imgs/chihuahua-1.jpg`),
  label: "CHIHUAHUA",
},
{
  src: require(`./imgs/chihuahua-2.jpg`),
  label: "CHIHUAHUA",
},
{
  src: require(`./imgs/chihuahua-3.jpg`),
  label: "CHIHUAHUA",
},
{
  src: require(`./imgs/chihuahua-4.jpg`),
  label: "CHIHUAHUA",
},
{
  src: require(`./imgs/chihuahua-5.jpg`),
  label: "CHIHUAHUA",
},
{
  src: require(`./imgs/chihuahua-6.jpg`),
  label: "CHIHUAHUA",
},
{
  src: require(`./imgs/chihuahua-7.jpg`),
  label: "CHIHUAHUA",
},
]

const muffin = [{
  src: require(`./imgs/muffin-1.jpeg`),
  label: "MUFFIN",
},
{
  src: require(`./imgs/muffin-2.jpeg`),
  label: "MUFFIN",
},
{
  src: require(`./imgs/muffin-3.jpeg`),
  label: "MUFFIN",
},
{
  src: require(`./imgs/muffin-4.jpeg`),
  label: "MUFFIN",
},
{
  src: require(`./imgs/muffin-5.jpeg`),
  label: "MUFFIN",
},
{
  src: require(`./imgs/muffin-6.jpeg`),
  label: "MUFFIN",
},
{
  src: require(`./imgs/muffin-7.jpeg`),
  label: "MUFFIN",
},
]




const data = [...chihuahua, ...muffin].map((meta, id) => ({
...meta,
id:  "img-"  + meta.label + id
}))

export default data;
