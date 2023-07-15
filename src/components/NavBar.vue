<template>
  <v-app-bar color="info" prominent>
    <v-icon icon="mdi-arrow-left-bold"></v-icon>
    <h4>Patient Card</h4>
    <v-spacer></v-spacer>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="white" v-bind="props">
          Appiontments History <v-icon icon="mdi-arrow-down"></v-icon
        ></v-btn>
      </template>
      <v-list>
        <v-list-item color="info" v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn><v-icon icon="mdi-plus-box"></v-icon> New Patient</v-btn>
    <v-badge color="error" dot>
      <v-icon icon="mdi-bell"></v-icon>
    </v-badge>
    <v-avatar class="ml-3" color="info">
      <v-icon icon="mdi-account" size="x-large"></v-icon>
    </v-avatar>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  { title: "Patient 1" },
  { title: "Patient 2" },
  { title: "Patient 3" },
  { title: "Patient 4" },
]);
</script>
