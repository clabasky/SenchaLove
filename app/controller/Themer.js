/**
 * @class Kitchensink.controller.Main
 * @extends Ext.app.Controller
 *
 * This is an abstract base class that is extended by both the phone and tablet versions. This controller is
 * never directly instantiated, it just provides a set of common functionality that the phone and tablet
 * subclasses both extend.
 */
Ext.define('Kitchensink.controller.Themer', {
    extend: 'Ext.app.Controller',
    
    init: function(){
        Kitchensink.Themer = this;
    },
    config: {
        control: {
            'selectfield[itemId="themer"]': {
                change: 'themeChange'
            }
        }
        /*
        viewCache: [],

        refs: {
            nav: '#mainNestedList',
            main: 'mainview',
            toolbar: '#mainNavigationBar',
            sourceButton: 'button[action=viewSource]',

            sourceOverlay: {
                selector: 'sourceoverlay',
                xtype: 'sourceoverlay',
                autoCreate: true
            }
        },

        

        routes: {
            'demo/:id': 'showViewById',
            'menu/:id': 'showMenuById',
            '': 'showMenuById'
        },
*/
        /**
         * @cfg {Ext.data.Model} currentDemo The Demo that is currently loaded. This is set whenever showViewById
         * is called and used by functions like onSourceTap to fetch the source code for the current demo.
         */
       
    },
    
    themeChange: function(field, newValue, oldValue, eOpts){
        console.log(newValue);
        this.setActiveStyleSheet(newValue);
    },
    
    //Kitchensink.Themer.setActiveStyleSheet('custom')
 setActiveStyleSheet: function(title) {
    var links = document.getElementsByTagName("link");
    
    for(i in links){
        var a = links[i];
        if(a.getAttribute("rel").indexOf("style") != -1
        && a.getAttribute("title")) {
       a.disabled = true;
       if(a.getAttribute("title") == title) a.disabled = false;
     }
    }
  /* var i, a, main;
   for(i=0; (a = document.getElementsByTagName("link")); i++) {
     if(a.getAttribute("rel").indexOf("style") != -1
        && a.getAttribute("title")) {
       a.disabled = true;
       if(a.getAttribute("title") == title) a.disabled = false;
     }
   }*/
}
    
    
    
    
    
    
    
    
 


    
    
    
});
