<template>
  <div>
    <section-header text="General Information"/>
    <data-cell category="Eye Color" :value="person.eyeColor"/>
    <data-cell category="Hair Color" :value="person.hairColor"/>
    <data-cell category="Skin Color" :value="person.skinColor"/>
    <data-cell category="Birth Year" :value="person.birthYear"/>

    <section-header text="Vehicles"/>
    <template v-if="hasVehicles">
      <data-cell  v-for="v in person.vehicleConnection.vehicles" :key="v.name"
        :category="v.name" value=""/>
    </template>
    <div v-else style="padding-left: 16px; text-align: left;">
      <p>There is no vehicle</p>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../molecules/SectionHeader.vue'
import DataCell from '../molecules/DataCell.vue'
import Cell from '../atoms/Cell.vue'

export default {
  components: {
    SectionHeader,
    DataCell,
    Cell,
  },
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasVehicles(){
      return this.person.vehicleConnection.vehicles.length > 0
    }
  }
}
</script>
