cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "io.jxcore.node.jxcore",
        "file": "plugins/io.jxcore.node/www/jxcore.js",
        "pluginId": "io.jxcore.node",
        "clobbers": [
            "jxcore"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "io.jxcore.node": "0.1.1"
};
// BOTTOM OF METADATA
});