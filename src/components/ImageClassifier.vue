<template>
  <ModelLoader :isReady="isReady">
    <h1>Image classifier</h1>
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
  </ModelLoader>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { loadModel, predict } from "../ml/imageClassification";
import ModelLoader from "./ModelLoader";

export default {
  name: "ImageClassifier",
  components: {
    ModelLoader,
  },
  setup() {
    const isReady = ref(null);
    const inputValue = ref("https://img2.rtve.es/v/5662467/");

    const load = () => {
      loadModel(() => (isReady.value = true));
    };

    onBeforeMount(() => {
      load();
    });

    const onPredictClick = () => {
      predict(document.getElementById("image"));
    };

    return {
      inputValue,
      onPredictClick,
      isReady,
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
