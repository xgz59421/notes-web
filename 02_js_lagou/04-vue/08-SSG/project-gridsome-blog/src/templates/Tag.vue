<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{$page.tag.title}}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview" v-for="post in $page.tag.posts" :key="post.id">
            <g-link :to="'/post/' + post.id">
              <h2 class="post-title">{{post.title}}</h2>
              <!-- <h3 class="post-subtitle">Problems look mighty small from 150 miles up</h3> -->
            </g-link>
            <!-- <p class="post-meta">
              Posted by
              <a href="#!">{{post.create_by.fistName + post.create_by.lastName}}</a>
              on {{post.created_at}}
            </p>
            <p>
              <span v-for="(tag, index) in post.tags" :key="index">
                <g-link :to="'/tag/' + tag.id">{{tag.title}}</g-link>
                &nbsp;
              </span>

            </p> -->
            <hr class="my-4" />
          </div>

        </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    tag: strapiTag (id: $id) {
      id
      title
      posts {
        id
        title
      }
    }
  }
</page-query>


<script>
  export default {
    name: 'TagPage'
  }
</script>