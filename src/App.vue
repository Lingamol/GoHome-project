<template>
  <div :id="$style.app">
    <AppHeader />
    <ContentApp>sdfghgfdsasdf</ContentApp>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header/Header';
import AppFooter from './components/Footer/Footer';
import ContentApp from './components/Shared/ContentApp';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    ContentApp,
  },
  data() {
    return {};
  },
};
</script>
<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
/* .content {
  background-color: rgb(10, 5, 83);
  flex-grow: 1;
} */
</style>
