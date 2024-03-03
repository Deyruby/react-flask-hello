import { toast } from "sonner";


const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: "",
            user: {}


        },
        actions: {
            // Use getActions to call a function within a fuction
            fetchRegister: (data2) => {
                const storage = getStore()
                fetch("https://obscure-waffle-rjgj9p4p569f5r9v-3001.app.github.dev/user", {
                    method: "POST",
                    body: JSON.stringify(data2),
                    headers: {
                        "content-type": "application/json",
                        "Authorization": `Bearer ${storage.token}`
                    }
                }).then((response) => {
                    return response.json()
                }).then((data2) => {
                    console.log("data", data2)
                })
                    .catch((error) =>
                        console.log(error))
            },


            fetchLogin: (data) => {

                const storage = getStore()
                return fetch("https://obscure-waffle-rjgj9p4p569f5r9v-3001.app.github.dev/login", {

                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "content-type": "application/json",
                        "Authorization": `Bearer ${storage.token}`

                    }
                })
                    .then((response) => {
                        if (response.status === 200) {
                            return response.json()
                        } if (response.status === 401) {

                            toast.error("Usuario no existe")

                            throw new Error("ERROR")
                        } if (response.status === 400) {

                            toast.error("Contraseña Incorrecta")
                            throw new Error("ERROR")
                        } if (response.status === 422) {
                            throw new Error("ERROR");
                        }
                    })
                    .then((response) => {
                        setStore({ token: response.token, user: response.user })
                        sessionStorage.setItem("Token", response.token)
                        return true

                    })

            },

            fetchValidateToken: () => {
                const storage = getStore()
                return fetch("https://obscure-waffle-rjgj9p4p569f5r9v-3001.app.github.dev/single", {

                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        "Authorization": `Bearer ${storage.token}`

                    },
                }).then((response) => {
                    return response.ok
                }).catch((error) =>
                    console.log(error));



            },

        },



    }
};


export default getState;
