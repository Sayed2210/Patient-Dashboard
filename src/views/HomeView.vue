<template>
  <v-app>
    <v-layout>
      <SideBar />
      <NavBar />
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" sm="9">
              <v-row>
                <v-col cols="12" sm="12">
                  <ContactSection />
                </v-col>
                <v-col cols="12" sm="12">
                  <AgendaSection />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="3">
              <DoctorSection />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
import AgendaSection from "@/components/AgendaSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import DoctorSection from "@/components/DoctorSection.vue";
</script>
