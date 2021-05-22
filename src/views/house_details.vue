<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{house.name}}</h5>

            <div class="container">
              <div class="row">
                <div class="col-md-3 font-weight-bold">Color</div>
                <div class="col-md-9"> {{house.color}} </div>
              </div>

              <div class="mt-3"></div>

              <div class="row">
                <div class="col-md-3 font-weight-bold">Head Boy</div>
                <div class="col-md-9">{{house.head_boy}}</div>
              </div>

              <div class="mt-3"></div>

              <div class="row">
                <div class="col-md-3 font-weight-bold">Head Girl</div>
                <div class="col-md-9">{{house.head_girl}}</div>
              </div>

              <div class="mt-3"></div>

              <div class="row">
                <div class="col-md-3 font-weight-bold">Sport Head Boy</div>
                <div class="col-md-9">{{house.sport_head_boy}}</div>
              </div>

              <div class="mt-3"></div>

              <div class="row">
                <div class="col-md-3 font-weight-bold">Sport Head Girl</div>
                <div class="col-md-9">{{house.sport_head_girl}}</div>
              </div>
            </div>

            <div class="mt-3"></div>

            <a href="#/house" class="btn btn-primary">Back</a>

            <button type="button" class="btn btn-danger">Delete</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import houseDataService from "../services/houseDataService";
export default {
  data() {
    return {
      house: {},
    };
  },
  methods: {
    async getHouse(id) {
      const response = await houseDataService.get(id);
      console.log(response.data);
      this.house = response.data;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getHouse(id);
  },
};
</script>

<style>
</style>