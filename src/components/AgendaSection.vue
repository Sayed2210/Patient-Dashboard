<template>
  <v-card color="white" class="rounded-lg" flat>
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-select
        :items="modes"
        dense
        outlined
        hide-details
        label="event-overlap-mode"
        class="ma-2"
      ></v-select>
      <v-select
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        :weekdays="weekday"
        :type="type"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
      ></v-calendar>
    </v-sheet>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const type = ref("month");
const types = ref(["month", "week", "day", "4days"]);
const mode = ref("stack");
const modes = ref(["stack", "column"]);
const weekdays = ref(["Sun - Sat", "Mon - Sun", "Mon - Fri", "Mon, Wed, Fri"]);
</script>
