import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'));
  const user = ref(JSON.parse(localStorage.getItem('user')|| 'null'));

  const setToken = (tokenValue: string) => {
    localStorage.setItem('token', tokenValue)
    token.value = tokenValue;
  }

  const setUser = (userValue:string) => {
    localStorage.setItem('user', JSON.stringify(userValue))
    user.value = userValue;
  }

  return {
    setToken,
    setUser
  }
})