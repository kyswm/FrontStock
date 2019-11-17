<template>
  <div>
    <div v-for="post in posts" class="c-postListTitle">
      <h3>
        <a v-bind:href="post.path">{{post.title}}</a>
      </h3>
      <time>{{post.frontmatter.date.slice(0, 10) }}</time>
      <!-- <p>{{post.frontmatter.description}}</p> -->
      <!-- <a v-bind:href="post.path">続きを読む</a> -->
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    posts() {
      const categoryAdd = "html";
      return (
        this.$site.pages
          // htmlディレクトリ以下を投稿記事一覧表示の対象とする
          .filter(
            post =>
              post.path.startsWith("/posts/" + categoryAdd + "/") &&
              !post.path.endsWith("/" + categoryAdd + "/")
          )
          // dateに設定した日付の降順にソートする
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          )
      );
    }
  }
};
</script>
