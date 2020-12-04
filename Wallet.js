class Wallet{
    constructor(money){
        let _money = money;
        //pobieranie aktualnej zawartości portfela 
        this.getWalltetValue = () => {
            return money;
        }
        this.checkCanPlay = (value) => {
            if(_money >= value) return true;
            return false;
        }
        this.changeWallet = (value, type = "+") => {
            if(typeof value === "number" && !isNaN(value)){
                if(type === "+"){
                    return money += value;
                }else if(type === "-"){
                    return money -= value;
                }
                else{
                    throw new Error("Nieprawidłowy typ działania")
                }
            }else{
                console.log(typeof value)
                throw new Error("Nieprawidłowy typ działania");
            }
        }
    }
}
// const xD = new Wallet (230)