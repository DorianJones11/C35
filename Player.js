class Player
{
    constructor()
    {

    }
    getCount()
    {
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        });
    }

    updateCount(count)
    {
    database.ref('/').update({
        playerCount:count
    });
    }

    update(playerName)
    {
        var playerIndex="player"+playerCount;
    console.log(playerIndex)
        database.ref(playerIndex).set({
            name:playerName
        })
    }
    
}