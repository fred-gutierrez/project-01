import { reactive, toRefs } from "vue";

const state = reactive({
  searchTerm: '',
})

export const useSearchStore = () => {
  return {
    ...toRefs(state)
  }
}

export const setSearchTerm = (term) => {
  state.searchTerm = term;
}
