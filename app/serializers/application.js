import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    extractArray: function(store, type, payload) {
        var venues = [];

        payload.forEach(function (venue) {
            venues.push({
                id: venue['Id'],
                name: venue['Name'],
                image: venue['Image'],
                posts: venue['Posts'],
                friendlyName: venue['FriendlyName'],
                created: venue['Created'],
                follows: venue['Follows'],
                type: venue['Type']
            });
        })

        payload = { venues: venues };

        return this._super(store, type, payload);
    }
});
