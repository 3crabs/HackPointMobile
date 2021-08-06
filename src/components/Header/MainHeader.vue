<template>
  <q-header class='text-black bg-brand'>
       <q-icon @click='goBack' v-if='showBackButton' name='west' class='q-pa-sm icon q-pt-md'/>
       <q-icon @click='logout' name='logout' class='q-pa-sm icon float-right q-pt-md'/>
  </q-header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainHeader',
  props: {
    showBackButton: {
      type: Boolean,
      required:false,
      default: false
    }
  },
  setup() {
    const router = useRouter()
    return {
      goBack() {
        router.go(-1)
      },

      async logout() {
        await router.push('/login')
      }
    }
  }
});
</script>

<style scoped>
.icon{
  font-size: 24px;
  color: #696974;
  cursor: pointer;
}
</style>
