<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2 class="text-center">House Information</h2>
        <form method="POST" @submit.prevent="saveHouse()">
          <div class="row">
            <div class="col-md-3">House Name <sup>*</sup></div>
            <div class="col-md-9">
              <input type="text" v-model="name" class="form-control" required />
            </div>
          </div>

          <div class="mt-3"></div>

          <div class="row">
            <div class="col-md-3">House Color<sup>*</sup></div>
            <div class="col-md-9">
              <input
                type="text"
                v-model="color"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="mt-3"></div>

          <div class="row">
            <div class="col-md-3">Head Boy<sup>*</sup></div>
            <div class="col-md-9">
              <input
                type="text"
                v-model="head_boy"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="mt-3"></div>

          <div class="row">
            <div class="col-md-3">Head Girl<sup>*</sup></div>
            <div class="col-md-9">
              <input
                type="text"
                v-model="head_girl"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="mt-3"></div>

          <div class="row">
            <div class="col-md-3">Sport H.Boy<sup>*</sup></div>
            <div class="col-md-9">
              <input
                type="text"
                v-model="sport_head_boy"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="mt-3"></div>

          <div class="row">
            <div class="col-md-3">Sport H.Girl<sup>*</sup></div>
            <div class="col-md-9">
              <input
                type="text"
                v-model="sport_head_girl"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="mt-3"></div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <input class="btn btn-secondary me-md-2" type="reset" />
            <input class="btn btn-success" type="submit" />
          </div>
        </form>
      </div>

       <div class="col-md-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">House Name</th>
              <th scope="col">House Color</th>
              <th scope="col">Head Boy</th>
              <th scope="col">Head Girl</th>
              <th scope="col">Sport H.Boy</th>
              <th scope="col">Sport H.Girl</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(house, i) in house" :key="i">
              <td>{{ house.name }}</td>
              <td>{{ house.color }}</td>
              <td>{{ house.head_boy }}</td>
              <td>{{ house.head_girl }}</td>
              <td>{{ house.sport_head_boy }}</td>
              <td>{{ house.sport_head_girl }}</td>
              <td><a :href="`#/house-details/${house._id}`"> view  </a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import houseDataService from "../services/houseDataService";
export default {
  data() {
    return {
      house: [],
    };
  },

  methods: {
    // 1
    async saveHouse() {
      var house = {
        name: this.name,
        color: this.color,
        head_boy: this.head_boy,
        head_girl: this.head_girl,
        sport_head_boy: this.sport_head_boy,
        sport_head_girl: this.sport_head_girl,
      };
      console.log(house);
      await houseDataService.create(house);
      this.$router.go();
    },
    //

    // 2
    async gethouse() {
      const response = await houseDataService.getAll();
      console.log(response.data);
      this.house = response.data;
    },
  },
  mounted() {
    this.gethouse();
  },
};
</script>

<style>
</style>