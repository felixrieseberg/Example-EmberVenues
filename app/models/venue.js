import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    friendlyName: DS.attr('string'),
    type: DS.attr('string'),
    posts: DS.attr('number'),
    image: DS.attr('string'),
    follows: DS.attr('number'),
    created: DS.attr('date')
});
