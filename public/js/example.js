(function() {
    'use strict';

    //event listeners.
    document.addEventListener('DOMContentLoaded', function() {
        //OpenFin is ready
        fin.desktop.main(function() {
            var myWindow = fin.desktop.Window.getCurrent(),
                //obtain the toolbar DOM element.
                toolbar = document.getElementById('drag-container');

            //call defineDraggableArea method with the toolbar.
            myWindow.defineDraggableArea(toolbar);
            //myWindow.minimize();
            //myWindow.maximize();
            //myWindow.resizeTo(109, 109, "top-left");
        });
    });


}());
