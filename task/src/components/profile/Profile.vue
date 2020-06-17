<template>
    <div id="profile">
        <div v-for="user in oneUser" :key="user.userid+'1'">
            <b-container>
                <div class="personalData">
                    <div class="personalDataDivs">
                        <b-container>
                            <p class="personalDataTitle"> {{ $t( 'persdata') }}</p>
                            <b-row>
                                <b-col lg="4" md="6">
                                    <modalSettings v-bind:rol="0"  v-bind:title="user.first_name"></modalSettings>
                                </b-col>
                                <b-col lg="4" md="6" offset-lg="1">
                                    <modalSettings v-bind:rol="1" v-bind:title="user.last_name"></modalSettings>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <div>
                        <b-row>
                            <b-col lg="6">
                                <div class="personalDataDivs">
                                    <p class="personalDataTitle">
                                        {{ $t( 'tel') }}
                                        <span>
                                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="4.5" cy="4.5" r="4.5" fill="#58FFFF" />
                                            </svg>
                                            {{ $t( 'scses') }}
                                        </span>
                                    </p>
                                    <modalSettings v-bind:rol="2" v-bind:title="user.tel"></modalSettings>
                                </div>
                            </b-col>
                            <b-col lg="6">
                                <div class="personalDataDivs">
                                    <p class="personalDataTitle">
                                        {{ $t( 'email') }}
                                        <span>
                                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <circle cx="4.5" cy="4.5" r="4.5" fill="#58FFFF" />
                                            </svg>
                                            {{ $t( 'scses') }}
                                        </span>
                                    </p>
                                    <modalSettings v-bind:rol="3" v-bind:title="user.email"></modalSettings>
                                </div>
                            </b-col>
                        </b-row>
                        <div class="personalDataDivs">
                            <b-container>
                                <p class="personalDataTitle">{{ $t( 'addres') }}</p>
                                <b-row>
                                    <b-col lg="4" md="6">
                                        <modalSettings v-bind:rol="4" v-bind:title="user.city"></modalSettings>
                                    </b-col>
                                    <b-col lg="4" md="6" offset-lg="1">
                                        <modalSettings v-bind:rol="5" v-bind:title="user.street"></modalSettings>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="4" md="6">
                                        <modalSettings v-bind:rol="6" v-bind:title="user.home"></modalSettings>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </div>
                        <div class="personalDataDivs">
                            <b-container>
                                <p class="personalDataTitle">{{ $t( 'pasprt') }}</p>
                                <b-row>
                                    <b-col lg="4" md="6">
                                        <modalSettings v-bind:rol="7" v-bind:title="user.passport"></modalSettings>
                                    </b-col>
                                    <b-col lg="4" md="6" offset-lg="1">
                                        <modalSettings v-bind:rol="8" v-bind:title="user.city_pas_1"></modalSettings>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col lg="4" md="6">
                                        <modalSettings v-bind:rol="9" v-bind:title="user.data"></modalSettings>
                                    </b-col>
                                    <b-col lg="4" md="6" offset-lg="1">
                                        <modalSettings v-bind:rol="10" v-bind:title="user.city_pas_2"></modalSettings>
                                    </b-col>
                                </b-row>
                            </b-container>
                        </div>
                    </div>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>

import modalSettings from "./modalSettings/ModalSettings"
export default {
    name: "profile",
    data() {
        return {
            tabIndex: 0,
        };
    },
    computed:{
        oneUser() {
            return this.$store.getters.oneUser;
        },
    },
    components: {
        'modalSettings': modalSettings
    },
    methods: {
        linkClass(idx) {
            if (this.tabIndex === idx) {
                return ["bg-primary", "text-light"];
            } else {
                return ["bg-light", "text-info"];
            }
        }
    }
};
</script>

<style scoped>

.card {
    width: 100%;
    background-color: transparent;
    border: none;
}
.card-header {
    background-color: rgba(0, 0, 0, 0) !important;
    border: 0;
}
.noneBlock{
    display: none;
    background: transparent;
    border: none;
    border-bottom: 2px solid #5FCDBC;
    padding-bottom: 5px;
    color: white;
    outline: none;
}
.noneBlock option{
    background: transparent !important;
}
.personalData {
    width: 98%;
    margin-left: -0.6%;
}
.personalData .personalDataDivs {
    border: 2px solid #5fcdbc;
    border-radius: 8px;
    padding: 32px;
    margin-top: 40px;
    background: #153066;
}
.personalData button {
    outline: none;
    margin-top:40px;
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
.personalDataTitle {
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    font-family: Montserrat;
}
.personalDataTitle span svg{
	margin-right: 4px;
	margin-top: -3px;
}
.personalDataTitle span{
	font-family: Montserrat;
	font-style: normal;
	margin-left: 12px;
	font-size: 11px;
}
</style>