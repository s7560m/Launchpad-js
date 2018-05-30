// Launchpad.vue

// Make an array of buttons
<template>
    <div class="launchpad" id="launchpad">
        <div class="row-top">
            <button id="b1" class="launchpad-button">{{ Button }}</button>
            <button id="b2" class="launchpad-button">{{ Button }}</button>
            <button id="b3" class="launchpad-button">{{ Button }}</button>
            <button id="b4" class="launchpad-button">{{ Button }}</button>
            <button id="b5" class="launchpad-button">{{ Button }}</button>
        </div>
        <div class="row">
            <button id="b6" class="launchpad-button">{{ Button }}</button>
            <button id="b7" class="launchpad-button">{{ Button }}</button>
            <button id="b8" class="launchpad-button">{{ Button }}</button>
            <button id="b9" class="launchpad-button">{{ Button }}</button>
            <button id="b10" class="launchpad-button">{{ Button }}</button>
        </div>
        <div class="row">
            <button id="b11" class="launchpad-button">{{ Button }}</button>
            <button id="b12" class="launchpad-button">{{ Button }}</button>
            <button id="b13" class="launchpad-button">{{ Button }}</button>
            <button id="b14" class="launchpad-button">{{ Button }}</button>
            <button id="b15" class="launchpad-button">{{ Button }}</button>
        </div>
        <div class="row">
            <button id="b16" class="launchpad-button">{{ Button }}</button>
            <button id="b17" class="launchpad-button">{{ Button }}</button>
            <button id="b18" class="launchpad-button">{{ Button }}</button>
            <button id="b19" class="launchpad-button">{{ Button }}</button>
            <button id="b20" class="launchpad-button">{{ Button }}</button>
        </div>
        <div class="row-bottom">
            <button id="b21" class="launchpad-button">{{ Button }}</button>
            <button id="b22" class="launchpad-button">{{ Button }}</button>
            <button id="b23" class="launchpad-button">{{ Button }}</button>
            <button id="b24" class="launchpad-button">{{ Button }}</button>
            <button id="b25" class="launchpad-button">{{ Button }}</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Launchpad',
  data () {
    return {
      Button: '',
      colorChange: "red",
      GetElementInsideContainer: function(containerID, childID) {
        var elm = document.getElementById(childID);
        var parent = elm ? elm.parentNode : {};
        return (parent.id && parent.id === containerID) ? elm : {};
      }
    }
  },
  created: function() {
    
  },
  methods: {
    log: function() {
        console.log("test");
    }
  }

}
</script>
<style>
div.launchpad {
    padding-top: 50px;
    margin-left: 470px;
    margin-right: 450px;
}
div.row-top {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-top: 10px;
    padding-right: 10px;
    background: #2F4942;
    border-top: #B2BAB8 1px solid;
}
div.row {
    border-top: #2F4942 3px solid;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-top: 5px;
    padding-right: 20px;
    background: #2F4942;
    border-bottom: #2F4942 3px solid;
}
div.row-bottom {
    padding-bottom: 10px;
    padding-left: 20px;
    padding-top: 5px;
    padding-right: 20px;
    background: #2F4942;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top: #2F4942 4px solid;
    border-bottom: #3E6057 7px solid;
}
button.launchpad-button {
  margin-right: 10px;
  height: 60px;
  width: 60px;
  background: #1abc9c;
  border-bottom: #16a085 3px solid;
  border-left: #16a085 1px solid;
  border-right: #16a085 1px solid;
  border-bottom: #16a085 3px solid;
  border-radius: 6px;
  text-align: center;
  color: white;
  padding-top: 5px;
  padding-bottom: 2px;
  font-size: 12px;
  font-weight: 800;
  outline:none;
}

button:hover {
  opacity: 1;
  background: #21EDC4;
  outline:none;
}

buttom:active {
    opacity: 0.7;
    background: #21EDC4;
    outline:none;
}

button.launchpad-control {
  position: relative;
  top: 10px;
  padding-top: 20px;
  margin-right: 10px;
  height: 90px;
  width: 120px;
  background: #1abc9c;
  border-bottom: #16a085 3px solid;
  border-left: #16a085 1px solid;
  border-right: #16a085 1px solid;
  border-radius: 6px;
  text-align: center;
  color: white;
  font-size: 12px;
  font-weight: 800;
}
</style>