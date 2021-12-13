<template>
  <q-page padding>
    <div class="row q-ma-lg">
      <div class="col-xs-12 col-sm-3 col-md-4 col"></div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <q-card class="shadow-20">
          <q-img src="~assets/me.jpg" width="100%" ratio="1">
            <div class="absolute-bottom text-h6">Maikel Nieves Matamoros</div>
          </q-img>

          <q-card-section class="text-weight-medium">
            My name is Maikel Nieves Matamoros. I am an enthusiast, software
            developer and administrator of networks and telematics services. I
            really like heavy metal!
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-3 col-md-4 col"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
