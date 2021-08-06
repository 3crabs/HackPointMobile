<template>
  <q-layout view="hHh lpR fFf" class='bg-brand'>
    <MainHeader :show-back-button='true'/>
    <q-page-container class='q-pa-md'>
      <section class='q-pt-lg'>
        <div class='hello-text'>
          Команды
        </div>

        <span class='secondary-text'>
            Выберите команду для оценки
          </span>
      </section>

      <section>
        <Team @click='teamMark(1, "3CRABS")' team-name='3CRABS' :verified='true'/>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import MainHeader from '../../components/Header/MainHeader.vue';
import Team from '../../components/Teams/Team.vue';
export default defineComponent({
  name: 'Teams',
  components: { Team, MainHeader },
  setup() {
    const router = useRouter();


    return {
      async teamMark(id: number, name: string) {
        await router.push(`/team?id=${id}&name=${name}`)
      }
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
  letter-spacing: 0.1px;

  color: #696974;
}
</style>
