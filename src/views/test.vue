<template>
  <!doctype html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <title>항공 예매</title>
    </head>

    <body>
      <div class="header">
        <h1>TEST</h1>
      </div>

      <div class="main">
        <div id="jb-division-line"></div>

        <div id="showGoodsList">
          <div id="yegumList">
            <!-- <div id="bannerArea">
                  <p>예금상품 관련 배너 표출</p>
                </div> -->
            <div id="yegumListArea">
              <label><h2 class="goodsListTitle">TEST 화면입니다.</h2></label>
              <div id="yegumList">
                <button
                  class="testOneCell"
                  v-for="item in testList"
                  v-on:click="apiCallTest(item[2])"
                >
                  <h4>{{ item[0] }}</h4>
                  <p>{{ item[1] }}</p>
                  <p>{{ item[2] }}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <p>Footer</p>
      </div>
    </body>
  </html>
</template>

<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      dataFromServer: Array(),
      testList: [
        [
          '예금상품 API CALL',
          '과학기술정보통신부 우정사업본부_우체국 예금상품 정보조회 서비스',
          'https://apis.data.go.kr/1721301/KrpostDepositProductView/DepositGoods?serviceKey=XNZ%2B3y9DDKG0QcopsDHzEku5S8Oficx48xZDQzHIp9n%2FdmgZEmHgQntwWFVTcMo%2BOk0%2FcufAhvPok7du2IfGOw%3D%3D&numOfRows=5&pageNo=1'
        ],
        [
          '카드상품 API CALL',
          '과학기술정보통신부 우정사업본부_우체국 체크카드상품 정보조회 서비스',
          'https://apis.data.go.kr/1721301/KrpostCardProductView/CheckcardGoods?serviceKey=XNZ%2B3y9DDKG0QcopsDHzEku5S8Oficx48xZDQzHIp9n%2FdmgZEmHgQntwWFVTcMo%2BOk0%2FcufAhvPok7du2IfGOw%3D%3D&numOfRows=5&pageNo=1'
        ],
        [
          '보험상품 API CALL',
          '과학기술정보통신부 우정사업본부_우체국 보험상품정보 조회 서비스',
          'https://apis.data.go.kr/1721301/KrpostInsuranceProductView/InsuranceGoods?serviceKey=XNZ%2B3y9DDKG0QcopsDHzEku5S8Oficx48xZDQzHIp9n%2FdmgZEmHgQntwWFVTcMo%2BOk0%2FcufAhvPok7du2IfGOw%3D%3D&GDS_NM=1'
        ],
        [
          '펀드상품 API CALL',
          '과학기술정보통신부 우정사업본부_우체국 펀드상품 정보조회 서비스',
          'https://apis.data.go.kr/1721301/KrpostFundProductView/FundProducts?serviceKey=XNZ%2B3y9DDKG0QcopsDHzEku5S8Oficx48xZDQzHIp9n%2FdmgZEmHgQntwWFVTcMo%2BOk0%2FcufAhvPok7du2IfGOw%3D%3D&numOfRows=5&pageNo=1'
        ]
      ]
    }
  },
  methods: {
    apiCallTest(selectedItem) {
      //   alert('selectedItem: ' + selectedItem)
      //console.log(selectedItem)
      this.dataFromServer = []
      this.$axios
        .get(selectedItem)
        .then((response) => {
          this.dataFromServer = response.data.response.body.items.item
          //   console.log(this.dataFromServer.length)
          for (let index = 0; index < this.dataFromServer.length; index++) {
            console.log(this.dataFromServer[index])
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    /// 개별 상품 선택시 처리
    tapGoodsCellOne(selectedItem) {
      alert('selectedItem: ' + selectedItem)
    },
    /// 상품 종류 토글 처리
    toggleGoodsType(selectedType) {
      var buttons = document.querySelectorAll('.toggleGoodsTypeBtn')
      buttons.forEach(function (button) {
        if (button.id === selectedType) {
          button.classList.add('active')
        } else {
          button.classList.remove('active')
        }
      })
    }
  }
}
</script>

<style scoped>
.testOneCell {
  text-align: left;
  padding: 10px;
  padding-left: 15px;
  margin-top: 10px;
  width: 100%;
  /* height: 50px; */
  color: #949494;
  background-color: white;
  border: none;
  border-radius: 10px;
}
</style>
