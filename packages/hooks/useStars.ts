import { ref } from 'vue'


export function useStars (num: number, callback: Function): Array<any> {

  const starNum = ref<number>(num)

  const setStarNum = (num: number) => {
    starNum.value = num
    callback()
  }

  return [
    starNum,
    setStarNum
  ]
}
