<template>
  <div>
    <b-button id="show-btn" @click="showModal">{{title}}</b-button>
    <b-modal ref="my-modal" hide-footer title>
        <div v-if="data_page === 0">
            <div class="d-block text-left">
                <h2>
                Редактирование
                персональной
                информации
                </h2>
            </div>
            <p class="modalSubTitle">Подтвердите смену данных вашего профиля</p>
            <div class="buttonsBlock">
                <button class="signIn" @click="confirm">Подтвердить 
                    <span class="arrowLeft">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.78279 6.45372L1.72295 0.223657C1.5828 0.0794465 1.3957 0 1.1962 0C0.996706 0 0.809609 0.0794465 0.669453 0.223657L0.223188 0.682352C-0.0671999 0.981244 -0.0671999 1.46703 0.223188 1.76547L5.31178 6.9971L0.217542 12.2345C0.0773851 12.3787 0 12.571 0 12.776C0 12.9812 0.0773851 13.1734 0.217542 13.3178L0.663807 13.7763C0.804074 13.9206 0.99106 14 1.19056 14C1.39005 14 1.57715 13.9206 1.71731 13.7763L7.78279 7.54059C7.92328 7.39592 8.00044 7.20277 8 6.99744C8.00044 6.79131 7.92328 6.59827 7.78279 6.45372Z" fill="#58FFFF"/>
                        </svg>
                    </span>
                </button>
                <button class="closeBtn" @click="hideModal">Отменить изменения</button>
            </div>
        </div>


        <div v-if="data_page === 1">
            <div class="d-block text-left">
                <h2>
                    Подтвердите новые данные
                
                </h2>
            </div>
                <p  v-if="rol === 2" class="modalSubTitle">На ваш номер {{title}} отправлено СМС сообщение с кодом.</p>
                <p  v-if="rol === 3" class="modalSubTitle">на ваш адрес электронный почты {{title}} отправлено СМС </p>
                <input class="cmcName" v-model="cod" placeholder="СМС">

            <p class="timerText">
                Запросить через <span class="timerSpan">0:{{taimer}}</span>  
            </p>
            <p class="textForgetCmc">
                Не приходит СМС?
            </p>
            <div class="buttonsBlock">
                <button class="signIn" @click="confirm_2">Подтвердить 
                    <span class="arrowLeft">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.78279 6.45372L1.72295 0.223657C1.5828 0.0794465 1.3957 0 1.1962 0C0.996706 0 0.809609 0.0794465 0.669453 0.223657L0.223188 0.682352C-0.0671999 0.981244 -0.0671999 1.46703 0.223188 1.76547L5.31178 6.9971L0.217542 12.2345C0.0773851 12.3787 0 12.571 0 12.776C0 12.9812 0.0773851 13.1734 0.217542 13.3178L0.663807 13.7763C0.804074 13.9206 0.99106 14 1.19056 14C1.39005 14 1.57715 13.9206 1.71731 13.7763L7.78279 7.54059C7.92328 7.39592 8.00044 7.20277 8 6.99744C8.00044 6.79131 7.92328 6.59827 7.78279 6.45372Z" fill="#58FFFF"/>
                        </svg>
                    </span>
                </button>
                <button class="closeBtn" @click="hideModal">Отменить изменения</button>
            </div>
        </div>

        <div v-if="data_page === 2">
            <div class="d-block text-left">
                <h2>
                    Изменить 
                    <span  v-if="rol === 0">имя</span>
                    <span  v-if="rol === 1">фамилия</span>
                    <span  v-if="rol === 2">номер телелфон</span>
                    <span  v-if="rol === 3">электронный адрес</span>
                    <span  v-if="rol === 4">город</span>
                    <span  v-if="rol === 5">улицу</span>
                    <span  v-if="rol === 6">номер дома</span>
                    <span  v-if="rol === 7">номер паспорта</span>
                    <span  v-if="rol === 8">адрес паспорта</span>
                    <span  v-if="rol === 9">дата паспорта</span>
                    <span  v-if="rol === 10">город где длай паспорт</span>
                </h2>
            </div>
            <p class="modalSubTitle">Введите ваш новый 
                    <span  v-if="rol === 0">имя</span>
                    <span  v-if="rol === 1">фамилия</span>
                    <span  v-if="rol === 2">номер телелфон</span>
                    <span  v-if="rol === 3">электронный адрес</span>
                    <span  v-if="rol === 4">город</span>
                    <span  v-if="rol === 5">улицу</span>
                    <span  v-if="rol === 6">номер дома</span>
                    <span  v-if="rol === 7">номер паспорта</span>
                    <span  v-if="rol === 8">адрес паспорта</span>
                    <span  v-if="rol === 9">дата паспорта</span>
                    <span  v-if="rol === 10">город где длай паспорт</span>
                 для редактирования</p>
            <input class="cmcName" v-model="new_data" placeholder="данные">
            <div class="buttonsBlock">
                <button class="signIn" @click="next"> Далее
                    <span class="arrowLeft">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.78279 6.45372L1.72295 0.223657C1.5828 0.0794465 1.3957 0 1.1962 0C0.996706 0 0.809609 0.0794465 0.669453 0.223657L0.223188 0.682352C-0.0671999 0.981244 -0.0671999 1.46703 0.223188 1.76547L5.31178 6.9971L0.217542 12.2345C0.0773851 12.3787 0 12.571 0 12.776C0 12.9812 0.0773851 13.1734 0.217542 13.3178L0.663807 13.7763C0.804074 13.9206 0.99106 14 1.19056 14C1.39005 14 1.57715 13.9206 1.71731 13.7763L7.78279 7.54059C7.92328 7.39592 8.00044 7.20277 8 6.99744C8.00044 6.79131 7.92328 6.59827 7.78279 6.45372Z" fill="#58FFFF"/>
                        </svg>
                    </span>
                </button>
                <button class="closeBtn" @click="hideModal">Отменить изменения</button>
            </div>
        </div>
    </b-modal>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  props: ["title","rol"],
    data() {
        return {
            data_page: 0,
            error:false,
            new_data: null,
            cod: '',
            taimer:60
        };
    },
    methods: {
        ...mapActions(["changeUserData"]),
        showModal() {
            this.$refs["my-modal"].show();
        },
        hideModal() {
            this.data_page = 0 ;
            this.$refs["my-modal"].hide();
        },
        confirm() {
            if(this.rol == 2 || this.rol == 3){
                const self = this 
                const interval = setInterval(function() {
                    self.taimer = self.taimer-1;
                    
                    if(self.taimer == 0){
                        self.taimer = 60;
                        if(self.data_page != 2){
                            self.data_page = 0;
                        }
                        clearInterval(interval);
                    }
                }, 1000);
                this.data_page = 1;
            }else{
                this.data_page = 2;
            }
        },
        confirm_2(){
            if(this.cod == 1111){
                this.taimer = 2;
                this.data_page = 2; 
            }else{
                this.error = true;
            }
        },
        next(){
            let user = this.$store.getters.oneUser[0];
            if(this.rol == 0){
                user.first_name = this.new_data
            } else if (this.rol == 1) {
                user.last_name = this.new_data
            } else if (this.rol == 2) {
                user.tel = this.new_data
            } else if (this.rol == 3) {
                user.email = this.new_data
            } else if (this.rol == 4) {
                user.city = this.new_data
            } else if (this.rol == 5) {
                user.street = this.new_data
            } else if (this.rol == 6) {
                user.home = this.new_data
            } else if (this.rol == 7) {
                user.passport = this.new_data
            } else if (this.rol == 8) {
                user.city_pas_1 = this.new_data
            } else if (this.rol == 9) {
                user.data = this.new_data
            } else {
                user.city_pas_2 = this.new_data
            }
            this.changeUserData(user);
            this.data_page = 0 ;
            this.$refs["my-modal"].hide();
        }

    },
};
</script>

<style scoped>
#show-btn {
  border-radius: 0px;
  outline: none;
  margin-top: 40px;
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #58ffff;
  color: #fff;
  font-size: 17px;
  padding-bottom: 7px;
  padding-left: 0;
}
#show-btn:focus{
    box-shadow: none;
}
.arrowLeft{
    float: right;
}
.signIn {
  background-color: transparent;
  border-color: #58ffff;
  padding: 12px 20px;
  text-align: left;
  border-radius: 13px;
  color: #fff;
  font-weight: 700;
}
.buttonsBlock{
    display: inline-grid;
}
.signIn:focus {
  outline: none;
}
.closeBtn{
    border: 0;
    background-color: transparent;
    text-align: left;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    margin-top: 28px;
    line-height: 22px;
    color: #FFFFFF;
}
.closeBtn:focus{
    outline: none;
}
.cmcName{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    color: #58FFFF;
    background: transparent;
    border: none;
    width: 100%;
    border-bottom: 2px solid #58FFFF;
    padding: 10px 0 10px 0;
    margin-bottom: 24px;
    outline: none;
}
.cmcName::placeholder{
    color: #58FFFF;
}
.timerText{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}
.timerText .timerSpan{
    color: #58FFFF;
}
.textForgetCmc {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #58FFFF;
}
</style>