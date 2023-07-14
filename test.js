// ==UserScript==
// @name         skip_check_available_missions_16
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  when sending expedition don't check available mission with a request but inject an good enough answer to unlock the expe mission and the send button.
// @author       Le Mulet
// @match        https://*.ogame.gameforge.com/game/index.php?page=ingame&component=fleetdispatch*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    (function(send) {
        XMLHttpRequest.prototype.send = function(data) {
            this.onprogress = function () {
                if (document.getElementById('position') && document.getElementById('position').value == '16' && this.responseURL == 'https://s173-cz.ogame.gameforge.com/game/index.php?page=ingame&component=fleetdispatch&action=checkTarget&ajax=1&asJson=1') {
                    var r = JSON.parse('{"additionalFlightSpeedinfo":"","status":"success","orders":{"15":true,"7":false,"8":false,"3":false,"4":false,"6":true,"5":false,"1":false,"2":false,"9":false},"targetInhabited":false,"targetIsStrong":false,"targetIsOutlaw":false,"targetIsBuddyOrAllyMember":false,"targetPlayerId":99999,"targetPlayerName":"","targetPlayerColorClass":"","targetPlayerRankIcon":"","playerIsOutlaw":false,"emptySystems":0,"inactiveSystems":0,"targetOk":true,"components":[],"newAjaxToken":""}');
                    this.onload();
                }
                // A valid GMTString date or null
            }
            send.call(this, data);
        };
    })(XMLHttpRequest.prototype.send);
    // Your code here...
})();
