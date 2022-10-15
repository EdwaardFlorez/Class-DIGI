import { defineStore } from "pinia";

export const registerStore = defineStore({
  id: "registerStore",
  state: () => ({
    documentType: [],
    roles: [],
    registerVisible: false,
  }),
  actions: {
    queryDocumentAndRol() {
      console.log(this.registerVisible);
      fetch("http://54.242.120.40:3000/tipe-document/all").then((response) =>
        response.json().then((data) => (this.documentType = data))
      );
      fetch("http://54.242.120.40:3000/rol/all").then((response) =>
        response.json().then((data) => (this.roles = data))
      );
      this.registerVisible = !this.registerVisible;
    },
    queryRegister(data: object) {
        console.log(data);
        
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
