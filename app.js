
function randomNumb(max , min)
{
    return Math.floor( Math.random() * (max-min)) + min;
}




new Vue({el:"#game"

    ,data:{
        playerHealts:100,
        monsterHealts:100,
        contHeats:0,
        state:null,
        logMessages: [],
    },
    computed:
    {
        healtplayer()
        {
            if(this.playerHealts <=0)
            return {width:0+'%' }
            return {width:this.playerHealts+'%'}
        },
        healtMonster()
        {
            if(this.monsterHealts <=0)
            return {width:0+'%' }
            return {width: this.monsterHealts + '%'}
        },
        speacilAtackTeim()
        {
           return  this.contHeats % 3 !== 0; 
        }
    }
    ,methods:{

        SpaceleplayerAttack(){
            this.contHeats++;
            let vallAtacked =  randomNumb(10,5);
            this.monsterHealts -= vallAtacked;
            this.AddlogMessAag('player','Attack-S',vallAtacked);
            this.monsterAtack();
        },

        playerAttack(){
            this.contHeats++;

            let vallAtacked =  randomNumb(5,0);  // Math.floor( Math.random() * (20-0)) + 0;
            this.monsterHealts -= vallAtacked;

            this.AddlogMessAag('player','Attack',vallAtacked);

            this.monsterAtack();
        },
        monsterAtack()
        {
            var vallAtacked    = randomNumb(20,0); // Math.floor( Math.random() * (40-0)) + 0;
            this.playerHealts -=vallAtacked;

            this.AddlogMessAag('Monster','Attack',vallAtacked);
        },
        healtYoues()
        {
          let vallAtacked =  randomNumb(10,5);
            
            if(this.playerHealts >= 100){
                this.playerHealts = 100 ;
            }else this.playerHealts +=vallAtacked; 
             
             this.AddlogMessAag('player','Healts',vallAtacked);

        }
        ,AddlogMessAag(who,what,value)
        {
            this.logMessages.unshift({
                 actionBy:who
                ,actionByType:what
                ,actionValue:value
            });

           // this.logMessages.unshft()
        }
    },
    watch:
    {
        playerHealts(value){
            if(value > 0 &&  this.monsterHealts < 0)
            
               return this.state="You Win";

            if(value <=0  &&  this.monsterHealts > 0)
               return this.state="You loos";

             if(value ==0 &&  this.monsterHealts ==0)
               return this.state="drow";
        }

    }
});