/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= vendor_title %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

(function (script) {

    "use strict";

    // =========================================================================
    // CLASS DEFINITION
    // =========================================================================

    class Widget {
        constructor(MashupPlatform, shadowDOM, extra) {
            this.MashupPlatform = MashupPlatform;
            this.shadowDOM = shadowDOM;

            MashupPlatform.prefs.registerCallback(function (new_preferences) {

            }.bind(this));
        }
    }

    if (!('Wirecloud' in window)) {
        // For testing purposes
        window.Widget = Widget;
    } else {
        Wirecloud.registerWidgetClass(script, Widget);
    }

    /* test-code */

    /* end-test-code */

})(document.currentScript);
