import axiosInstance from "@/services/http.js";
import { AxiosError } from "axios";
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

  const checkToken = async () => {
    try {
      const token_ = 'Bearer ' + token.value;
      const { data } = await axiosInstance.get('/user/verify', {
        headers: {
          Authorization: token_,
        }
      });
      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.log(error.response.data);
      } else {
        console.log('Erro desconhecido:', error);
      }
    }
  }

  return {
    token,
    user,
    setToken,
    setUser,
    checkToken
  }
})