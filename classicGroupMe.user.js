// ==UserScript==
// @name Classic GroupMe Restorer
// @namespace http://tampermonkey.net/
// @version 0.1
// @author capcor
// @match *://web.groupme.com/*
// @match *://groupme.com/*
// @match *://cdn.groupme.com/*
// @grant none
// ==/UserScript==

(function() {


    var style = document.createElement('style');
    style.innerHTML = `
        .message-composer .composer-layout .composer-wrapper .emoji-wysiwyg-editor {
            background-color: #fffFff;
            border-radius: 0px;
            padding: 14px 14px 14px 55px;
            margin: 0px;
        }
        #chats .chat-header .menu-toggle .avatar-wrap .avatar img {
            border-radius: 0px;
        }
        .image-content .image-wrapper img {
            border-radius: 0px;
        }
        .pillar {
            background-color: #ffffff !important;
        }
        .pillar * {
            color: #00AFF0 !important;
        }
        .new-chat * {
            color: #00AFF0 !important;
        }
        .message-composer .composer-layout .plus-extender * {
            color: #00AFF0 !important;
        }
        .chat-messages .message .message-header .message-pill {
            border: 1.5px solid #00AFF0;
        }
        .toggle-switch * {
            color: #00AFF0 !important;
        }
        .fancy-toggle * {
          color: #00AFF0 !important;
        }
        .company-links * {
          color: #00AFF0 !important;
        }
        .poundie {
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/0c/PEO-groupme-0.svg') !important;
            background-size: cover !important;
        }
        .skype-button-container {
          display: none !important;
        }
        .message-composer .composer-layout .composer-wrapper .emoji-wysiwyg-editor:empty:before {
          left: 55px;
        }
        .message-composer .composer-layout .controls-right {
          left: 0px;
          top: 5px
        }
        .message-composer .composer-layout .controls-left {
          left: 900px;
          top: 3px;
        }
    `;
    document.head.appendChild(style);

    'use strict';

    const newFaviconUrl = 'https://web.archive.org/web/20130115074559id_/https://groupme.com/favicon.ico'; // Replace with the URL of the new favicon image

    const linkElements = document.getElementsByTagName('link');
    for (let i = 0; i < linkElements.length; i++) {
        const linkElement = linkElements[i];
        if (linkElement.rel === 'icon' || linkElement.rel === 'shortcut icon') {
            linkElement.href = newFaviconUrl;
            break;
        }
    }

})();


