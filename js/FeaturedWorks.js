function FeaturedWorks() {
    this.content = [];
    this.index = 0;

    this.setIndex = function(index) {
        console.log("try to set index to "+index);
        if (this.content.length > index) {
            this.index = index;
        }
        else
            this.index = 0;
        console.log("set index to "+this.index);
    }

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

    this.getContents = function () {
        return this.content;
    }

    this.getIndex = function () {
        return this.index;
    }

    this.getFeaturedWorkById = function (id) {
        console.log("get featured work with id="+id);
        var featuredWork = undefined;

        angular.forEach(this.content, function(thisFeaturedWork) {
            if (thisFeaturedWork.id == id)
                featuredWork = thisFeaturedWork;
        });

        return featuredWork;
    }

    this.getNextIndex = function() {
        this.index++;
        if (this.index >= this.content.length)
            this.index = 0;
        console.log("next index is="+this.index )
        return this.index;
    }

    this.getPrevIndex = function() {
        this.index--;
        if (this.index < 0)
            this.index = this.content.length - 1;
        console.log("prev index is="+this.index )
        return this.index;
    }




    this.setupFeaturedWorks();
}
