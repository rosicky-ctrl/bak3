import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cartStore', // required for Vue Devtools
  state: () =>({
    items: [],
    sum: 0
  }),

  actions:{
    add: function(p) {
       const index = this.items.findIndex(i => i.id == p.id)
       if (index == -1){
           this.items.push({
               id: p.id,
               name: p.name,
               price: p.price,
               quantity: 1,
               value: p.price
           })
       }
       else {
           this.items[index].quantity++
           this.items[index].value += p.price
       }
       this.sum+= p.price;
    },
    remove: function(p) {
        const index = this.items.findIndex(i => i.id == p.id)
        if (index == -1) return 
        if (this.items[index].quantity == 1){
            this.items.splice(index, 1)}
        else {
            this.items[index].quantity--
            this.items[index].value -= p.price
        
        }
        this.sum-= p.price;
    }
  }
})