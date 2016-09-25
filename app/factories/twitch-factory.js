app.factory('TwitchFactory', twitchFactory);

twitchFactory.$inject = ['$http'];

function twitchFactory($http) {
    
    function getTopGames() {
        return $http({
            url: 'https://api.twitch.tv/kraken/games/top',
            method: 'GET',
            headers: {
            'Client-Id': '94fr82imfqc65q9ldxpqyjd0vxt201r'
            }
        })
    }

    return {
        getTopGames : getTopGames
    }

}