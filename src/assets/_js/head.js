import WebFont from 'webfontloader';

WebFont.load({
  typekit: { id: 'mee1emt' },
  loading: function() {
    window.console.log('LOADING FONTS');
  },
  active: function() {
    window.console.log('ACTIVE FONTS');
  },
  inactive: function() {},
  fontloading: function(familyName, fvd) {},
  fontactive: function(familyName, fvd) {},
  fontinactive: function(familyName, fvd) {},
  timeout: 2000 // Set the timeout to two seconds/
});


