<template>
  <div class="table-example">
    <h3>Table</h3>
    <mui-table :data-source="items" expandable selectable :sort-by="sortBy" :sort-direction="sortDirection" @sort="onSort">
      <template slot="cols">
        <mui-table-col name="test-number" sortable>
          <template slot="head">Test Number</template>
          <template slot="cell" slot-scope="{ data }">{{ data.studentTestNumber }}</template>
        </mui-table-col>
        <mui-table-col name="first-name" sortable>
          <template slot="head">First Name</template>
          <template slot="cell" slot-scope="{ data }">{{ data.studentFirstName }}</template>
        </mui-table-col>
        <mui-table-col name="last-name" sortable>
          <template slot="head">Last Name</template>
          <template slot="cell" slot-scope="{ data }">{{ data.studentLastName }}</template>
        </mui-table-col>
      </template>
      <template slot="info" slot-scope="{ data }">{{ data }}</template>
    </mui-table>
    <mui-paginator :index="pageIndex" :size="pageSize" :count="itemsCount" @page="onPage" />
  </div>
</template>

<script>
export default {
  name: 'table-example',
  data() {
    return {
      sortBy: 'test-number',
      sortDirection: 'asc',
      pageIndex: 0,
      pageSize: 25,
      itemsCount: 111,
      items: [
        {
          studentScoringId: 2248,
          studentGroupId: 296,
          studentId: 5444,
          studentFirstName: 'John',
          studentLastName: 'Smith',
          studentTestNumber: '213423423',
          grade: '08',
          scoringStatus: 'Submitted',
        },
        {
          studentScoringId: 2249,
          studentGroupId: 296,
          studentId: 5445,
          studentFirstName: 'Paul',
          studentLastName: 'Brown',
          studentTestNumber: '234234342',
          grade: '08',
          scoringStatus: 'Submitted',
        },
        {
          studentScoringId: 2250,
          studentGroupId: 296,
          studentId: 5446,
          studentFirstName: 'Bob',
          studentLastName: 'First',
          studentTestNumber: '452342342',
          grade: '09',
          scoringStatus: 'Submitted',
        },
        {
          studentScoringId: 2251,
          studentGroupId: 296,
          studentId: 3889,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05001',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2252,
          studentGroupId: 296,
          studentId: 3890,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05002',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2253,
          studentGroupId: 296,
          studentId: 3891,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05003',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2254,
          studentGroupId: 296,
          studentId: 3892,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05004',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2255,
          studentGroupId: 296,
          studentId: 3893,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05005',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2256,
          studentGroupId: 296,
          studentId: 3894,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05006',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2257,
          studentGroupId: 296,
          studentId: 3895,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05007',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2258,
          studentGroupId: 296,
          studentId: 3896,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05008',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2259,
          studentGroupId: 296,
          studentId: 3897,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05009',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2260,
          studentGroupId: 296,
          studentId: 3898,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05010',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2261,
          studentGroupId: 296,
          studentId: 3899,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05011',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
        {
          studentScoringId: 2262,
          studentGroupId: 296,
          studentId: 3900,
          studentFirstName: 'StudentFirst',
          studentLastName: 'StudentLast',
          studentTestNumber: 'STU05012',
          grade: '05',
          scoringStatus: 'NotStarted',
        },
      ],
    };
  },
  methods: {
    onSort({ by, direction }) {
      this.sortBy = by;
      this.sortDirection = direction;
    },
    onPage({ index, size }) {
      this.pageIndex = index;
      this.pageSize = size;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>