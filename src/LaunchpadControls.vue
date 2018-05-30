// LaunchpadControls.vue
<template>
    <div id="launchpad-control-row" class="launchpad-control" @click="toggleKeys" @keyup="playSynth">
        <button id="launchpad-control" class="launchpad-control">Press here to control keymapping</button>
        <button id="launchpad-control2" class="launchpad-control">Random button to fill up space</button>
        <button id="launchpad-control3" class="launchpad-control">Press here for other stuff yea?</button>
    </div>
</template>

<script>
import Launchpad from './Launchpad'
export default {
    name: 'LaunchpadControls',
    data () {
        return {
            message: '',
            useKeys: false
        }
    },
    methods: {
        toggleKeys: function() {
            this.useKeys = !this.useKeys;
        },
        playSynth: function() {
            const $ = require('jquery');

            // Read JSON files 
            $.getJSON('/static/samples.json', function(data) {
              console.log("data");  
            })
        }
    }
}
</script>

<style>

div.launchpad-control {
    padding-left: 10px;
    padding-bottom: 20px;
    margin-top: 10px;
    margin-left: 477px;
    margin-right: 440px;
    background: #2F4942;
    border-radius: 8px;
    border-bottom: #3E6057 7px solid;
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
  outline:none;
}
button.launchpad-control:hover {
    background: #23FCD1;
}
</style>