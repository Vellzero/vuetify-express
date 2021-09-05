<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Login
        </h1>
      </v-col>
    </v-row>
    <!--
        <form>
            ID : <input id='userid' type='text'/><br>
            비밀번호 : <input id='pwd' type='password' maxlength='5'/>
        </form>
        -->
        <h1>사용자 정보를 입력하세요.</h1>
            <form name="user" method="post" action="/regist">
              <div class="input-row">
                <label for="userid">아이디</label>
                <input id="userid" name="userid" type="text">
              </div>
              <div class="input-row">
                <label for="name">이름</label>
                <input id="name" name="name" type="text">
              </div>
              <div class="input-row">
                <label for="address">주소</label>
                <input id="address" name="address" type="text">
              </div>
              <button type="submit">전송</button>
            </form>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginWorld',
    data: () => ({
    }),
  }
</script>
