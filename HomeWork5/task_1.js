/* 
1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, 
    в каком квадранте в декартовой системе координат находится данная точка. 
    Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.
 */

var point = {
    x: 0,
    y: 0,
    getQuadrant: function () {
        if(this.x > 0 && this.y > 0) return "of quadrant I";
        if(this.x < 0 && this.y > 0) return "of quadrant II";
        if(this.x < 0 && this.y < 0) return "of quadrant III";
        if(this.x > 0 && this.y < 0) return "of quadrant IV";
        return "of axes"
    }
}

point.x = 1;
point.y = -5;
console.log("Point (" + point.x + ", " + point.y + ") "+point.getQuadrant());