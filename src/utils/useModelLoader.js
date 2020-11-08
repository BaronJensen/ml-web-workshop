import { ref, onMounted, onUpdated } from "vue";
//import ML5 from "ml5";
//const ML5 = window.ml5;
const useModelLoader = (method, model) => {
  //React: createRef
  const brain = ref(null);

  //React: createRef
  const isReady = ref(false);

  const onModelLoaded = () => {
    isReady.value = true;
    console.log("loaded: ", isReady.value);
  };

  //React: UseEffect(() => (), [])
  onMounted(() => {
    console.log(ML5);
    brain.value = ML5[method](model, onModelLoaded);
  });

  onUpdated(() => {
    console.log(isReady.value, brain.value);
  });

  return {
    brain,
    isReady,
  };
};

export default useModelLoader;
