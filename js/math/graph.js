class Graph{
    constructor(points = [], segments = []){
        this.points = points;
        this.Graph = segments;
    }

    draw(ctx){
        for (const seg of this.segments){
            seg.draw(ctx);
        }
    }
    
    for (const point of this.points){
        points.draw(ctx)
    }
}