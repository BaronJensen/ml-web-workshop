const chihuahua = [1, 2, 3, 4, 5, 6, 7].map((id) => ({
  img: `chihuahua-${id}.jpg`,
  label: "CHIHUAHUA",
}));
const muffin = [1, 2, 3, 4, 5, 6, 7].map((id) => ({
  img: `muffin-${id}.jpeg`,
  label: "MUFFIN",
}));

const imagePath = "./imgs";

const data = [...chihuahua, ...muffin].map((imgs) => ({
  src: require(imagePath + imgs.img),
  label: imgs.label,
}));

export default data;
