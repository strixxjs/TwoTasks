ctx.prototype.__iterateStyles = function(source, callback) {
    var keys = Object.keys(source);
    var i, key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        callback(key, source);
    }
};

ctx.prototype.__applyStyleState = function(styleState) {
    this.__iterateStyles(styleState, function(k, src) {
        this[k] = src[k];
    });
};

ctx.prototype.__setDefaultStyles = function() {
    this.__iterateStyles(STYLES, function(k) {
        this[k] = STYLES[k].canvas;
    });
};

ctx.prototype.__getStyleState = function() {
    var state = {};
    this.__iterateStyles(STYLES, function(k) {
        state[k] = this[k];
    });
    return state;
};