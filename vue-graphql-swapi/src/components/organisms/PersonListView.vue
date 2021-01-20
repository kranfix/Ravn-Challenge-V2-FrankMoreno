<template>
  <div>
    <div v-for="edge in peopleEdges" :key="edge.cursor">
      <div v-on:click="select(edge.node)">
        <person-cell :person="edge.node"/>
      </div>
    </div>
    <loading-cell v-if="isLoading"/>
    <noticed-cell v-if="hasError"/>
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
    __typename
    pageInfo {
      __typename
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ...PersonData
      }
    }
  }
}

fragment PersonData on Person {
  __typename
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
      variables: {
        first: 5
      },
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
      isLoading: true,
      hasError: false
    }
  },
  computed: {
    peopleEdges() {
      return this.allPeople?.edges ?? []
    }
  },
  mounted() {
    setTimeout(() => this.fetchMore(), 1500)
  },
  methods: {
    select(person) {
      this.$emit('selection', person)
    },
    async fetchMore() {
      this.isLoading = true
      this.hasError = false
      try {
        await this.$apollo.queries.allPeople.fetchMore({
          variables: {
            first: 5,
            after: this.allPeople.pageInfo.endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            return {
              allPeople: {
                __typename: fetchMoreResult.allPeople.__typename,
                pageInfo: {
                  __typename: previousResult.allPeople.pageInfo.__typename,
                  ...fetchMoreResult.allPeople.pageInfo,
                  startCursor: previousResult.allPeople.pageInfo.startCursor
                },
                edges: [
                  ...previousResult.allPeople.edges,
                  ...fetchMoreResult.allPeople.edges
                ]
              },
            }
          },
        })
        this.isLoading = false
        this.hasError = false
      } catch(_) {
        this.isLoading = false
      this.hasError = true
      }
    }
  }
}
</script>
