<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
}
</script>

<style>
body{
  background: #2150ac;  
  background: -webkit-linear-gradient(to bottom, #153067, #2150ac);  
  background: linear-gradient(to bottom, #153067, #2150ac); 
  font-family: Montserrat;
}
.night{
    background: #1d1d1d !important;  
}
.card-header{
  background-color: rgba(0, 0, 0, 0) !important;
  border: 0 !important;
}
.nav-tabs .nav-item{
  width: 16%;
  text-align: center;
  margin-left: 1px;  
}
a.bg-light:hover, a.bg-light:focus, button.bg-light:hover, button.bg-light:focus{
  background: linear-gradient(180deg, #5FCDBC 0%, #4FA0CC 100%) !important;
  color: #fff !important;
  font-weight: 700;
}
a.bg-primary:hover, a.bg-primary:focus, button.bg-primary:hover, button.bg-primary:focus{
  color: #fff !important;
  font-weight: 700;
  outline: none;
}
a.bg-primary:active, a.bg-primary:active, button.bg-primary:active, button.bg-primary:active{
  color: #fff !important;
  font-weight: 700;

}
.nav-tabs .nav-link{
  border: 0 !important;
  background: #2b477e !important;
  color: #fff !important;
  outline: none;
  border-radius: 0px !important
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link{
   background: linear-gradient(180deg, #5FCDBC 0%, #4FA0CC 100%) !important;
   font-weight: 700;
}
.nav-link{
  width: 100%;
}

.nav-tabs :first-child .nav-link{
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
}
.modal-content{
  background-color:  #153066 !important;
  border-radius: 18px !important;
}
.modal-content h2{
  color: #fff;
}
.nav-tabs :last-child .nav-link{
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 5px !important;
}
.close{
  color: #fff !important;
  opacity: 1 !important;
}
.modal-header{
  border-bottom: 0px !important;
  padding: 48px;
}
.modal-body{
  padding: 24px 48px !important;
}
.modalSubTitle{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-top: 32px;
  color: #FFFFFF;
}
.navbar-dark .navbar-toggler{
  border: 0 !important;
}
.bv-example-row{
  margin-bottom: 30px;
}
.dropdown-toggle {
  background: transparent !important;
  border: none !important;
  padding-bottom: 5px;
  margin-bottom: 30px;
  border-radius: 0 !important;
  text-align: left !important;
  padding-right: 0px !important;
  padding-left: 0px !important;
}

.dropdown-toggle::after {
  float: right;
  margin-top: 14px;
}

@media only screen and (max-width: 991px) {
  .nav-tabs .nav-link {
    font-size: 12px !important;
  }
  .container{
    max-width: 100% !important;
    margin: auto;
  }
}
@media only screen and (max-width: 767px) {
  .tistant{
    margin: 10px auto !important;
  }
  .noneBlock{
    display: block !important;
    width: 100% !important;
    margin-top: 30px;
  }
  .btn:not(:disabled):not(.disabled){
    background-color: transparent !important;
    border: 0 !important;
    width: 90%;
    margin-left: 5%;
    text-align: left;
    border-bottom: 2px solid #5FCDBC !important;
    border-radius: 0;
  }
  .btn:not(:disabled):not(.disabled):focus{
    box-shadow: none !important;
  }
  .dropdown-menu.show{
    width: 100% !important;
    background: #143577 !important;
    color: #fff !important;
  }
  .dropdown-item:hover, .dropdown-item:focus{
    color: #58FFFF !important;
    background-color: transparent !important;
  }
  .dropdown-item{
    color: #fff !important;
  }
  .dropdown-toggle::after{
    float: right;
    margin-top: 15px;
  }
  .personalData .personalDataDivs{
    padding: 10px !important;
  }
  .personalDataTitle{
    border-left: 2px solid #58FFFF;
    padding-left: 10px;
  }
  .personalDataDivs{
    border: 0 !important;
    background-color: transparent !important;
  }
  .card-header-tabs{
    display: none !important;
  }
}
@media only screen and (max-width: 400px) {
  nav svg{
    width: 150px !important;
  }
}
</style>
