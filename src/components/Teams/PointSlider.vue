<template>
<q-card class='flex column items-center justify-center text-white' flat>
  <q-card-section class='text-center'>
    <div class='name'>
        Бизнес-составляющая
    </div>

    <div class='description'>
      Оригинальность подхода,
      подготовка выступления
    </div>
  </q-card-section>

  <q-card-section>
      <q-avatar @click='test = index' v-for='(index) in 5' :key='index' :class='index === test ? "selected-point" : ""'>
        {{index}}
      </q-avatar>
  </q-card-section>

  <q-card-section class='q-mt-lg flex justify-between full-width'>
    <q-icon name="chevron_left"/>
    <q-icon name="chevron_right"/>
  </q-card-section>
</q-card>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'PointSlider',
  setup() {
    const test = ref(1)

    return {
      test
    }
  }
});
</script>

<style lang='scss' scoped>
.q-card{
  background: linear-gradient(128.88deg, #0062FF 15.57%, #021B79 114.08%);
  border-radius: 20px;

  .q-icon{
    cursor: pointer;
  }
}
.selected-point{
  color: blue;
  background: white;
}
.q-avatar{
  cursor: pointer;
}
</style>
