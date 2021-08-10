<template>
  <q-layout view="hHh lpR fFf" class='bg-brand'>
    <MainHeader :show-back-button='true'/>
    <q-page-container class='q-pa-md'>
    </q-page-container>
  </q-layout>

</template>

<script>
import MainHeader from '../../components/Header/MainHeader.vue';
export default {
  name: 'MarkTeam',
  components: { MainHeader }
};
</script>

<style scoped>

</style>
