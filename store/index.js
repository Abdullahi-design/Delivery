export const state = () => ({
    all: {
        bigTruck:{
            id: 2,
            type: 'Big Truck',
            capacity: '1000 Kg',
            speed: '70 km/hr',
            img: '/icons/big-truck.png'
        },
    
     truck:{
            id: 3,
            type: 'Truck',
            capacity: '500 Kg',
            speed: '120 km/hr',
            img: '/icons/truck.png'
        },
     
     miniVan:{
            id: 4,
            type: 'Mini Van',
            capacity: '100 Kg',
            speed: '100 km/hr',
            img: '/icons/minivan.png'
        },
     
        rickShaw:{
            id: 5,
            type: 'Bike',
            capacity: '10 Kg',
            speed: '60 km/hr',
            img: '/icons/rickshaw.png'
        }
    }
     
})
export const getters = {
    getTruck(state){
        return state.all
    }
}