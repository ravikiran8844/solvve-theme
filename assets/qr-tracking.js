(function(Q, R) {
    if (Q.qr_t) 
      return;
    

    var u = 'https://webview.quickreply.ai/whatsapp/analytics/script.min.js';
    var h = R.head || R.documentElement;
    var e = R.createElement('script');
    e.type = 'text/javascript';
    e.async = true;
    e.src = u;
    Q.qr_t = {
      c: 'D6TQbvpxskrcXyAWt_c'
    };
    h.insertBefore(e, h.lastChild);
  })(window, document);