<template>
  <v-navigation-drawer
    color="info"
    location="left"
    permanent
    rail
    expand-on-hover
    class="pa-0"
  >
    <v-avatar
      color="info"
      size="x-large"
      class="d-block text-center mx-auto mt-4 mb-16"
    >
      <v-icon icon="mdi-truck-plus" size="x-large"></v-icon>
    </v-avatar>
    <v-list density="compact" class="w-100">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="white"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon" class="text-right"></v-icon>
        </template>
        <v-list-item-title
          v-text="item.text"
          class="text-left"
        ></v-list-item-title>
      </v-list-item>
    </v-list>
    <div
      style="
        position: absolute;
        bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <v-icon class="mb-5" color="white" icon="mdi-cog" size="x-large"></v-icon>

      <br />
      <v-icon color="white" icon="mdi-information" size="x-large"></v-icon>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  { icon: "mdi-medical-bag", text: "Medical" },
  { icon: "mdi-doctor", text: "Nursing" },
  { icon: "mdi-virus", text: "Virus" },
  { icon: "mdi-account-heart", text: "Patient" },
  { icon: "mdi-clipboard-pulse", text: "Pulse" },
]);
</script>
