<template>
  <ModelLoader :isReady="isReady">
    <h1>Chihuahua Or Muffin</h1>
    <br />
    <input v-model="inputValue" placeholder="Add image url here" />
    <br />
    <br />
    <br />
    <img :src="inputValue" crossorigin="anonymous" id="image" />
    <br />
    <br />
    <br />
    <button v-if="inputValue" @click="onPredictClick">Predict</button>
    <button v-if="inputValue" @click="onTrainCLick">Train</button>
  </ModelLoader>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import {
  loadModel,
  predict,
  addData,
  getHtmlImage,
} from "../ml/featureExtration";
import data from "../datasets/chihuahuaOrMuffin";

import ModelLoader from "./ModelLoader";

export default {
  name: "ImageClassifier",
  components: {
    ModelLoader,
  },
  setup() {
    const isReady = ref(null);
    const inputValue = ref("");

    const load = () => {
      loadModel(() => (isReady.value = true));
    };

    onBeforeMount(() => {
      load();
    });

    const onPredictClick = () => {
      predict(document.getElementById("image"));
    };

    const onTrainCLick = () => {
      data.map((image, id) => {
        addData(getHtmlImage(image.src, "img" + id), image.label);
      });
    };

    return {
      onTrainCLick,
      onPredictClick,
      isReady,
      inputValue,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 300px;
}
</style>
