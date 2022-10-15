import { defineStore } from "pinia";

export const formValidationStore = defineStore({
  id: "formValidationStore",
  state: () => ({
    error: [],
    roles: [],
    registerVisible: false,
  }),
  actions: {
    setErrors() {
      this.error = []
    },
    queryRegister(data: object) {
        
        
      fetch("http://54.242.120.40:3000/auth/register", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          /* Succesfull */
          this.registerVisible = false;
        })
        .catch((error) => {
          this.registerVisible = true;
        });
    },
  },
});
