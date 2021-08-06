<template>
  <q-layout view="hHh lpR fFf" class='bg-brand'>
    <MainHeader/>
    <q-page-container class='q-pa-md'>
        <section class='q-pt-lg'>
          <div class='hello-text'>
            Привет, {{name}}
          </div>

          <span class='secondary-text'>
            Вот так обстоят дела
          </span>
        </section>

      <section class='q-mt-md'>
        <EventCard event-name='Питч идей' :event-date='new Date().toDateString()' class='q-mb-lg' event-status='ready'/>
        <EventCard event-name='Чекпоинт' :event-date='new Date().toDateString()' event-status='inProgress'/>
      </section>
    </q-page-container>

  </q-layout>
</template>

<script lang='ts'>
import {defineComponent, ref} from 'vue'
import MainHeader from '../../components/Header/MainHeader.vue';
import EventCard from 'components/Events/EventCard.vue';

export default defineComponent({
  name: 'EventsPage',
  components: { EventCard, MainHeader },
  setup() {
    const name = ref('Константин');

    return {
      name
    }
  }
});
</script>

<style scoped>
.hello-text{
  font-weight: 600;
  font-size: 28px;
}
.secondary-text{
  font-size: 14px;
  line-height: 16px;

  color: #696974;
}
</style>
