function FeaturedWorks() {
    this.content = [];

    this.setupFeaturedWorks = function() {
        console.log("Set up featured works");
        var items = ['a', 'b', 'c', '1', '2', '3'];
        var id = 0;
        var imageSource = 'img/ftg-thumbnail.png';
        var content = this.content;
        angular.forEach(items, function(item) {
            var featuredWork = {id:id, title:'Featured Work Title '+item, tags:['tag1', 'tag2'], thumbnail:imageSource};
            content.push(featuredWork);
            id++;
        })
        console.dir(content);

    }

    this.setupFeaturedWorks();
}
