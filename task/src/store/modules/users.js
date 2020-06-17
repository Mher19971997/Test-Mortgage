export default {
    actions: {
        async changeUserData(ctx , user) {
            console.log(user)
            ctx.commit("userData", user)
        }
    },
    mutations: {
        userData(state,user){
            state.user[0] = user;
        }
    },
    state:{
        user : [
            {
                userid : 1,
                first_name : 'Юлия',
                last_name : 'Орлова',
                tel : '+972 58 579 5657', 
                email : 'j.orlova@eitanmortgage.com',
                city : 'Москва',
                street : 'Таганская ул., д.2',
                home : '89',
                passport : '4016 5678479',
                city_pas_1 : 'ТП 18 Санкт- Петербурга',
                data : '12.12.2016',
                city_pas_2 : 'Санкт- Петербург'
            }
        ],
    },
    getters:{
        oneUser(state) { 
            return state.user ;
        }
    }
}