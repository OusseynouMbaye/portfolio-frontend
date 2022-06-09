<template >
 <!-- <ColorModePicker /> -->
  <h2>{{ data.main.shortname }}</h2>
</template>


<script >
import data from "~/assets/data.json";
import ColorModePicker from "~/components/ColorModePicker.vue";
export default {
  components: {
    ColorModePicker
  },
  data() {
    return {
      data: data,
      //$colorMode: useColorMode(), // <-- uncomment to enable color mode
    
    };
  },
  methods: {
    //   toggle() {
    //     this.colors[this.$colorMode.preference] = this.$colorMode.value;
    //   },
    // toggleSwitch() {
    //   this.$colorMode.preference = this.colors[
    //     (this.colors.indexOf(this.$colorMode.preference) + 1) %
    //     this.colors.length
    //   ];
    // },
  },
};
</script>

