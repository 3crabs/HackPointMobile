<template>
  <q-layout view="hHh lpR fFf" class='bg-brand'>
    <MainHeader :show-back-button='true'/>
    <q-page-container class='q-pa-md'>
      <section class='q-pt-lg'>
        <div class='hello-text'>
          3CRABS
        </div>
      </section>

      <section class='q-mt-md section-mark'>
        <div>
          Оценка
        </div>

        <span>
          Выбирай балл и свайпай вправо
        </span>
      </section>

      <section class='q-mt-lg'>
        <PointSlider/>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script>
import MainHeader from '../../components/Header/MainHeader.vue';
import PointSlider from '../../components/Teams/PointSlider.vue';
export default {
  name: 'TeamPoint',
  components: { PointSlider, MainHeader }
};
</script>

<style lang='scss' scoped>
.hello-text{
  font-weight: 600;
  font-size: 28px;
}
.section-mark {
  div {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    color: #171725;
  }

  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
