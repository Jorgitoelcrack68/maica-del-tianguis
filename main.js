var para_guardar_el_canvas=new fabric.Canvas("canvas")
var pospicasssox=10
var pospicasssoy=10
var tambloalt=30
var tambloanch=30
var jugadorquelovamosatomarcomoobjeto=" "
var lamismaideadelavariabledelpersonajeperoahoraconlosbloques=" "
function dipersonaje() {
    fabric.Image.fromURL("momos.png",function (imsgenpersonaje) {
        jugadorquelovamosatomarcomoobjeto=imsgenpersonaje
        jugadorquelovamosatomarcomoobjeto.scaleToWidth(200)
        jugadorquelovamosatomarcomoobjeto.scaleToHeight(400)
        jugadorquelovamosatomarcomoobjeto.set({
            top:pospicasssoy,
            left:pospicasssox
        })
        para_guardar_el_canvas.add(jugadorquelovamosatomarcomoobjeto)
    })
}

dipersonaje()

function dibloque( bloqkin ) {
    fabric.Image.fromURL(bloqkin,function (imsgenbloque) {
        lamismaideadelavariabledelpersonajeperoahoraconlosbloques=imsgenbloque
        lamismaideadelavariabledelpersonajeperoahoraconlosbloques.scaleToWidth(tambloanch)
        lamismaideadelavariabledelpersonajeperoahoraconlosbloques.scaleToHeight(tambloalt)
        lamismaideadelavariabledelpersonajeperoahoraconlosbloques.set({
            top:pospicasssoy,
            left:pospicasssox
        })
        para_guardar_el_canvas.add(lamismaideadelavariabledelpersonajeperoahoraconlosbloques)
    })
}

window.addEventListener("keydown",teclapres)

function teclapres (j) {
    codigodeteclapressionada=j.keyCode
    console.log(codigodeteclapressionada)
    if (codigodeteclapressionada==38) {
        ariva()
    }
    if (codigodeteclapressionada==37) {
        iskierda()
    }
    if (codigodeteclapressionada==40) {
        avajo()
    }
    if (codigodeteclapressionada==39) {
        derecha()
    }

    if (codigodeteclapressionada==76) {
        dibloque("wall.jpg")
    }

    if (codigodeteclapressionada==84) {
        dibloque("trunk.jpg")
    }

    if (codigodeteclapressionada==80) {
        dibloque("cloud.jpg")
    }

    if (codigodeteclapressionada==77) {
        dibloque("ground.png")
    }

} 

function ariva (){
    pospicasssoy=pospicasssoy-10
    dipersonaje()
}

function iskierda (){
    pospicasssox=pospicasssox-10
    dipersonaje()
}

function avajo (){
    pospicasssoy=pospicasssoy+10
    dipersonaje()
}

function derecha (){
    pospicasssox=pospicasssox+10
    dipersonaje()
}