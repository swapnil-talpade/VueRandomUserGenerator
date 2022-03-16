const app = Vue.createApp({
    data() {
        return {
            firstName: 'Swapnil',
            lastName: 'Talpade',
            email: 'swapniltalpade41@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = fetch('https://randomuser.me/api/')
            const { results } = await (await res).json();

            console.log(results)

            const { name, email, picture, gender } = results[0]


            this.firstName = name.first,
                this.lastName = name.last,
                this.email = email,
                this.gender = gender,
                this.picture = picture.large
        }
    }
})

app.mount('#app')