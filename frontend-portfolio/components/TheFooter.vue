<template>
    <div><section class="w3l-footer py-sm-5 py-4">
      <div class="container">
        <div class="footer-content">
          <div class="row">
            <div class="col-lg-8 footer-left">
              <p class="m-0">
                {{ data.main.shortname }} © Copyright {{ year }}. Developed by
                <a href="#" target="_blank">{{ data.main.name }}</a>
              </p>
            </div>
            <div
              class="
                col-lg-4
                footer-right
                text-lg-right text-center
                mt-lg-0 mt-3
              "
            >
              <ul class="social m-0 p-0">
                <li
                  v-for="socaildata in data.main.social"
                  v-bind:key="socaildata"
                >
                  <a :href="socaildata.url"
                    ><span :class="socaildata.className"></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button onclick="topFunction()" id="movetop" title="Go to top">
        <span class="fa fa-angle-up"></span>
      </button>
    </section></div>
</template>

<script>
import data from '~/assets/data.json'
export default {

  data() {
    return {
      data: data,
      year: "",
      timestamp: "",
    };
  },
  created() {
    setInterval(this.getYear, 1000);
  },
  methods: {
    getYear: function () {
      const year = new Date();
      const currentYear = year.getFullYear();
      this.year = currentYear;
    },
  },
};
</script>