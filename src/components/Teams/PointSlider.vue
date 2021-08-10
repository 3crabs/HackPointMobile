<template>
  <q-card
    v-if='currentPoint !== testPointsArray.length'
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
      <q-icon @click='turnLeft' name="chevron_left"/>
      <q-icon @click='turnRight' name="chevron_right"/>
    </q-card-section>
  </q-card>

  <q-card
    v-else
    class='flex column items-center justify-center finished-point'
    flat
    v-touch-swipe.mouse.right='handleSwipe'
  >
    <q-card-section class='text-bold'>
      Больше критериев нет
    </q-card-section>

    <q-card-section class='full-width'>
      <q-btn class='full-width' label='Закончить' flat no-caps/>
    </q-card-section>
  </q-card>

  <div class='q-mt-lg text-bold notes'>
    Заметки
  </div>

  <q-input class='q-mt-md' borderless type='textarea' placeholder='Здесь можно писать'/>
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

    const turnRight = () => {
      if (currentPoint.value < testPointsArray.length) {
        currentPoint.value += 1
      }
    }

    const turnLeft = () => {
      if (currentPoint.value > 0) {
        currentPoint.value -=1
      }
    }


    return {
      currentPoint,
      testPointsArray,
      turnLeft,
      turnRight,

      setMark(newMark : number){
        testPointsArray[currentPoint.value].currentMark = newMark;
        currentPoint.value += 1;
      },

      handleSwipe({...newInfo}) {
        if(newInfo.direction === 'right') {
          turnLeft()
        } else {
          turnRight()

        }
      }
    }
  }
});
</script>

<style lang='scss' scoped>
.q-textarea{
  background: white;
  border-radius: 20px;
  padding: 0 20px 0 20px;
}
.q-card{
  background: linear-gradient(128.88deg, #0062FF 15.57%, #021B79 114.08%);
  border-radius: 20px;
  height: 50vh;

  .q-icon {
    cursor: pointer;
  }
}
.finished-point{
  background: white;
  font-size: 18px;

  .q-btn{
    background: #0062FF;
    border-radius: 10px;
    font-size: 12px;
    color: white;
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
