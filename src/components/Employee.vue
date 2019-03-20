<template>
  <div>
    <h3>Employee From</h3>
    <form>
      <p>
        <label for="">Name:</label>
        <input type="text" name="textEmployeeName">
      </p>
      <p>
        <label for="">Designation:</label>
        <input type="text" name="textEmployeeClass">
      </p>
      <p>
        <label for="">Mobile No:</label>
        <input type="text" name="textEmployeeMobile">
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
import {EventBus} from '../main'
export default {

  data () {
    return {
        message: "Default Message"
    }
  },
  methods:{

  },
  mounted(){
  EventBus.$on("emitedData",data=>{
    this.message = data;
  });
  }

}
</script>
