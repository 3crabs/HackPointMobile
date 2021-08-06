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
        <Team team-name='3CRABS'/>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script>
import MainHeader from '../../components/Header/MainHeader';
import Team from '../../components/Teams/Team';
export default {
  name: 'Teams',
  components: { Team, MainHeader }
};
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
