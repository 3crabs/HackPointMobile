<template>
  <swiper
    :space-between="50"
    @swiper="onSwiper"
  >
    <swiper-slide
      v-for='point in testPointsArray' :key='point.name'>
      <q-card
        class='flex column items-center justify-center text-white'
        flat
      >
        <q-card-section class='text-center'>
          <div class='name'>
            {{point.name}}
          </div>

          <div class='description'>
            {{point.description}}
          </div>
        </q-card-section>

        <q-card-section>
          <q-avatar
            @click='setMark(index)'
            v-for='(index) in 5'
            :key='index'
            :class='index === point.currentMark ?
              "selected-point" :
              ""'
          >
            {{index}}
          </q-avatar>
        </q-card-section>
<!-- TODO Заглушечка на 80 процентов -->
        <q-card-section class='q-mt-lg flex justify-between' style='width: 80%;'>
          <q-icon @click='turnLeft' name="chevron_left"/>
          <q-icon @click='turnRight' name="chevron_right"/>
        </q-card-section>
      </q-card>

    </swiper-slide>

    <swiper-slide>
      <q-card
        class='flex column items-center justify-center finished-point'
        flat
      >
        <q-card-section class='text-bold'>
          Больше критериев нет
        </q-card-section>

        <q-card-section class=''>
          <q-btn class='' label='Закончить' flat no-caps/>
        </q-card-section>
      </q-card>
    </swiper-slide>
  </swiper>
  <div class='q-mt-lg text-bold notes'>
    Заметки
  </div>

  <q-input class='q-mt-md' borderless type='textarea' placeholder='Здесь можно писать'/>
</template>

<script lang='ts'>
import { Point } from 'src/types/Point';
import { defineComponent, ref } from 'vue';

import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper.scss';

export default defineComponent({
  name: 'PointSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const currentPoint = ref(0)

    const swiperComponent = ref<unknown>(null)
    const testPointsArray = ref <Array<Point>>([
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
    ])

    const turnRight = () => {
      if (swiperComponent.value.activeIndex < testPointsArray.value.length) {
        swiperComponent.value.slideTo(Number(swiperComponent.value.activeIndex) + 1)
      }
    }

    const turnLeft = () => {
      if (swiperComponent.value.activeIndex > 0) {
        swiperComponent.value.slideTo(Number(swiperComponent.value.activeIndex) - 1)
      }
    }

    const setMark = (newMark : number) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      testPointsArray.value[swiperComponent.value.activeIndex].currentMark = newMark;
      turnRight()
    }


    const onSwiper = (swiper: unknown) => {
      swiperComponent.value = swiper
    }

    return {
      currentPoint,
      testPointsArray,

      swiperComponent,

      setMark,
      turnLeft,
      turnRight,

      onSwiper,

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
