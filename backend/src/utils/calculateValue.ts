export default function calculateValue(initial:Number, final:Number, cost:string) {
    if(final > initial){
       return (Number(final) - Number(initial))*Number(cost);
    }
    if(final < initial){
        return ((Number(final)+365) - Number(initial))*Number(cost);
    }
    if(final == initial){
        return cost;
    }

}