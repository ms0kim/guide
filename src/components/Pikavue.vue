<script setup>
import HeaderNav from './HeaderNav.vue';
</script>

<template>
  <HeaderNav />
  <div class="content">
    <h4>Pikavue 사용하기</h4>
    <img src="../assets/media/imageview.jpg" alt="" />
    <div class="solid"></div>
    <h4>가이드 확인하기</h4>
    <img src="../assets/media/guidebtn.png" id="btn" alt="" />
    <p>
      Pikavue AI Image, Pikavue AI Video 메뉴에 처음 접속하면 가이드를 확인할 수
      있습니다.<br />
      업로드하기 버튼 옆의 <b>가이드 확인하기 버튼을 클릭</b>하면 언제든지 다시
      확인할 수 있습니다.
    </p>
    <div class="solid"></div>
    <h4>업로드하기</h4>
    <img src="../assets/media/upbtn.png" id="btn" alt="" />
    <p>
      업로드하기 버튼을 누른 후 이미지를 업로드 해주세요.<br />
      준비된 필터를 취향에 맞게 사용 후 최종 업로드를 해줍니다.<br />
      더 자세한 내용은 <b>아래의 가이드를 참고</b>해주세요.
    </p>
    <div class="solid"></div>
    <h4>Pikavue AI Image Guide</h4>
    <div class="imgs">
      <img src="../assets/media/01.png" alt="" />
      <img src="../assets/media/02.png" alt="" />
    </div>
    <div class="imgs">
      <img src="../assets/media/03.png" alt="" />
      <img src="../assets/media/04.png" alt="" />
    </div>
    <div class="solid"></div>
    <h4>Pikavue AI Video Guide</h4>
    <div class="imgs">
      <img src="../assets/media/01.png" alt="" />
      <img src="../assets/media/05.png" alt="" />
    </div>
    <div class="imgs">
      <img src="../assets/media/03.png" alt="" />
      <img src="../assets/media/06.png" alt="" />
    </div>
    <div class="solid"></div>
    <h4>삭제하기</h4>
    <img src="../assets/media/imgbtn.png" id="img" alt="" />
    <p class="pbr">
      이미지 또는 동영상 리스트의 왼쪽 상단에 있는 <b>체크 버튼</b>을
      클릭하여<br />
      선택하고 싶은 파일을 선택할 수 있습니다.
    </p>
    <img src="../assets/media/allbtn.png" id="btn" alt="" />
    <img src="../assets/media/delbtn.png" id="btn" alt="" />
    <p>
      전체선택 버튼을 클릭하여 한 페이지에 있는 전체 파일을 선택할 수
      있습니다.<br />
      원하는 파일을 선택 후 삭제하기 버튼을 누르면 삭제할 수 있습니다.
    </p>
  </div>
</template>
