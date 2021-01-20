<template>
  <div>
    <div v-for="edge in peopleEdges" :key="edge.cursor">
      <div v-on:click="select(edge.node)">
        <person-cell :person="edge.node"/>
      </div>
    </div>
    <loading-cell/>
    <noticed-cell/>
    {{allPeople}}
    {{$apollo}}
  </div>
</template>

<script>
import LoadingCell from '../molecules/LoadingCell.vue'
import NoticedCell from '../molecules/NoticedCell.vue'
import PersonCell from './PersonCell.vue'

import gql from 'graphql-tag'

const allPeople = gql`
query AllPeople($first: Int!, $after: String) {
  allPeople(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ...PeopleData
      }
    }
  }
}

fragment PersonData on Person {
  name
  birthYear
  eyeColor
  hairColor
  skinColor
  species{
    name
  }
  homeworld {
    name
  }
  vehicleConnection {
    vehicles {
      name
    }
  }
}`

export default {
  apollo: {
    allPeople: {
      query: allPeople,
      variables() {
        if(this.peopleEdges.length == 0){
          return {
            fisrt: 5
          }
        }
        const last = this.peopleEdges[this.peopleEdges.length - 1]
        return {
          fisrt: 5,
          after: last.cursor
        }
      }
    },
  },
  components: {
    LoadingCell,
    NoticedCell,
    PersonCell,
  },
  data() {
    return {
      allPeople: {},
      peopleEdges: [
        {
          cursor: "someCursor",
          node: {
            "name": "Luke Skywalker",
            "birthYear": "19BBY",
            "eyeColor": "blue",
            "hairColor": "blond",
            "skinColor": "fair",
            "species": null,
            "homeworld": {
              "name": "Tatooine"
            },
            "vehicleConnection": {
              "vehicles": [
                {
                  "name": "Snowspeeder"
                },
                {
                  "name": "Imperial Speeder Bike"
                }
              ]
            }
          }
        }
      ]
    }
  },
  methods: {
    select(person) {
      this.$emit('selection', person)
    }
  }
}
</script>
