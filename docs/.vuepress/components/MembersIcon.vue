<template>
  <div class="membersIcon">
    <ul class="membersIcon__items">
      <li class="membersIcon__item" v-for="member in members">
        <div class="membersIcon__imgWrap">
          <img class="membersIcon__img" :src="member.src" alt />
        </div>
        <p class="membersIcon__name">{{ member.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        { src: "", name: "藤井" },
        { src: "", name: "井芹" },
        { src: "", name: "小山" },
        { src: "", name: "藤井" },
        { src: "", name: "藤井" },
        { src: "", name: "藤井" },
        { src: "", name: "藤井" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.membersIcon {
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
  }
  &__item {
    margin: 16px;
    text-align: center;
  }
  &__imgWrap {
    width: 140px;
    height: 140px;
    background-color: #fff;
    border-radius: 100%;
  }
}
</style>
