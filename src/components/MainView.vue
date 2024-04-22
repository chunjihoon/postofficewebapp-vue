<template>
    <div>
      <div class="header">
        <h1>상품목록</h1>
      </div>
      <div class="main">
        <div id="toggleGoodsTypeArea">
          <button
            id="yegum"
            class="toggleGoodsTypeBtn active"
            v-on:click="toggleGoodsType('yegum')"
          >
            예금
          </button>
          <button id="card" class="toggleGoodsTypeBtn" v-on:click="toggleGoodsType('card')">
            카드
          </button>
          <button id="bohum" class="toggleGoodsTypeBtn" v-on:click="toggleGoodsType('bohum')">
            보험
          </button>
          <button id="fund" class="toggleGoodsTypeBtn" v-on:click="toggleGoodsType('fund')">
            펀드
          </button>
        </div>
        <div id="jb-division-line"></div>
  
        <div id="showGoodsList">
          <div id="yegumList">
            <div id="bannerArea">
              <p>예금상품 관련 배너 표출</p>
            </div>
            <div id="yegumListArea">
              <label><h2 class="goodsListTitle">예금상품</h2></label>
              <div id="yegumList">
                <button class="goodsOneCell" v-for="item in yegumList" v-bind:key="item" v-on:click="tapGoodsCellOne(item[0])">
                  <h4>{{ item[0] }}</h4>
                  <p>{{ item[1] }}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>Footer</p>
      </div>
    </div>
  </template>
  
  <script>
  const ref = require('vue');
  export default {
    data() {
      return {
        yegumList: [
          ['예금상품1', '예금상품1의 상세설명입니다.'],
          ['예금상품2', '예금상품2의 상세설명입니다.'],
          ['예금상품3', '예금상품3의 상세설명입니다.'],
          ['예금상품4', '예금상품4의 상세설명입니다.'],
          ['예금상품5', '예금상품5의 상세설명입니다.'],
          ['예금상품6', '예금상품6의 상세설명입니다.']
        ]
      }
    },
    methods: {
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
  body {
    padding-top: 70px;
  }
  </style>