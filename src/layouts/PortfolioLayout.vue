<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-blue-grey-8 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-left">
          <q-avatar square size="128px">
            <img src="~assets/logo.png" width="128px" height="96px"/>
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="About me" />
        <q-route-tab to="/knowledge" label="Knowledge" />
        <q-route-tab to="/portfolio" label="Portfolio" />
        <q-route-tab to="/resume" label="Resumé" />
        <q-route-tab to="/contact" label="Contact" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PortfolioLayout',

  setup() {
    return {};
  },
};
</script>
