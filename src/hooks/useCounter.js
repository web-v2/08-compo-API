import { ref } from "vue";

const useCounter = (initValue = 10) => {
    const nameCount = ref(initValue);
    return {
        nameCount,        
        increase: () => nameCount.value++,
        decrease: () => nameCount.value--
    }
}

export default useCounter