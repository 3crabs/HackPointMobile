<template>
<q-card
  class='flex column items-center justify-center text-white'
  flat
  v-touch-swipe.mouse.right.left='handleSwipe'
>
  <q-card-section class='text-center'>
    <div class='name'>
        {{testPointsArray[currentPoint].name}}
    </div>

    <div class='description'>
      {{testPointsArray[currentPoint].description}}
    </div>
  </q-card-section>

  <q-card-section>
      <q-avatar
        @click='setMark(index)'
        v-for='(index) in 5'
        :key='index'
        :class='index === testPointsArray[currentPoint].currentMark ?
            "selected-point" :
            ""'
      >
        {{index}}
      </q-avatar>
  </q-card-section>

  <q-card-section class='q-mt-lg flex justify-between full-width'>
    <q-icon @click='currentPoint -= 1' name="chevron_left"/>
    <q-icon @click='currentPoint += 1' name="chevron_right"/>
  </q-card-section>
</q-card>
</template>

<script lang='ts'>
import { Point } from 'src/types/Point';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'PointSlider',
  setup() {
    const currentPoint = ref(0)
    const testPointsArray = [
      {
        name: 'Бизнес-составляющая',
        description: 'Оригинальность подхода,' +
          'подготовка выступления',
        currentMark: 5
      },
      {
        name: 'Креативность',
        description: 'Оригинальность подхода,' +
          'подготовка выступления',
        currentMark: 3
      }
    ] as Array<Point>

    return {
      currentPoint,
      testPointsArray,

      setMark(newMark : number){
        testPointsArray[currentPoint.value].currentMark = newMark;
        currentPoint.value += 1;
      },

      handleSwipe({evt,...newInfo}) {
        if(newInfo.direction === 'right') {
          currentPoint.value += 1
        } else {
          currentPoint.value -= 1
        }
      }
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
