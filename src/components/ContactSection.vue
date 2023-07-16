<template>
  <v-card color="white" class="rounded-lg mt-2" flat>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card color="info" class="rounded-lg pa-2">
          <v-row>
            <v-col cols="12" sm="4">
              <v-avatar color="info" title>
                <v-img src="woman.png" />
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="8">
              <h4 class="white--text">Manar Omar</h4>
              <h6 class="caption withe--text">36 years old</h6>
            </v-col>
            <v-col cols="12" sm="12" class="mt-3">
              <v-row>
                <v-col cols="12" sm="4">
                  <h6 class="grey--text text--lighten-4">Height</h6>
                  <h6 class="white-text">185</h6>
                </v-col>
                <v-col cols="12" sm="4">
                  <h6 class="grey--text text--lighten-4">weight</h6>
                  <h6 class="white-text">95</h6>
                </v-col>
                <v-col cols="12" sm="4">
                  <h6 class="grey--text text--lighten-4">blood Type</h6>
                  <h6 class="white-text">A+</h6>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card flat class="transparent mx-2 px-2 rounded-lg">
          <span class="caption text-grey">Phone Number</span>
          <h5 class="text-info mb-7">+20 010 134 533 91</h5>
          <span class="caption text-grey">Card Number</span>
          <h5 class="text-info">123456789</h5>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card flat class="transparent mx-2 px-2 rounded-lg">
          <span class="caption text-grey">Email</span>
          <h5 class="text-info mb-7">Elsayedhassan46845@gmail.com</h5>
          <span class="caption text-grey">Medical Conditions</span>
          <h5 class="text-info">Alergies, Astma, Coronary Heart Disease</h5>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
