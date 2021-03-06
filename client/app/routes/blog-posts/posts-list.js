import Ember from 'ember';

export default Ember.Route.extend({
    controllerName: 'blog-posts',

    model() {
        let ctrl = this.controllerFor('blog-posts');
        let query = {
            page: 1,
            size: ctrl.get('pageSize')
        };
        ctrl.set('currentPage', 1);
        return this.store.query('post', query);
    }
});
