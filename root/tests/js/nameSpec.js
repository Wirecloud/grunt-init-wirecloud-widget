/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= vendor_title %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

/* globals $, MashupPlatform, MockMP, {%= entrypoint %} */

(function () {

    "use strict";

    describe("{%= jsname %}", function () {

        var widget;
        var MashupPlatform;

        beforeAll(function () {
            MashupPlatform = new MockMP({
                type: 'widget'
            });
        });

        beforeEach(function () {
            MashupPlatform.reset();
            widget = new {%= entrypoint %}(MashupPlatform, undefined, {});
        });

        it("Dummy test", function () {
            expect(widget).not.toBe(null);
        });

    });

})();
