var model;
var knn;

export const loadModel = (callback) => {
  const ml5 = window.ml5;
  knn = ml5.KNNClassifier();
  model = ml5.featureExtractor("MobileNet", () => {
    console.log("Model Loaded!");
    if (callback) {
      callback();
    }
  });
};

export const addData = (toPredict, label) => {
  const imageSoul = model.infer(toPredict);
  knn.addExample(imageSoul, label);
};

export const predict = (toPredict, callback) => {
  const imageSoul = model.infer(toPredict);
  knn.classify(imageSoul, (err, results) => {
    if (callback) {
      callback(results);
    }
  });
};

export const getHtmlImage = (src, id) => {
  var image = new Image();
  image.id = id;
  image.src = src;
};
