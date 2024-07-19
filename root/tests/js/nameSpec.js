/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= vendor_title %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

/* globals $, MashupPlatform, MockMP */

(function () {

    "use strict";

    describe("{%= jsname %}", function () {

        var widget;
        var MashupPlatform;
        var Widget;

        beforeAll(function () {
            MashupPlatform = new MockMP({
                type: 'widget'
            });

            Widget = window.Widget;
        });

        beforeEach(function () {
            MashupPlatform.reset();
            widget = new Widget(MashupPlatform, undefined, {});
        });

        it("Dummy test", function () {
            expect(widget).not.toBe(null);
        });

    });

})();
