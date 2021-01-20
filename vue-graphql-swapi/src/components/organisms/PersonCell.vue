<template>
  <list-item-cell
    :title="person.name"
    :subtitle="subtitle"
  />
</template>

<script>
import ListItemCell from '../molecules/ListItemCell.vue'

export default {
  components: {
    ListItemCell
  },
  props: {
    person: {
      type: Object,
      required: true,
    }
  },
  computed: {
    subtitle() {
      const p = this.person
      return `${p.species?.name ?? 'Human'} from ${p.homeworld.name}`
    },
  }
}
</script>