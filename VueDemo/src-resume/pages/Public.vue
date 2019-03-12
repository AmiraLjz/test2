<template>
  <!--<div>
  <h3>个人简介（Personal profile）</h3>
  &lt;!&ndash;<p>{{msg}}</p>&ndash;&gt;
  &lt;!&ndash;<input type="text">&ndash;&gt;
  <img class="photo" src-resume="../../static/imgs/Pokemon1.jpg" alt="">
  <section class="dis3">
    <a href="https://github.com/AmiraLjz">
      <img src-resume="../../static/imgs/git.gif" class="img1" title="github">
    </a>
    <a href="mailto:lo1000074@outlook.com">
      <img src-resume="../../static/imgs/mail.gif" class="img2" title="mail">
    </a>
  </section>
  <section class="dis1">
    <label for="">姓名：</label>
    <strong>罗敬之</strong>
    <br>
    <label for="">手机：</label>
    <strong>18381301046</strong>
    <br>
    <label for="">邮箱：</label>
    <a href="mailto:lo1000074@outlook.com">
      <strong>lo1000074@outlook.com</strong>
    </a>
    <br>
    <label for="">毕业院校：</label>
    <strong>四川理工学院</strong>
    <br>
    <label for="">专业：</label>
    <strong>电子信息工程</strong>
    <br>
    <label for="">求职意向：</label>
    <strong>前端开发</strong>
  </section>
  <section class="dis2">
    <h4>自我评价</h4>
    <p>我是一个容易相处的人，做事积极主动、认真负责。熟悉html、css、js，能独立做出一些拥有简单效果的页面，能使用jQuery框架，了解一些linux基础,对vuejs具有一定相关的认识和能力，关注最新前沿技术。</p>
  </section>
</div>-->
  <div>
    <h3>个人简介（Personal profile）</h3>
    <img src="../../static/imgs/Pokemon1.jpg" class="photo">
    <a href="https://github.com/AmiraLjz">
      <img src="../../static/imgs/git.gif" class="git" title="github">
    </a>
    <a href="mailto:lo1000074@outlook.com">
      <img src="../../static/imgs/mail.gif" class="mail" title="mail">
    </a>
    <div class="dis1">
      <label for="">姓名：</label>
      <strong>罗敬之</strong>
      <br>
      <label for="">手机：</label>
      <strong>18381301046</strong>
      <br>
      <label for="">邮箱：</label>
      <a href="mailto:lo1000074@outlook.com">
        <strong>lo1000074@outlook.com</strong>
      </a>
      <br>
      <label for="">毕业院校：</label>
      <strong>四川理工学院</strong>
      <br>
      <label for="">专业：</label>
      <strong>电子信息工程</strong>
      <br>
      <label for="">求职意向：</label>
      <strong>前端开发</strong>
    </div>
    <div class="dis2">
      <h4>自我评价</h4>
      <p>我是一个容易相处的人，做事积极主动、认真负责。熟悉html、css、js，能独立做出一些拥有简单效果的页面，能使用jQuery框架，了解一些linux基础,对vuejs具有一定相关的认识和能力，有团队合作精神。</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    }
  }
</script>

<!--<style>
  .dis1 {
    margin: 30px 0 0 40px;
    padding: 0 0 0 10px;
    width: 260px;
    /*border: 1px dashed gray;*/
    /*background: gold;*/
    line-height: 30px;
    color: deeppink;
    position: relative;
    float: left;
    font-weight: 100;
  }

  strong {
    position: absolute;
    left: 85px;
    color: deeppink;
  }

  .dis2 p {
    text-indent: 2em;
  }

  h4 {
    text-align: center;
  }

  .dis2 {
    margin: 30px 40px 0 80px;
    position: relative;
    float: right;
    width: 200px;
    height: 220px;
    /*border: 1px dashed gray;*/
    /*background: gold;*/
    font-weight: 100;
    line-height: 25px;
  }

  .dis3{
    position: relative;
    margin: 100px;
  }

  .dis3 img {
    width: 40px;
    height: 40px;
  }

  .dis3 .img1 {
    margin: 20px 20px 0 0;
  }

  .dis3 .img2 {
    margin: 20px 20px 0 0;
  }

  .photo {
    width: 100px;
    height: 100px;
  }
</style>-->
<style>
  .photo {
    width: 150px;
    height: 150px;
  }

  .git {
    margin: 0 0 0 90px;
  }

  .mail {
    margin: 0 0 0 30px;
  }

  .git,.mail {
    width: 40px;
    height: 40px;
    display: inline-block;
    -webkit-transition: 0.5s linear;
    transition: 0.5s ease-in;
  }

  .git:hover {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    opacity: 0.5;
  }

  .mail:hover {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    opacity: 0.5;
  }

  .dis1 {
    margin: 20px 0 0;
    line-height: 30px;
    color: deeppink;
    position: relative;
    font-weight: 100;
  }

  strong {
    position: absolute;
    left: 85px;
    color: deeppink;
  }

  .dis2 {
    width: 500px;
    font-weight: 100;
    line-height: 30px;
  }

  .dis2 p {
    text-indent: 2em;
  }

  h4 {
    text-align: center;
  }
</style>
