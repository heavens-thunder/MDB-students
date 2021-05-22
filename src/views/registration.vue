<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2 class="text-center">Add a new student here</h2>
        <form method="POST" @submit.prevent="saveStudent()">
          <div class="row">
            <div class="col-md-3">Name <sup>*</sup></div>
            <div class="col-md-9">
              <input type="text" v-model="name" class="form-control" required />
            </div>
          </div>

          <div class="mt-3"></div>

          <div class="row">
            <div class="col-md-3">Age<sup>*</sup></div>
            <div class="col-md-9">
              <input
                type="Number"
                v-model="age"
                min="16"
                max="99"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="mt-3"></div>

          <div class="row">
            <div class="col-md-3">Country<sup>*</sup></div>
            <div class="col-md-9">
              <select
                class="form-select"
                aria-label="Default select example"
                required
                v-model="country"
              >
                <option selected value="">select...</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="russia">Russia</option>
              </select>
            </div>
          </div>

          <div class="mt-3"></div>

          <div class="row">
            <div class="col-md-3">Bio<sup>*</sup></div>
            <div class="col-md-9">
              <textarea v-model="bio" class="form-control" required />
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
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Country</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, i) in students" :key="i">
              <td>{{ student.name }}</td>
              <td>{{ student.age }}</td>
              <td>{{ student.country }}</td>
              <td><a :href="`#/student-details/${student._id}`"> view  </a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import studentDataService from "../services/studentDataService";
export default {
  data() {
    return {
      students: [],
    };
  },

  methods: {
    // 1
    async saveStudent() {
      var student = {
        name: this.name,
        age: this.age,
        country: this.country,
        bio: this.bio,
      };
      console.log(student);
      await studentDataService.create(student);
      this.$router.go();
    },
    //

    // 2
    async getStudents() {
      const response = await studentDataService.getAll();
      console.log(response.data);
      this.students = response.data;
    },
  },
  mounted() {
    this.getStudents();
  },
};
</script>

<style>
</style>