<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{student.name}}</h5>

            <div class="container">
              <div class="row">
                <div class="col-md-3 font-weight-bold">Age</div>
                <div class="col-md-9"> {{student.age}} </div>
              </div>

              <div class="mt-3"></div>

              <div class="row">
                <div class="col-md-3 font-weight-bold">Country</div>
                <div class="col-md-9">{{student.country}}</div>
              </div>

              <div class="mt-3"></div>

              <div class="row">
                <div class="col-md-3 font-weight-bold">Bio</div>
                <div class="col-md-9">{{student.bio}}</div>
              </div>
            </div>
             <div class="mt-3"></div>

            <a href="#/registration" class="btn btn-primary">Back</a>

            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import studentDataService from "../services/studentDataService";
export default {
  data() {
    return {
      student: {},
    };
  },
  methods: {
    async getStudent(id) {
      const response = await studentDataService.get(id);
      console.log(response.data);
      this.student = response.data;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getStudent(id);
  },
};
</script>

<style>

</style>