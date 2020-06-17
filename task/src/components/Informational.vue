<template>
    <div id="info">
        <div v-for="user in oneUser" :key="user.userid">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col lg="4" md="5" sm="6">
                        <div class="MyProfile">
                            <img src="./../assets/image/girl.png" class="myProfileImg" width="100px" height="100px" alt/>
                            <div>
                                <h4>{{user.first_name}} {{ user.last_name}}</h4>
                                <p>{{user.tel}}</p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
            <b-container>
                <b-dropdown class="noneBlock" v-bind:text="page">
                    <b-dropdown-item @click="getActiv(0)" href="#">{{ $t( 'nav.profile') }} <span class="float-right mr-5" v-if="profile"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8101 0.916222C12.5563 0.662366 12.1448 0.662366 11.8909 0.916222L4.10347 8.7037L1.11012 5.71035C0.856292 5.4565 0.444761 5.45652 0.19088 5.71035C-0.0629756 5.96418 -0.0629756 6.37571 0.19088 6.62957L3.64385 10.0825C3.89761 10.3363 4.30944 10.3361 4.56309 10.0825L12.8101 1.83546C13.064 1.58163 13.064 1.17008 12.8101 0.916222Z" fill="#58FFFF"/></svg></span></b-dropdown-item>
                    <b-dropdown-item @click="getActiv(1)" href="#">{{ $t( 'nav.services') }} <span class="float-right mr-5"  v-if="services"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8101 0.916222C12.5563 0.662366 12.1448 0.662366 11.8909 0.916222L4.10347 8.7037L1.11012 5.71035C0.856292 5.4565 0.444761 5.45652 0.19088 5.71035C-0.0629756 5.96418 -0.0629756 6.37571 0.19088 6.62957L3.64385 10.0825C3.89761 10.3363 4.30944 10.3361 4.56309 10.0825L12.8101 1.83546C13.064 1.58163 13.064 1.17008 12.8101 0.916222Z" fill="#58FFFF"/></svg></span></b-dropdown-item>
                    <b-dropdown-item @click="getActiv(2)" href="#">{{ $t( 'nav.messages') }} <span class="float-right mr-5"  v-if="messages"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8101 0.916222C12.5563 0.662366 12.1448 0.662366 11.8909 0.916222L4.10347 8.7037L1.11012 5.71035C0.856292 5.4565 0.444761 5.45652 0.19088 5.71035C-0.0629756 5.96418 -0.0629756 6.37571 0.19088 6.62957L3.64385 10.0825C3.89761 10.3363 4.30944 10.3361 4.56309 10.0825L12.8101 1.83546C13.064 1.58163 13.064 1.17008 12.8101 0.916222Z" fill="#58FFFF"/></svg></span></b-dropdown-item>
                    <b-dropdown-item @click="getActiv(3)" href="#">{{ $t( 'nav.documents') }} <span class="float-right mr-5"  v-if="documents"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8101 0.916222C12.5563 0.662366 12.1448 0.662366 11.8909 0.916222L4.10347 8.7037L1.11012 5.71035C0.856292 5.4565 0.444761 5.45652 0.19088 5.71035C-0.0629756 5.96418 -0.0629756 6.37571 0.19088 6.62957L3.64385 10.0825C3.89761 10.3363 4.30944 10.3361 4.56309 10.0825L12.8101 1.83546C13.064 1.58163 13.064 1.17008 12.8101 0.916222Z" fill="#58FFFF"/></svg></span></b-dropdown-item>
                    <b-dropdown-item @click="getActiv(4)" href="#">{{ $t( 'nav.payment') }} <span class="float-right mr-5"  v-if="payment"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8101 0.916222C12.5563 0.662366 12.1448 0.662366 11.8909 0.916222L4.10347 8.7037L1.11012 5.71035C0.856292 5.4565 0.444761 5.45652 0.19088 5.71035C-0.0629756 5.96418 -0.0629756 6.37571 0.19088 6.62957L3.64385 10.0825C3.89761 10.3363 4.30944 10.3361 4.56309 10.0825L12.8101 1.83546C13.064 1.58163 13.064 1.17008 12.8101 0.916222Z" fill="#58FFFF"/></svg></span></b-dropdown-item>
                    <b-dropdown-item @click="getActiv(5)" href="#">{{ $t( 'nav.settings') }} <span class="float-right mr-5"  v-if="settings"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8101 0.916222C12.5563 0.662366 12.1448 0.662366 11.8909 0.916222L4.10347 8.7037L1.11012 5.71035C0.856292 5.4565 0.444761 5.45652 0.19088 5.71035C-0.0629756 5.96418 -0.0629756 6.37571 0.19088 6.62957L3.64385 10.0825C3.89761 10.3363 4.30944 10.3361 4.56309 10.0825L12.8101 1.83546C13.064 1.58163 13.064 1.17008 12.8101 0.916222Z" fill="#58FFFF"/></svg></span></b-dropdown-item>
                </b-dropdown>
            </b-container>
            <b-container>
                <ul role="tablist" class="nav nav-tabs card-header-tabs">
                    <li class="nav-item"><a  href="#" @click="getActiv(0)" v-bind:class="{ active: profile}" class="nav-link bg-primary text-light">{{ $t( 'nav.profile') }}</a></li>
                    <li class="nav-item"><a  href="#" @click="getActiv(1)" v-bind:class="{ active: services}" class="nav-link bg-light text-info">{{ $t( 'nav.services') }}</a></li>
                    <li class="nav-item"><a  href="#" @click="getActiv(2)" v-bind:class="{ active: messages}" class="nav-link bg-light text-info">{{ $t( 'nav.messages') }}</a></li>
                    <li class="nav-item"><a  href="#" @click="getActiv(3)" v-bind:class="{ active: documents}" class="nav-link bg-light text-info">{{ $t( 'nav.documents') }}</a></li>
                    <li class="nav-item"><a  href="#" @click="getActiv(4)" v-bind:class="{ active: payment}" class="nav-link bg-light text-info">{{ $t( 'nav.payment') }}</a></li>
                    <li class="nav-item"><a  href="#" @click="getActiv(5)" v-bind:class="{ active: settings}" class="nav-link bg-light text-info">{{ $t( 'nav.settings') }}</a></li>
                </ul>
            </b-container>
            <div>
                <profile v-if="profile"></profile>
                <services v-if="services"></services>
                <messages v-if="messages"></messages>
                <documents v-if="documents"></documents>
                <payment v-if="payment"></payment>
                <settings v-if="settings"></settings>
            </div>
        </div>
    </div>
</template>

<script>
    import profile from "./profile/Profile"
    import services from "./services/Services"
    import messages from "./messages/Messages"
    import documents from "./documents/Documents"
    import payment from "./payment/Payment"
    import settings from "./settings/Settings"

    export default {
        name: 'informational',
        data () {
            return {
                page:this.$t( 'nav.profile'),
                profile:true,
                services:false,
                messages:false,
                documents:false,
                payment:false,
                settings:false,
            }
        },
        computed:{
            oneUser() {
                return this.$store.getters.oneUser;
            },
        },
        components: {
            'profile': profile,
            'services': services,
            'messages': messages,
            'documents': documents,
            'payment': payment,
            'settings': settings,
        },
        methods: { 
            getActiv(index){
                this.profile = false;
                this.services = false;
                this.messages = false;
                this.documents = false;
                this.payment = false;
                this.settings = false;
                if(index === 0) {
                    this.profile = true
                    this.page = this.$t( 'nav.profile')
                } else if (index === 1){
                    this.services = true
                    this.page = this.$t( 'nav.services')

                } else if (index === 2){
                    this.messages = true
                    this.page = this.$t( 'nav.messages')

                } else if (index === 3){
                    this.documents = true
                    this.page = this.$t( 'nav.documents')

                } else if (index === 4){
                    this.payment = true
                    this.page = this.$t( 'nav.payment')

                } else if (index === 5){
                    this.settings = true
                    this.page = this.$t( 'nav.settings')

                }
            },
        }
    }
</script>

<style scoped>
    .MyProfile {
        margin-top: 67.94px;
        color: #fff;
        align-items: center;
        display: flex;
        justify-content: space-around;
    }
    .myProfileImg {
        border-radius: 50%;
        border: 2px solid #fff;
    }
    #info{
        padding-bottom: 150px;
    }
    .noneBlock{
        display: none;
        width: 98%;
        margin-left:-7px ;
        color: white;
        outline: none;
    }
    

</style>