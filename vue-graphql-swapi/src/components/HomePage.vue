<template>
  <div>
    <div class="sidebar">
      <person-list-view @selection="show($event)"/>
    </div>

    <div class="content">
      <person-detail-view v-if="person != null" :person="person"/>
    </div>
  </div>
</template>

<script>
import PersonListView from './organisms/PersonListView.vue'
import PersonDetailView from './organisms/PersonDetailView.vue'

export default {
  components:{
    PersonListView,
    PersonDetailView,
  },
  data() {
    return {
      person: null,
    }
  },
  methods: {
    show(person){
      this.person = person
    }
  }
}
</script>

<style scoped>
.appbar {
  background-color: var(--rv-black);
  color: white;
  text-align: left;
  padding: 16px 33px 16px 33px;
  font-size: 17;
  font-weight: bold;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 350px;
  position: fixed;
  height: 100%;
  overflow: auto;
  border-right: 1px solid var(--rv-light);
}

.content {
  margin-left: 350px;
  height: 1000px;
}
</style>