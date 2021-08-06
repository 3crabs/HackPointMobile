<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class='q-pa-lg flex items-center justify-center'>
          <div style='max-width: 400px'>
            <div class='flex justify-center'>
              <q-img class='logo' src="logo.png"/>
            </div>

            <div class='main-text'>
              <p class='top-text'>Добро пожаловать!</p>

              <p class='bottom-text'>HackPoint - оценОчка проектов твоего
                хакатона на кончиках пальцев</p>
            </div>

            <q-form @submit.prevent.stop="onSubmit" style='width: 100%;'>
              <q-input ref='loginRef' v-model='login' type='email' stack-label label-slot :rules='loginRules' autofocus>
                <template v-slot:append>
                  <q-icon name='o_mail'/>
                </template>

                <template v-slot:label>
                  <span class='input-label'>Логин</span>
                </template>
              </q-input>

              <q-input v-model='password' type='password' stack-label label-slot>
                <template v-slot:append>
                  <q-icon name='o_lock'/>
                </template>

                <template v-slot:label>
                  <span class='input-label'>Пароль</span>
                </template>
              </q-input>

              <div class='q-mt-sm text-red text-center error-message'>{{errorMessage}}</div>

              <q-btn class='login-button' label='Вход' type='submit' color='primary' unelevated no-caps/>
            </q-form>
          </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue';
import {useRouter} from 'vue-router'

export default defineComponent({
  setup() {
    const login = ref(null);
    const loginRef = ref(null);

    const password = ref(null);

    const errorMessage = ref(null);

    const router = useRouter()


    return {
      login,
      loginRef,
      loginRules: [
          (val: string | null) => (val !== null && val !== '') || 'Пожалуйста, введите свой логин'
      ],

      password,

      errorMessage,

      async onSubmit() {
        loginRef.value.validate();
        if(loginRef.value.hasError) {
          return
        } else {
          await router.push('/')
        }

      }

    }
  }
});
</script>

<style scoped>
.logo{
  width: 70%;
}
.main-text{
  text-align: center;
}
.top-text{
  font-weight: 600;
  font-size: 26px;
}
.error-message{
  min-height: 30px;
}
.bottom-text{
  font-weight: 400;
  font-size: 14px;
  color: #B5B5BE;
}
.input-label{
  color: #D5D5DC
}
.login-button{
  border-radius: 10px;
  width: 100%;
}
</style>
