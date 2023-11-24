import { defineStore } from 'pinia'

type CarType = {
  regNumber: string,
  categoryOfVehicle: string,
  make: string,
  model: string,
  fuelType: string,
  pricePerDay: string,
  carPhoto: string,
}

export const useSelectedCarStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'selectedCar',
  state: () => ({
    car: <CarType>{}
  }),
  getters: {},
  actions: {},
})