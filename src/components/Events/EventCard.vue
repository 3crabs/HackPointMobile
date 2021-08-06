<template>
<q-card class='card' flat bordered>
  <q-card-section>
    <div class='flex justify-between items-center'>
      <span class='event-name-text'>
        {{eventName}}
      </span>
        <ReadyState v-if='eventStatus === "ready"' class='float-right'/>
        <ProcessState v-else class='float-right'/>
      </div>

    <div class='row'>
      <span class='date-text'>{{eventDate}}</span>
    </div>
  </q-card-section>

  <q-card-section>
    <q-btn @click='tempRoute' v-if='eventStatus === "ready"' label='Результаты' :class='eventStatus' class='full-width' flat no-caps/>
    <q-btn @click='tempRoute' v-else label='Оценка' :class='eventStatus' class='full-width ' flat no-caps/>
  </q-card-section>
</q-card>
</template>

<script>
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'
import ReadyState from 'components/StateChips/ReadyState.vue';
import {States} from 'components/Events/EventsStates';
import ProcessState from 'components/StateChips/ProcessState.vue';
export default defineComponent({
  name: 'EventCard',
  components: { ProcessState, ReadyState },
  props: {
    eventName: {
      type: String
    },
    eventDate: {
      type: Date
    },
    eventStatus: {
      type: String
    }
  },
  setup() {
    const router = useRouter()

    return {
      async tempRoute() {
        await router.push('/teams')
      },

      States,
    }
  }
});
</script>

<style scoped>
.card{
  border-radius: 20px;
}
.event-name-text{
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  color: #171725;
}
.date-text {
  font-size: 14px;
  line-height: 16px;

  color: #696974;
}
.inProgress{
  background: #0062FF;
  border-radius: 10px;

  font-size: 12px;
  line-height: 18px;
  font-weight: 600;


  text-align: center;

  color: #FFFFFF;


}
.ready{
  border-radius: 10px;
  background: #F1F1F5;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  text-align: center;

  color: #696974;
}
</style>
