
<template >
  <!-- <ColorModePicker />  -->
  <nav class="relative container mx-auto p-6">
      <div class="flex items-center justify-between">
          <!-- logo and Name -->
          <div class="pt-2">
            <h2>{{ data.main.shortname }}</h2>
          </div>
          <!-- Menu Items -->
            <div class="hidden space-x-6 md:flex">
                <!-- <div class="flex space-x-4"> -->
                  <a v-for="item in navigation" :key="item.name" :href="item.href"  :class="[ item.current ? 'bg-gray-900 text-white' : 'text-gray-300 ',
                  'px-3 py-2 rounded-md text-sm font-medium',]" :aria-current="item.current ? 'page' : undefined">
                  {{ item.name }}
                  </a>
            </div>
          <!-- Hamburger Icon -->
            <button id="menu-btn" class="block hamburger md:hidden focus:outline-none" @click="openMenu">
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
        <!-- </div>  -->
    </div>
      <!-- Mobile Menu -->
      <div class="md:hidden">
        <div id="menu" class="absolute  bg-white flex-col items-center hidden self-end py-8 mt-10 space-y-6
            font-bold  sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 ',
              'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
              {{ item.name }}</a>
        </div>
      </div>
   
  </nav>
</template>



<script >
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import data from "~/assets/data.json";
import ColorModePicker from "~/components/ColorModePicker.vue";

export default {
  components: {
    ColorModePicker,
  },
  data() {
    return {
      data: data,
      navigation: [
        { name: "Home", href: "#", current: true },
        { name: "About Me", href: "#", current: false },
        { name: "Projects", href: "#", current: false },
      ],
      //$colorMode: useColorMode(), // <-- uncomment to enable color mode
    };
  },
  methods: {
    openMenu() {
      const btn = document.getElementById("menu-btn");
      const nav = document.getElementById("menu");
      nav.classList.toggle("flex");
      nav.classList.toggle("hidden");
      btn.classList.toggle("open");
    },
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
<style>
/* Hamburger Menu */
.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: #000;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
  transform: translateY(0px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(-6px);
}
</style>

