AFRAME.registerComponent('car', {
    schema: {
        radius: {type:'number', default: '75'},
        height: {type:'number', default: '3'}
    },
    init: function(){
        this.el.setAttribute("geometry",{
          primitive: "rectangle",
          radius: this.data.radius,
          height: this.data.height,
          src="./assets/models/alfa_romeo_stradale_1967/scene.gltf"
        });
    }
});